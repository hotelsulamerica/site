import "./globals.css";

export const metadata = {
  title: "Hotel Sul América",
  description: "Criado por Rixxer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
