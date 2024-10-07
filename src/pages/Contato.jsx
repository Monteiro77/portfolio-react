import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-backgroundcolor to-gray-800 text-white min-h-full flex flex-col items-center justify-center ">
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-10 text-center">Contato</h1>

      <div className="flex flex-wrap justify-center w-full mb-10 gap-12">
        <div className="flex flex-col items-center">
          <FaGithub size={40} className="bg-blue-500 p-2 rounded-full mb-2" />
          <p className="text-sm md:text-base">@monteiro77</p>
        </div>
        <div className="flex flex-col items-center">
          <FaEnvelope size={40} className="bg-blue-500 p-2 rounded-full mb-2" />
          <p className="text-sm md:text-base">vmonteiro7843@gmail.com</p>
        </div>
        <div className="flex flex-col items-center">
          <FaLinkedin size={40} className="bg-blue-500 p-2 rounded-full mb-2" />
          <p className="text-sm md:text-base">viniciusmontdev</p>
        </div>
        <div className="flex flex-col items-center">
          <FaWhatsapp size={40} className="bg-blue-500 p-2 rounded-full mb-2" />
          <p className="text-sm md:text-base">(11) 98848-5553</p>
        </div>
        <div className="flex flex-col items-center">
          <FaInstagram size={40} className="bg-blue-500 p-2 rounded-full mb-2" />
          <p className="text-sm md:text-base">@omonteiro__</p>
        </div>
      </div>

      <h2 className="text-xl md:text-2xl mb-4 text-center">Entre em contato comigo!</h2>
      <p className="text-center text-gray-400 mb-8">
        Entre em contato através do formulário abaixo
      </p>

      <form className="w-full max-w-lg space-y-4 pb-4">
        <input
          type="text"
          placeholder="Seu nome"
          className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none"
        />
        <input
          type="email"
          placeholder="Seu email"
          className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none"
        />
        <input
          type="tel"
          placeholder="Seu telefone"
          className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none"
        />
        <textarea
          placeholder="Escreva a mensagem aqui"
          className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none"
          rows="5"
        ></textarea>
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contact;
