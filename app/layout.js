import "./globals.css";

export const metadata = {
  title: "Jardeson, Tainá e Maria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
