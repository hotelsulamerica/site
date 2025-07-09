export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-green-600 text-xl font-bold">Hotel Sul América</a>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <a href="/" className="text-gray-700 hover:text-green-600">Início</a>
            <a href="/rooms" className="text-gray-700 hover:text-green-600">Quartos</a>
            <a href="/restaurant" className="text-gray-700 hover:text-green-600">Restaurante</a>
            <a href="/leisure" className="text-gray-700 hover:text-green-600">Lazer</a>
            <a href="/about" className="text-gray-700 hover:text-green-600">Sobre Nós</a>
          </div>
        </div>
      </div>
    </nav>
  );
}