"use client";
import { useState, useRef } from "react";
import Image from "next/image";

export default function HeaderSection() {
  const [imageSrc, setImageSrc] = useState("/culinaria.jpg");
  const [isFading, setIsFading] = useState(false);
  const [activeItem, setActiveItem] = useState("culinaria");
  const imageRef = useRef(null);

  const handleImageChange = (src, key) => {
    setIsFading(true);
    setActiveItem(key);

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
            className={`relative w-full h-[300px] md:h-[400px] transition-opacity duration-300 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          >
            <Image
              src={imageSrc}
              alt="Hotel"
              fill
              className="rounded-xl shadow-xl object-cover"
            />
          </div>
        </div>

        <div className="flex-1">
          <ul className="cursor-pointer space-y-4">
            <li
              onClick={() => handleImageChange("/culinaria.jpg", "culinaria")}
              className={`relative p-3 rounded-xl transition-colors ${
                activeItem === "culinaria"
                  ? "bg-white text-[#008C44]"
                  : "bg-transparent"
              }`}
            >
              {activeItem === "culinaria" && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-0 h-0 border-y-[10px] border-y-transparent border-r-[10px] border-r-white mr-2"></div>
              )}
              <p className={`font-bold text-lg ${activeItem === "culinaria" ? "text-black" : "text-[#FFDF82]"}`}>
                Culinária
              </p>
              <p className="text-sm font-semibold">
                O Hotel Sul América oferece uma gastronomia mineira excepcional,
                com uma variedade de pratos preparados com ingredientes frescos.
              </p>
            </li>

            <li
              onClick={() => handleImageChange("/piscina.jpg", "piscina")}
              className={`relative p-3 rounded-xl transition-colors ${
                activeItem === "piscina"
                  ? "bg-white text-[#008C44]"
                  : "bg-transparent"
              }`}
            >
              {activeItem === "piscina" && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-0 h-0 border-y-[10px] border-y-transparent border-r-[10px] border-r-white mr-2"></div>
              )}
              <p className={`font-bold text-lg ${activeItem === "piscina" ? "text-black" : "text-[#FFDF82]"}`}>
                Piscinas
              </p>
              <p className="text-sm font-semibold">
                Contamos com 3 piscinas, sendo uma térmica, onde você pode
                relaxar e se divertir em todas as estações.
              </p>
            </li>

            <li
              onClick={() => handleImageChange("/cinema.jpg", "cinema")}
              className={`relative p-3 rounded-xl transition-colors ${
                activeItem === "cinema"
                  ? "bg-white text-[#008C44]"
                  : "bg-transparent"
              }`}
            >
              {activeItem === "cinema" && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-0 h-0 border-y-[10px] border-y-transparent border-r-[10px] border-r-white mr-2"></div>
              )}
              <p className={`font-bold text-lg ${activeItem === "cinema" ? "text-black" : "text-[#FFDF82]"}`}>
                Cinema e TV
              </p>
              <p className="text-sm font-semibold">
                Em nossas instalações, você pode assistir filmes e se divertir
                em nosso cinema ou em uma de nossas TVs enormes!
              </p>
            </li>

            <li
              onClick={() => handleImageChange("/shows.jpg", "festas")}
              className={`relative p-3 rounded-xl transition-colors ${
                activeItem === "festas"
                  ? "bg-white text-[#008C44]"
                  : "bg-transparent"
              }`}
            >
              {activeItem === "festas" && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-0 h-0 border-y-[10px] border-y-transparent border-r-[10px] border-r-white mr-2"></div>
              )}
              <p className={`font-bold text-lg ${activeItem === "festas" ? "text-black" : "text-[#FFDF82]"}`}>
                Festas
              </p>
              <p className="text-sm font-semibold">
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
