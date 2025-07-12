"use client";
import { useState, useRef } from "react";
import Image from "next/image";

export default function HeaderSection() {
  const [imageSrc, setImageSrc] = useState("/culinaria.jpg");
  const [isFading, setIsFading] = useState(false);
  const imageRef = useRef(null);

  const handleImageChange = (src) => {
    setIsFading(true);

    setTimeout(() => {
      setImageSrc(src);
      setIsFading(false);

      if (window.innerWidth < 768 && imageRef.current) {
        imageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 200);
  };

  return (
    <section className="relative w-full py-12 px-6 md:px-12 bg-[#008C44] text-white">
      <div>
        <h2 className="text-3xl font-bold text-center text-[#FFDF82]">
          Conheça o Hotel Sul América
        </h2>

        <div className="flex justify-center">
          <div
            className="bg-center bg-no-repeat bg-contain opacity-50 h-[5px] w-[80px] my-[10px]"
            style={{ backgroundImage: "url('/wave.svg')" }}
          ></div>
        </div>

        <p className="text-center max-w-2xl mx-auto">
          O Hotel Sul América é um hotel localizado em São Lourenço, Minas
          Gerais, uma linda estância hidromineral, e oferece conforto e
          qualidade para seus hóspedes.
        </p>
      </div>

      <div className="flex flex-col md:flex-row mt-12 gap-8">
        <div className="flex-1 flex items-center justify-center" ref={imageRef}>
          <div
            className={`transition-opacity duration-300 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          >
            <Image
              src={imageSrc}
              alt="Hotel"
              width={500}
              height={500}
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>

        <div className="flex-1">
          <ul className="space-y-6 cursor-pointer">
            <li onClick={() => handleImageChange("/culinaria.jpg")}>
              <p className="font-semibold text-lg text-[#FFDF82]">Culinária</p>
              <p>
                O Hotel Sul América oferece uma gastronomia mineira excepcional,
                com uma variedade de pratos preparados com ingredientes frescos.
              </p>
            </li>

            <li onClick={() => handleImageChange("/piscina.jpg")}>
              <p className="font-semibold text-lg text-[#FFDF82]">Piscinas</p>
              <p>
                Contamos com 3 piscinas, sendo uma térmica, onde você pode
                relaxar e se divertir em todas as estações.
              </p>
            </li>

            <li onClick={() => handleImageChange("/cinema.jpg")}>
              <p className="font-semibold text-lg text-[#FFDF82]">Cinema e TV</p>
              <p>
                Em nossas instalações, você pode assistir filmes e se divertir
                em nosso cinema ou em uma de nossas TVs enormes!
              </p>
            </li>

            <li onClick={() => handleImageChange("/shows.jpg")}>
              <p className="font-semibold text-lg text-[#FFDF82]">Festas</p>
              <p>
                Toda quinta, sexta e sábado temos festas para nossos hóspedes,
                com petiscos, bebidas e música ao vivo!
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
