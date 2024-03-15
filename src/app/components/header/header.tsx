import Image from "next/image";

import "./header.scss";

export function Header(){
    return(
      <div>
          <div className="header">
          <h1>Olá, sou Wheydson Richard👋</h1>
          <h2>Desenvolvedor Software!</h2>
          <Image
          src="/my.jpeg"
          alt="Vercel logo"
          width={277}
          height={315}
          priority
          />
        </div>
      </div>   
    )
}