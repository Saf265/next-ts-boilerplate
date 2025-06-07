export const pricingPlans = [
  {
    title: "Starter",
    monthlyCheckoutUrl:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_4gw5mPdmLf0u3aEeUU"
        : "",
    annualCheckoutUrl:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_00g8z196v3hM6mQ4gi"
        : "",
    monthlyPriceId:
      process.env.NODE_ENV === "development"
        ? "price_1RD1m8E0fGNvUMFWzfozqhZO"
        : "",
    annualPriceId:
      process.env.NODE_ENV === "development"
        ? "price_1RD1vnE0fGNvUMFWvCuuROaL"
        : "",
    monthlyPrice: 9.99,
    annualPrice: 83.99,
    highlighted: false,
    features: [
      "Génération de 10 ebooks par mois",
      "Accès à toutes les fonctionnalités",
      "Support non prioritaire",
      "Export de livres au format PDF",
    ],
    role: "STARTER",
  },
  {
    title: "Pro",
    monthlyCheckoutUrl:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_00g6qTgyX8C68uYdQR"
        : "",
    annualCheckoutUrl:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_aEUeXp6Yn19EaD6dQT"
        : "",
    monthlyPriceId:
      process.env.NODE_ENV === "development"
        ? "price_1RD1mdE0fGNvUMFWL28WkZPQ"
        : "",
    annualPriceId:
      process.env.NODE_ENV === "development"
        ? "price_1RD1uqE0fGNvUMFWAfPTHBT6"
        : "",
    monthlyPrice: 19.99,
    annualPrice: 179.99,
    features: [
      "Génération d'ebook illimitée",
      "Accès à toutes les fonctionnalités",
      "Support prioritaire",
      "Export de livres au format PDF",
    ],
    highlighted: true,
    role: "PRO",
  },
];
