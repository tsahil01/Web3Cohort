export default function Header() {
  return (
    <>
      <div className="container relative w-full mx-auto">
        <section className="mx-auto flex flex-col items-start gap-2 px-4 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
            Welcome to the Solana UI Kit
          </h1>
          <p className="max-w-2xl text-lg font-light text-foreground">
            This is a simple UI kit for Solana projects. It includes a wallet
            connection button, a wallet disconnect button, and a header.
          </p>
        </section>
      </div>
    </>
  );
}
