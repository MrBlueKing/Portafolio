import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="p-8 bg-gray-900 text-white">
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-extrabold text-center mb-6"
      >
        Contacto
      </motion.h2>

      {/* Descripción */}
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg text-gray-400 text-center mb-8 max-w-2xl mx-auto"
      >
        Si tienes alguna pregunta, inquietud o quieres colaborar en un proyecto, no dudes en contactarme. ¡Estoy
        siempre dispuesto a nuevas oportunidades!
      </motion.p>

      {/* Formulario de Contacto */}
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full p-3 bg-gray-700 text-white rounded-lg border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="w-full p-3 bg-gray-700 text-white rounded-lg border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <textarea
            placeholder="Tu mensaje"
            rows="4"
            className="w-full p-3 bg-gray-700 text-white rounded-lg border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Enviar mensaje
        </button>
      </motion.form>

      {/* Redes Sociales */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="mt-8 flex justify-center space-x-6"
      >
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
          <i className="fab fa-twitter text-3xl"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
          <i className="fab fa-linkedin text-3xl"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
          <i className="fab fa-github text-3xl"></i>
        </a>
      </motion.div>
    </section>
  );
}
