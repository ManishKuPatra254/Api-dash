import { Navigation } from "../components/Navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navigation />
      <div className="mx-auto max-w-7xl py-10 sm:px-6">{children}</div>
    </div>
  );
}
