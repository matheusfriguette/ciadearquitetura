import { Footer } from "../_components/footer";
import { PagesHeader } from "../_components/pages-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PagesHeader />

      <main className="pb-40">{children}</main>

      <Footer />

      <div id="image-root"></div>
    </>
  );
}
