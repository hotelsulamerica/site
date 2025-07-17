"use client";
import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import Link from "next/link";

export default function RestaurantSection() {
  const images = [
    "/cebola.jpg",
    "/churros.jpg",
    "/frango.jpg",
    "/linguica.jpg",
    "/pernil.jpg",
    "/presunto.jpg",
    "/queijo.jpg",
    "/salada.jpg",
    "/torresmo.jpg",
    "/vinagrete.jpg",
  ];

  const [mainSlider, setMainSlider] = useState(null);
  const [thumbsSlider, setThumbsSlider] = useState(null);

  if (mainSlider && thumbsSlider) {
    mainSlider.sync(thumbsSlider);
  }

  return (
    <section
      className="w-full bg-[#008C44] py-12 px-6"
      id="restaurant"
    >
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 w-full mt-8 md:mt-0">
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

        <div className="md:w-1/2 mt-10 md:mt-0">
          <h2 className="text-[#FFDF82] text-2xl font-bold md:ml-6">Restaurante</h2>
          <ul className="mt-2 space-y-2 text-sm text-white md:ml-6">
            {[
              "Nosso restaurante é um verdadeiro convite aos sabores de Minas Gerais! Com um buffet self-service completo em todas as refeições, oferecemos uma grande variedade de pratos preparados com ingredientes frescos e muito carinho.",
              "Do tradicional feijão tropeiro à suculenta carne de panela, passando por frango com quiabo, torresmo crocante e queijos artesanais, tudo é pensado para deixar você com água na boca. E para fechar com chave de ouro, não poderiam faltar as irresistíveis sobremesas mineiras: doce de leite, pudim, ambrosia e muito mais.",
              "Sinta o sabor da roça, o acolhimento mineiro e viva uma experiência gastronômica inesquecível durante sua estadia!",
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-4 md:ml-6">
            <Link
              href="https://wa.me/5535988680724?text=Vim%20do%20site%20e%20gostaria%20de%20fazer%20uma%20reserva"
              className="bg-[#FFDF82] text-[#0D0D0D] hover:bg-white hover:text-[#0D0D0D] font-semibold text-sm px-5 py-2.5 rounded shadow-md transition whitespace-nowrap"
            >
              RESERVE AGORA
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
