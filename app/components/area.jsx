import Image from "next/image";

export default function LeisureArea() {
  return (
    <section className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2">
        <h2 className="text-green-700 text-4xl font-bold">Área de Lazer</h2>
        <h3 className="text-xl font-semibold mt-4">Características:</h3>
        <ul className="mt-2 space-y-2 text-lg text-gray-700">
          {[
            "Academia",
            "TV, vídeo e cinema",
            "Piscinas",
            "Sauna",
            "Playground",
            "Salão de Jogos",
            "Salão de Bilhar",
            "Sala de Recreação",
            "Quadras",
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> {item};
            </li>
          ))}
        </ul>
        <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition">
          RESERVE AGORA
        </button>
      </div>

      <div className="md:w-1/2 mt-6 md:mt-0">
        <div className="relative w-full h-64 md:h-80">
          <Image
            src="/image1.jpg"
            alt="Playground da Área de Lazer"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-2xl"
          />
        </div>

        <div className="flex mt-4 space-x-2">
          {["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"].map(
            (src, index) => (
              <div key={index} className="relative w-20 h-16">
                <Image
                  src={src}
                  alt={`Miniatura ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
