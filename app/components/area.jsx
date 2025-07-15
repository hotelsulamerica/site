"use client";
import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import Link from "next/link";

export default function LeisureSection() {
  const images = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
    "/image5.jpg",
    "/image6.jpg",
    "/image7.jpg",
    "/image8.jpg",
    "/image9.jpg",
    "/image10.jpg",
  ];

  const [mainSlider, setMainSlider] = useState(null);
  const [thumbsSlider, setThumbsSlider] = useState(null);

  if (mainSlider && thumbsSlider) {
    mainSlider.sync(thumbsSlider);
  }

  return (
    <section
      className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between"
      id="leisure"
    >
      <div className="md:w-1/2">
        <h2 className="text-green-700 text-2xl font-bold">Área de Lazer</h2>
        <ul className="mt-2 space-y-2 text-sm text-gray-700 mr-6">
          {[
            "Com a melhor infraestrutura da cidade, oferecemos mais de 20.000 m² de área construída dedicada ao conforto, lazer e bem-estar dos nossos hóspedes.",
            "Nosso Espaço Aquático aquecido, localizado no 7º andar com vista panorâmica, é um dos destaques da região. Além disso, contamos com:",
            "✔ Piscina térmica com cascata de água quente",
            "✔ Duchas e saunas (seca e a vapor)",
            "✔ Lanchonete à beira da piscina para sua comodidade",
            "✔ Playground coberto e Sala de Jogos",
            "✔ Cinema exclusivo",
            "✔ Recreação todos os finais de semana, com atividades para adultos e crianças",
            "✔ Wi-Fi gratuito, garagem coberta e muito mais!",
            "Para completar sua experiência, o hotel oferece 150 acomodações confortáveis, entre suítes e apartamentos, além de um restaurante com buffet self-service completo em todas as refeições, incluindo deliciosas sobremesas.",
            "Viva momentos de descanso, diversão e sabor em um só lugar.",
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <Link
            href="https://wa.me/5535988680724?text=Vim%20do%20site%20e%20gostaria%20de%20fazer%20uma%20reserva"
            className="bg-[#008C44] hover:bg-[#FFDF82] text-white hover:text-[#0D0D0D] font-semibold text-sm px-5 py-2.5 rounded shadow-md transition whitespace-nowrap"
          >
            RESERVE AGORA
          </Link>
        </div>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 w-full">
        <Splide
          options={{
            type: "fade",
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            arrows: true,
            pagination: false,
            cover: true,
            heightRatio: 0.6,
          }}
          onMounted={setMainSlider}
          aria-label="Slider principal"
          className="rounded-lg shadow-2xl"
        >
          {images.map((src, index) => (
            <SplideSlide key={index}>
              <div className="relative w-full h-[300px] md:h-[420px] group overflow-hidden rounded-lg">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>

        <Splide
          options={{
            fixedWidth: 100,
            height: 70,
            gap: "1rem",
            rewind: true,
            pagination: false,
            cover: true,
            isNavigation: true,
            focus: "center",
            arrows: false,
            breakpoints: {
              768: {
                fixedWidth: 70,
                height: 50,
              },
            },
          }}
          onMounted={setThumbsSlider}
          aria-label="Thumbnails"
          className="mt-4"
        >
          {images.map((src, index) => (
            <SplideSlide key={index}>
              <div className="relative w-full h-full rounded-lg overflow-hidden border border-gray-300 hover:border-orange-500 transition">
                <Image
                  src={src}
                  alt={`Thumb ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
