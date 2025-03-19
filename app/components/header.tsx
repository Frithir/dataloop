import Image from "next/image";
import { Section } from "./section";

export const Header = () => {
  return (
    <Section bgColor="#134FED">
      <h1 className="mb-8 text-center">
        <Image
          src="/logo.png"
          width={500}
          height={185}
          alt="Dataloop"
          className="mx-auto"
        />
      </h1>
      <p className="mb-4">
        {`lorm ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`}
      </p>
    </Section>
  );
};
