import React from "react";
import Image from "next/image";

export default function Home() {
    return (
        <header className="w-full page-width flex items-center justify-between">
            <Image src="/images/logo.svg" alt="logo" width={100} height={100} />
             <nav className="flex gap-5">
               <a className="bold" href="#">Para você conquistar</a>
               <a className="bold" href="#">O que é consórcio?</a>
               <a className="bold" href="#">Precisa de ajuda?</a>
               <a className="bold" href="#">Blog</a>
             </nav>
        </header>
    )
}