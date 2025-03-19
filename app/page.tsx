import { Header } from "./components/header";
import { About } from "./components/about";
import { Clients } from "./components/clients";
import { Footer } from "./components/footer";

export default function Page() {
  return (
    <>
      <Header />
      <About />
      <Clients />
      <Footer />
    </>
  );
}
