"use client";
import { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="mr-2"
            />
          </a>

          <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
            {["Início", "Quartos", "Restaurante", "Lazer", "Sobre Nós"].map(
              (item, index) => (
                <a
                  key={index}
                  href={
                    item === "Início"
                      ? "/"
                      : `#${item.toLowerCase().replace(" ", "")}`
                  }
                  className="text-gray-700 hover:text-[#008C44] transition-colors duration-300"
                >
                  {item}
                </a>
              )
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#008C44] focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        } px-4`}
      >
        <div className="space-y-2 text-sm font-medium">
          {["Início", "Quartos", "Restaurante", "Lazer", "Sobre Nós"].map(
            (item, index) => (
              <a
                key={index}
                href={
                  item === "Início"
                    ? "/"
                    : `#${item.toLowerCase().replace(" ", "")}`
                }
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-[#008C44] transition-colors duration-300"
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
