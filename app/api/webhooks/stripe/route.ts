import { lifetimeDeals } from "@/config/lifetime.constants";
import { pricingPlans } from "@/config/pricing.constants";
import { prisma } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("Stripe-Signature");

  let event;
  let data;

  try {
    event = Stripe.webhooks.constructEvent(
      body,
      signature as string,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    return new NextResponse(`Webhook Error: ${error}`, { status: 400 });
  }

  data = event.data.object as Stripe.Checkout.Session;

  switch (event.type) {
    case "checkout.session.completed":
      const session = await stripe.checkout.sessions.retrieve(data.id, {
        expand: ["line_items"],
      });

      const mode = session.mode as Stripe.Checkout.Session.Mode;

      const customerId = session.customer as string;

      const customer = (await stripe.customers.retrieve(
        customerId
      )) as Stripe.Customer;

      const price = session?.line_items?.data[0]?.price;
      const priceId = price?.id;
      const interval = price?.recurring?.interval;

      const plan =
        mode === "subscription"
          ? pricingPlans.find(
              (plan) =>
                (interval === "month"
                  ? plan.monthlyPriceId
                  : plan.annualPriceId) === priceId
            )
          : lifetimeDeals.find((plan) => plan.priceId === priceId);

      if (!plan) break;

      await prisma.user.update({
        where: {
          email: customer.email as string,
        },
        data: {
          role: plan.role.toUpperCase() as "USER" | "ADMIN",
          hasAccess: true,
        },
        select: null,
      });

      break;
    case "customer.subscription.deleted":
      const subscription = (await stripe.subscriptions.retrieve(
        data.id
      )) as Stripe.Subscription;

      await prisma.user.update({
        where: {
          stripeCustomerId: subscription?.customer as string,
        },
        data: {
          role: "USER",
          hasAccess: false,
        },
        select: null,
      });

      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return new NextResponse(null, { status: 200 });
}
