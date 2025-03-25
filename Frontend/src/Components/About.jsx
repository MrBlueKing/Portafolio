import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="p-8 bg-gray-900 text-white">
      {/* Título de la sección */}
      <motion.h2 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="text-4xl font-extrabold text-center mb-6"
      >
        Sobre mí
      </motion.h2>

      {/* Descripción */}
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg text-gray-400 text-center mb-6 max-w-3xl mx-auto"
        >
        Comencé mi camino en la programación con C y Java, evolucionando hacia el desarrollo web con HTML, CSS, JavaScript y PHP. 
        Más adelante, me especialicé en Python y trabajé con React y Laravel en desarrollo web. Actualmente, también exploro el 
        desarrollo de videojuegos con Godot y GDScript.
        </motion.p>

        {/* Habilidades */}
        <motion.div className="grid grid-cols-2 gap-4 max-w-lg mx-auto text-center">
        <div>
            <h3 className="font-semibold text-xl">Tecnologías</h3>
            <p className="text-gray-400">React, Tailwind CSS, Node.js, JavaScript, Python, Laravel</p>
        </div>
        <div>
            <h3 className="font-semibold text-xl">Experiencia</h3>
            <p className="text-gray-400">Desarrollo Web, APIs REST, UI/UX, Desarrollo de Videojuegos</p>
        </div>
        </motion.div>


      {/* Imagen o avatar */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex justify-center mb-6"
      >
        
      </motion.div>

      {/* Habilidades o Intereses */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="grid grid-cols-2 gap-4 max-w-lg mx-auto text-center"
      >
        <div>
          <h3 className="font-semibold text-xl">Tecnologías</h3>
          <p className="text-gray-400">React, Tailwind CSS, Node.js, JavaScript</p>
        </div>
        <div>
          <h3 className="font-semibold text-xl">Intereses</h3>
          <p className="text-gray-400">Desarrollo web, Diseño UI/UX, Inteligencia Artificial</p>
        </div>
      </motion.div>
    </section>
  );
}
