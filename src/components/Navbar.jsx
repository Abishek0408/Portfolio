import logo from "../assets/ak.png";
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10  bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">
          <img
            src={logo}
            alt="Logo"
            className="mx-auto my-2 mb-8  w-14 h-14 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="space-x-6 menu">
          <a href="#hero" className="hover:text-red-400">
            Home
          </a>
          <a href="#about" className="hover:text-red-400">
            About
          </a>
          <a href="#projects" className="hover:text-red-400">
            Projects
          </a>
          <a href="#exp" className="hover:text-red-400">
            Experiences
          </a>
          <a href="#certificates" className="hover:text-red-400">
            Certificates
          </a>
        </div>
        <a href="#contact">
          <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            Connect
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
