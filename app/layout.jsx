import "./globals.css";
import Header from "@/components/header";

export const metadata = {
  title: "My App",
  description: "My App Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          crossOrigin="anonymous"
        />
      </head>

      <body>
        <div className="body-wrapper">
          <Header />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
