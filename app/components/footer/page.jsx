// components/Footer.js
export default function Footer() {
  return (
    <div className="bg-green-600 text-white py-12 px-6 md:px-12">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Ainda com dúvidas?</h2>
        <p className="text-lg mb-6">
          Perguntas sem respostas são oportunidades perdidas. Entre em
          contato agora através do nosso formulário e receba respostas
          personalizadas para suas dúvidas.
        </p>
        <div className="flex justify-center space-x-8 mb-8">
          <div className="flex items-center">
            <span className="text-2xl">📱</span>
            <p className="ml-2">(35) 9 8868-0724</p>
          </div>
          <div className="flex items-center">
            <span className="text-2xl">📞</span>
            <p className="ml-2">(35) 3532-3400</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4 max-w-lg mx-auto">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Seu nome"
              className="px-4 py-2 rounded-md border-2 border-gray-300 w-full md:w-1/3"
            />
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="px-4 py-2 rounded-md border-2 border-gray-300 w-full md:w-1/3"
            />
            <input
              type="tel"
              placeholder="Seu telefone"
              className="px-4 py-2 rounded-md border-2 border-gray-300 w-full md:w-1/3"
            />
          </div>
          <textarea
            placeholder="Envie sua mensagem!"
            className="w-full px-4 py-2 mt-4 rounded-md border-2 border-gray-300"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-full mt-4 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600"
          >
            ENVIAR
          </button>
        </form>
      </div>

      {/* Footer Links */}
      <div className="bg-green-700 py-4 text-center">
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-white hover:text-gray-300">
            <span className="text-2xl">📘</span> {/* Example for Facebook */}
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <span className="text-2xl">📸</span> {/* Example for Instagram */}
          </a>
          <a href="https://wa.me/5535988680724" className="text-white hover:text-gray-300">
            <span className="text-2xl">📲</span> {/* WhatsApp link */}
          </a>
        </div>
        <p className="mt-4 text-sm">
          Hotel Sul América todos os Direitos Reservados © 2023
        </p>
      </div>
    </div>
  );
}
