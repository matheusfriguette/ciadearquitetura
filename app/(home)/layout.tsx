import { HomeHeader } from "../_components/home-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HomeHeader />

      <main>{children}</main>

      <div id="image-root"></div>
    </>
  );
}
