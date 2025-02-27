"use client"
import { useState } from "react";

export default function Testimonials() {
  const [selected, setSelected] = useState(0);
  const testimonials = [
    {
      name: "Ursula personalizados",
      text: "Hotel maravilhoso, funcionários hiper atenciosos, lugar que não te dá vontade de ir embora. Nota 10 para limpeza, arrumação dos quartos, comidas, festas. Já estou programando uma nova viagem para lá.",
    },
    {
      name: "Celia Rodegheri",
      text: "Um dos melhores hotel da região. Tudo de bom, excelente atendimento, boa comida, ótimas áreas de divertimento. Amei muito.",
    },
  ];

  return (
    <div className="bg-white py-12 px-6 md:px-12">
      <h2 className="text-center text-3xl font-bold text-green-600 mb-8">
        Depoimentos de nossos clientes
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center space-x-4 space-y-6 lg:space-y-0">
        {/* Testimonial Cards */}
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-gray-100 rounded-lg p-6 w-full lg:w-1/3 shadow-md transition duration-300 ease-in-out transform ${selected === index ? "scale-105 border-2 border-green-500" : "scale-100"
              }`}
            onClick={() => setSelected(index)}
          >
            <div className="flex justify-between mb-4">
              <h3 className="text-xl font-semibold text-green-600">{testimonial.name}</h3>
              <span className="text-green-500">❤️</span>
            </div>
            <p className="text-gray-700">{testimonial.text}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600">
          RESERVE AGORA
        </button>
      </div>
    </div>
  );
}
