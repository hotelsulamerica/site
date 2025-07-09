// components/Differentials.js
export default function Differentials() {
  return (
    <div className="bg-green-600 py-12 px-6 md:px-12 text-white">
      <h2 className="text-center text-3xl font-bold mb-8">Nossos diferenciais</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-green-700 p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <span className="text-white text-2xl mr-2">✔️</span>
            <h3 className="text-xl font-semibold">Gastronomia Excepcional</h3>
          </div>
          <p>Sabores inigualáveis que cativam o paladar.</p>
        </div>

        <div className="bg-green-700 p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <span className="text-white text-2xl mr-2">✔️</span>
            <h3 className="text-xl font-semibold">Área de Lazer para Todos</h3>
          </div>
          <p>Diversão garantida para todas as idades.</p>
        </div>

        <div className="bg-green-700 p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <span className="text-white text-2xl mr-2">✔️</span>
            <h3 className="text-xl font-semibold">Piscina Térmica Relaxante</h3>
          </div>
          <p>Um refúgio aquecido em todas as estações.</p>
        </div>

        <div className="bg-green-700 p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <span className="text-white text-2xl mr-2">✔️</span>
            <h3 className="text-xl font-semibold">Espaço Aquático de Outro Mundo</h3>
          </div>
          <p>Um paraíso subaquático para se refrescar e se divertir.</p>
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600">
          RESERVE AGORA
        </button>
      </div>
    </div>
  );
}
