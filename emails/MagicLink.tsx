import { brandName, publicLogoUrl } from "@/config/config";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface MagicLinkEmailProps {
  magicLink?: string;
}

export const MagicLinkEmail = ({ magicLink }: MagicLinkEmailProps) => (
  <Html>
    <Head />
    <Body className="bg-background font-sans">
      <Preview>Log in with this magic link.</Preview>
      <Container className="mx-auto px-[25px] py-[20px] pb-[48px] bg-no-repeat bg-bottom">
        <Img src={publicLogoUrl} width={48} height={48} alt={brandName} />
        <Heading className="text-[28px] font-bold mt-[48px]">
          🪄 Your magic link
        </Heading>
        <Section className="my-[24px]">
          <Text className="text-[16px] leading-[26px]">
            <Link href={magicLink} className="text-[#FF6363]">
              👉 Click here to sign in 👈
            </Link>
          </Text>
          <Text className="text-[16px] leading-[26px]">
            If you didn't request this, please ignore this email.
          </Text>
        </Section>
        <Text className="text-[16px] leading-[26px]">
          Best,
          <br />- {brandName} Team
        </Text>
        <Hr className="border-t border-[#dddddd] mt-[48px]" />
        <Img
          src={publicLogoUrl}
          width={32}
          height={32}
          className="my-[20px] grayscale"
        />
        <Text className="text-foreground text-[12px] ml-[4px]">
          {brandName}
        </Text>
      </Container>
    </Body>
  </Html>
);

export default MagicLinkEmail;
