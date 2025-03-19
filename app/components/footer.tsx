import { Section } from "./section";
export const Footer = () => {
  return (
    <Section bgColor="#134FED" skinny={true}>
      <p>© {new Date().getFullYear()} DataLoop</p>
    </Section>
  );
};
