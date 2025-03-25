export default function Navbar() {
  return (
    <nav className="p-4 md:p-6 flex justify-between items-center bg-gray-900 shadow-md fixed w-full z-10">
      <h1 className="text-3xl font-bold text-white">Mr Blue Dev</h1>
      <ul className="flex space-x-6 text-lg text-white">
        <li>
          <a
            href="#projects"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Proyectos
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Sobre mí
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}
