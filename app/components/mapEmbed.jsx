export default function MapEmbed() {
  return (
    <div className="py-12 px-6 md:px-12 bg-white">
      <h2 className="text-3xl font-bold text-green-600 text-center mb-8">
        Encontre-nos aqui
      </h2>
      <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
        <iframe
          className="w-full h-full border-none"
          src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d14784.29627292875!2d-45.053887!3d-22.1231515!3m2!1i1024!2i768!4f13.1!2m1!1shotel%20sul%20america!5e0!3m2!1spt-BR!2sbr!4v1740630037976!5m2!1spt-BR!2sbr" // Replace with your Google Maps embed URL
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
