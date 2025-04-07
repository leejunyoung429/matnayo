// layout.jsx
import "./globals.css";
import Header from "@/components/header";
import "@radix-ui/themes/styles.css";
import { Providers } from "./providers"; // 경로를 실제 위치에 맞게 조정

export const metadata = {
  title: "My App",
  description: "My App Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <div className="w-[375px] max-w-full mx-auto bg-white flex flex-col">
          <Header />
          <Providers>
            <div>{children}</div>
          </Providers>
        </div>
      </body>
    </html>
  );
}
