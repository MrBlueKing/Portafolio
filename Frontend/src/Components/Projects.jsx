import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  // Datos de los proyectos con más detalles
  const projects = [
    {
      title: "React Challenges",
      description: "Desafíos prácticos para mejorar mis habilidades en React. Este repositorio está organizado para que puedas practicar desde los conceptos básicos hasta los proyectos más avanzados de React.",
      image: "/assets/proyecto1.png", // Esta imagen debe ser válida
      githubLink: "https://github.com/tuusuario/react-challenges",
      liveLink: "#",
      technologies: ["React", "JavaScript", "Tailwind CSS"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("projects");
    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="projects" className="p-8 bg-gray-900">
      <h2 className="text-4xl font-extrabold text-center text-white mb-12">
        Mis Proyectos
        <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded"></div>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            {/* Imagen del proyecto con overlay */}
            <div className="relative overflow-hidden group">
              {project.image ? (
                project.image.trim() !== "" ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-700 flex items-center justify-center text-gray-400">
                    <span>Imagen no disponible</span>
                  </div>
                )
              ) : (
                <div className="w-full h-48 bg-gray-700 flex items-center justify-center text-gray-400">
                  <span>Imagen no disponible</span>
                </div>
              )}
              
              {/* Enlaces que solo se muestran al pasar el ratón sobre la imagen */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex space-x-4">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-2 rounded-full hover:bg-blue-500 transition"
                  >
                    <FaGithub className="text-black" size={24} />
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-2 rounded-full hover:bg-blue-500 transition"
                  >
                    <FaExternalLinkAlt className="text-black" size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contenido del proyecto */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
              
              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botón de más detalles */}
              <div className="flex justify-between items-center">
                <a 
                  href="#" 
                  className="text-blue-400 hover:text-blue-300 transition flex items-center"
                >
                  Ver más detalles
                  <FaExternalLinkAlt className="ml-2" size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
