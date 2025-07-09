import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-white py-12 px-6 md:px-12">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Quem somos</h2>
          <p className="text-lg text-gray-700 mb-6">
            Ficamos localizados na melhor Estância Hidromineral do Sul de Minas,
            melhor infraestrutura de São Lourenço, com 20.000 metros de área
            construída, Piscina térmica com cascata de Água quente, Duchas, Saunas
            seca e a vapor, melhor Espaço Aquático aquecido da região, localizado no 7
            andar com vista panorâmica, lanchonete, playground coberto, cinema, sala
            de jogos, wi-fi gratuito, garagem e recreação todo final de semana Adulto
            e Infantil.
          </p>
          <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600">
            NOSSOS QUARTOS
          </button>
        </div>

        <div className="lg:w-1/2 w-full flex justify-between">
          <div className="relative w-1/2 h-96 mb-4 lg:mb-0">
            <Image
              src="/image1.jpg"
              alt="Image 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative w-1/2 h-96">
            <Image
              src="/image2.jpg"
              alt="Image 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
