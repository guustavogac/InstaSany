import Image from "next/image";
// src/app/page.tsx
import { Epilogue } from 'next/font/google';
import { Children } from "react";


const EpilogueFont = Epilogue({
  subsets: ['latin'], // Adicione a vírgula aqui
  weight: ['500', '600', '700'],
});


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <main className={EpilogueFont.className}>
          <h1>InstaSany</h1>
          <p>Texto com a fonte Epilogue.</p>
          {children}
        </main>
      </body>
    </html>
  );
}