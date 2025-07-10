import Image from 'next/image';

export default function RoomSection() {
  return (
    <div className="bg-white py-12 px-6 md:px-12" id="rooms">
      <h1 className="text-center text-3xl font-bold text-green-600 mb-10">
        Conheça os Quartos e Restaurante do Hotel
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/image1.jpg"
            alt="Standard Room"
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Standard</h3>
            <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-full">Saiba Mais</button>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/image2.jpg"
            alt="Luxo Room"
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Luxo</h3>
            <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-full">Saiba Mais</button>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/image3.jpg"
            alt="Super Luxo Room"
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Super Luxo</h3>
            <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-full">Saiba Mais</button>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/image4.jpg"
            alt="Master Room"
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Master</h3>
            <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-full">Saiba Mais</button>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/image1.jpg"
            alt="Nova Master Room"
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Nova Master</h3>
            <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-full">Saiba Mais</button>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/image2.jpg"
            alt="Restaurant"
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Restaurante</h3>
            <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-full">Saiba Mais</button>
          </div>
        </div>
      </div>
    </div>
  );
}