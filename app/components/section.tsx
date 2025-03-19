export const Section = ({
  children,
  bgColor,
  skinny,
}: {
  children: React.ReactNode;
  bgColor: string;
  skinny?: boolean;
}) => {
  if (skinny === undefined) {
    skinny = false;
  }
  return (
    <section
      className={skinny ? "px-20 py-4" : "p-20"}
      style={{ background: bgColor }}
    >
      <div className="max-w-3xl mx-auto">{children}</div>
    </section>
  );
};
