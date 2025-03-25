export default function Footer() {
    return (
      <footer className="bg-gray-900 text-center py-8">
        {/* Texto del pie de página */}
        <p className="text-gray-400 mb-4">&copy; 2025 [Tu Nombre]. Todos los derechos reservados.</p>
  
        {/* Enlaces de redes sociales */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">1
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">2
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">3
            <i className="fab fa-github text-2xl"></i>
          </a>
        </div>
  
        {/* Enlace al correo */}
        <p className="text-gray-400">
          <a href="mailto:tu-correo@dominio.com" className="hover:text-blue-500">Contactar por correo</a>
        </p>
      </footer>
    );
  }
  