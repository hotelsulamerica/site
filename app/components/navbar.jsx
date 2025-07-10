import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="mr-2"
              />
            </a>
          </div>
          <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
            <a href="/" className="text-gray-700 hover:text-[#008C44] hover:transition duration-300 ease-in-out">
              Início
            </a>
            <a href="#rooms" className="text-gray-700 hover:text-[#008C44] hover:transition duration-300 ease-in-out">
              Quartos
            </a>
            <a
              href="#restaurant"
              className="text-gray-700 hover:text-[#008C44] hover:transition duration-300 ease-in-out"
            >
              Restaurante
            </a>
            <a href="#leisure" className="text-gray-700 hover:text-[#008C44] hover:transition duration-300 ease-in-out">
              Lazer
            </a>
            <a href="#about" className="text-gray-700 hover:text-[#008C44] hover:transition duration-300 ease-in-out">
              Sobre Nós
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
