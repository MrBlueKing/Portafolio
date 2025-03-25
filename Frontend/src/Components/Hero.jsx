import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-600 flex flex-col justify-center items-center text-center p-8">
      {/* Animación de Título */}
      <motion.h2 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }} 
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white"
      >
        ¡Hola! Soy Sebastián Zapata Fuenzalida.
      </motion.h2>
      
      {/* Descripción */}
      <p className="text-lg sm:text-xl text-gray-200 mt-4 max-w-2xl mx-auto">
        Desarrollador web con experiencia en React, Tailwind y Python. Enfocado en crear aplicaciones eficientes, escalables y con un diseño atractivo.
      </p>
  
      {/* Botón Mejorado */}
      <a 
        href="#projects" 
        className="mt-8 px-8 py-4 bg-indigo-800 text-white rounded-lg text-lg font-semibold hover:bg-indigo-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        Ver Proyectos
      </a>
    </section>
  );
}

