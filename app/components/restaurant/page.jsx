import Image from "next/image";

export default function RestaurantSection() {
  return (
    <section className="bg-green-700 py-12 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">

        <div className="md:w-1/2">
          <div className="relative w-full h-72 md:h-96">
            <Image
              src="/image.png"
              alt="Buffet do restaurante"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="flex mt-4 space-x-2">
            {["/image1.png", "/image2.png", "/image3.png", "/image4.png", "/image5.png"].map(
              (src, index) => (
                <div key={index} className="relative w-24 h-16">
                  <Image
                    src={src}
                    alt={`Miniatura ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md cursor-pointer"
                  />
                </div>
              )
            )}
          </div>
        </div>

        <div className="md:w-1/2 text-white">
          <h2 className="text-4xl font-bold">Restaurante</h2>
          <p className="mt-4 text-lg">
            Com uma vasta variedade de pratos, são feitos para deixar você com água na boca e satisfeito. Buffet Self Service em todas as refeições, incluindo deliciosas sobremesas.
          </p>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition">
            RESERVE AGORA
          </button>
        </div>
      </div>
    </section>
  );
}
