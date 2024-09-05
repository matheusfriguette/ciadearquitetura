import { Footer } from "../_components/footer";
import { Header } from "../_components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <main className="pb-40">{children}</main>

      <Footer />

      <div id="image-root"></div>
    </>
  );
}
