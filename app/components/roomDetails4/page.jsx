import Image from "next/image";

export default function RoomDetails4() {
  return (
    <div className="bg-white py-12 px-6 md:px-12">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Master</h2>
          <h3 className="text-lg mb-6">Características:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cama King com Criado Mudo;</li>
            <li>Armário Embutido;</li>
            <li>Amplo Banheiro com Box Blindex;</li>
            <li>Cômoda;</li>
            <li>Decoração Requintada;</li>
            <li>Frigobar;</li>
            <li>Telefone;</li>
            <li>Ar Condicionado;</li>
            <li>TV de LED 42";</li>
            <li>DVD;</li>
            <li>10 Canais por assinatura.</li>
          </ul>
          <button className="mt-6 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600">
            RESERVE AGORA
          </button>
        </div>

        <div className="lg:w-1/2 w-full relative">
          <div className="relative w-full h-80 mb-4">
            <Image
              src="/path/to/your/main-image.jpg"
              alt="Luxo Room"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex space-x-4 overflow-x-scroll">
            <Image
              src="/path/to/your/image1.jpg"
              alt="Room Thumbnail 1"
              width={100}
              height={100}
              objectFit="cover"
              className="rounded-lg cursor-pointer"
            />
            <Image
              src="/path/to/your/image2.jpg"
              alt="Room Thumbnail 2"
              width={100}
              height={100}
              objectFit="cover"
              className="rounded-lg cursor-pointer"
            />
            <Image
              src="/path/to/your/image3.jpg"
              alt="Room Thumbnail 3"
              width={100}
              height={100}
              objectFit="cover"
              className="rounded-lg cursor-pointer"
            />
            <Image
              src="/path/to/your/image4.jpg"
              alt="Room Thumbnail 4"
              width={100}
              height={100}
              objectFit="cover"
              className="rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
