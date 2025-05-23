const Experience = () => {
  return (
    <div className="bg-black text-white py-20" id="exp">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Experiences</h2>
        <div className="ml-10 space-y-4 text-bold md:flex-row items-center ">
          <ul className="flex flex-wrap justify-center gap-8">
            <li className="bg-gray-800 h-100 w-100 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold  text-green-400 mb-4">
                Jr. Angular Developer Intern at IconX Technologies, Tirunelveli
              </h3>
              <p className="text-s font-bold  text-green-400 mb-4">
                July, 2024 - August, 2024
              </p>
              <p>
                As a Junior Angular Developer, gained hands-on experience in
                front-end development, consistently demonstrating a strong work
                ethic, adaptability, and a quick ability to learn new
                technologies.
              </p>
            </li>
            <li className="bg-gray-800 h-100 w-100 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold  text-green-400 mb-4">
                Web Developer Intern at AstroWeb Solutions, Madurai
              </h3>
              <p className="text-s font-bold  text-green-400 mb-4">
                January, 2025 - April, 2025
              </p>
              <p>
                As a Web Developer Intern, I gained hands-on experience in
                front-end and back-end development, consistently demonstrating a
                strong work ethic, adaptability, and a quick ability to learn
                new technologies. Worked with HTML, CSS, JavaScript, PHP, and
                MySQL to build and maintain web applications.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
