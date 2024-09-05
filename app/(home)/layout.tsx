import { Header } from "../_components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header transparent />

      <main>{children}</main>

      <div id="image-root"></div>
    </>
  );
}
