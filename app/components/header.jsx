import Image from "next/image";

export default function HeaderSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-green-900">
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-white md:w-1/2">
          <h4 className="text-sm tracking-widest uppercase text-green-300">
            Conheça o Hotel Sul América
          </h4>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            Luxo e Conforto em um <br />
            <span className="text-green-300">Cenário Paradisíaco!</span>
          </h1>
          <p className="mt-4 text-lg">
            Ficamos localizados na melhor Estância Hidromineral do Sul de Minas,
            melhor infraestrutura de São Lourenço.
          </p>
          <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition">
            SAIBA MAIS SOBRE
          </button>
        </div>

        <div className="md:w-1/2 relative">
          <div className="relative w-full h-[450px] md:h-[500px]">
            <Image
              src="/image1.jpg"
              alt="Hotel Sul América"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
