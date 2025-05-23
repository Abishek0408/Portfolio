import Img from "../assets/abi.png";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16" id="hero">
      <img
        src={Img}
        alt="image"
        className="mx-auto mb-8 w-48  h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        Hello, This is <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-500">
          ABISHEK A
        </span>
        <br />
        Software Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300 px-4 md:px-32">
        I specialize in developing Web Applications.
      </p>
      <div className="mt-8 space-x-4">
        <a href="#contact">
          <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105">
            Contact Me
          </button>
        </a>
        <a href="https://drive.google.com/file/d/1nZNQCw9a4kHdrp9TCEBdu4Eq73Yh6spA/view?usp=sharing">
          <button className="bg-gradient-to-r from-red-500 to-purple-500  text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
