"use client";
import { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({
    whatsapp: "",
    quarto: "Standard",
    chegada: "",
    saida: "",
    adultos: "1",
    criancas: "0",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const msg =
      `Olá! Gostaria de solicitar uma cotação:\n\n` +
      `📱 WhatsApp: ${form.whatsapp}\n` +
      `🛏️ Quarto: ${form.quarto}\n` +
      `📅 Chegada: ${form.chegada}\n` +
      `📅 Saída: ${form.saida}\n` +
      `👤 Adultos: ${form.adultos}\n` +
      `🧒 Crianças: ${form.criancas}`;

    const phone = "5535984265018";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative z-10 md:py-10 bg-[#008C44]">
      
      <div className="bg-white rounded-lg shadow-2xl px-4 py-12 w-full max-w-screen-xl mx-auto">
        <div className="text-center pb-8 md:text-2xl text-xl font-bold text-[#008C44]">
        Solicite uma cotação conosco!
      </div>
        <form
          onSubmit={handleSubmit}
          className="w-full px-2 sm:px-0 flex flex-wrap md:flex-nowrap justify-center items-end gap-4 text-sm"
        >
          <InputField
            label="WhatsApp"
            tooltip="Digite o número com DDD. Ex: (31) 91234-5678"
            type="text"
            name="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
            placeholder="(xx) xxxxx-xxxx"
            width="w-[160px]"
          />

          <SelectField
            label="Quarto"
            tooltip="Escolha o tipo de acomodação desejada."
            name="quarto"
            value={form.quarto}
            onChange={handleChange}
            options={[
              "Standard",
              "Luxo",
              "Super Luxo",
              "Master",
              "Nova Master",
            ]}
            width="w-[160px]"
          />

          <InputField
            label="Chegada"
            tooltip="Data prevista de entrada no hotel."
            type="date"
            name="chegada"
            value={form.chegada}
            onChange={handleChange}
            width="w-[140px]"
          />

          <InputField
            label="Saída"
            tooltip="Data prevista de saída do hotel."
            type="date"
            name="saida"
            value={form.saida}
            onChange={handleChange}
            width="w-[140px]"
          />

          <SelectField
            label="Adultos"
            tooltip="Número de adultos na reserva."
            name="adultos"
            value={form.adultos}
            onChange={handleChange}
            options={["1", "2", "3", "4", "5"]}
            width="w-[100px]"
          />

          <SelectField
            label="Crianças"
            tooltip="Número de crianças menores de 12 anos."
            name="criancas"
            value={form.criancas}
            onChange={handleChange}
            options={["0", "1", "2", "3", "4", "5"]}
            width="w-[100px]"
          />

          <div className="flex flex-col w-auto">
            <button
              type="submit"
              className="bg-[#008C44] hover:bg-[#FFDF82] text-white hover:text-[#0D0D0D] font-semibold text-sm px-5 py-2.5 rounded shadow-md transition whitespace-nowrap"
            >
              SOLICITAR COTAÇÃO
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Tooltip({ text }) {
  return (
    <div className="relative group cursor-pointer">
      <span className="w-4 h-4 rounded-full bg-gray-300 text-white text-[10px] flex items-center justify-center">
        i
      </span>
      <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 w-40 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition duration-200 z-20 text-center">
        {text}
      </div>
    </div>
  );
}

function InputField({
  label,
  tooltip,
  name,
  value,
  onChange,
  type,
  placeholder,
  width,
}) {
  return (
    <div className={`flex flex-col ${width}`}>
      <label className="font-medium mb-1 flex items-center gap-1">
        {label}
        <Tooltip text={tooltip} />
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border text-sm p-2 rounded"
      />
    </div>
  );
}

function SelectField({
  label,
  tooltip,
  name,
  value,
  onChange,
  options,
  width,
}) {
  return (
    <div className={`flex flex-col ${width}`}>
      <label className="font-medium mb-1 flex items-center gap-1">
        {label}
        <Tooltip text={tooltip} />
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="border text-sm p-2 rounded"
      >
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
