import MainMenu from "./(components)/main-menu";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-hidden">
        <MainMenu />
        <div className="container mx-auto  items-center justify-center ">
          {children}
        </div>
      </body>
    </html>
  );
}
