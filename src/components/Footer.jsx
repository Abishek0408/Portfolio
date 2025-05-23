import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black text-white py-8">
        <div className="border-t border-gray-600 px-5 md:px-16 lg:px-24 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()}, Abishek, All Rights Reserved.
          </p>

          <div className="flex space-x-4 my-4 md:my-0">
            <a
              href="https://www.facebook.com/profile.php?id=100015194914453&mibextid=ZbWKwL"
              className="text-gray-400 hover:text-green-400"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/abhi.?igsh=MWNwNGYzZGo4OTdzcQ=="
              className="text-gray-400 hover:text-green-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/abishek-ayyadurai-833b5232a"
              className="text-gray-400 hover:text-green-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Abishek0408"
              className="text-gray-400 hover:text-green-400"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
