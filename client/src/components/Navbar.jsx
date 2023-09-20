import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Logo from "../img/logo.png";
import Menu from "./Menu";
import { useState } from "react";
import { AiTwotoneSetting } from "react-icons/ai";

function Navbar() {
  const { isAuthenticated } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-emerald-300 my-3 flex justify-between py-5 px-10 border-2 border-pink-700 items-center">
      <Link className="flex items-center">
        <img className="w-14 mr-4 md:mr-10 lg:mr-96 " src={Logo} />
        <h1 className="text-2xl font-black">La Michoacana</h1>
      </Link>
      {isAuthenticated ? (
        <>
          <div className="cursor-pointer text-black" onClick={toggleMenu}>
            <i className="fas fa-bars text-2xl">
              <AiTwotoneSetting size={50} />
            </i>
          </div>
          {isMenuOpen && <Menu />}
        </>
      ) : (
        <>
          INSOEL
        </>
      )}
    </nav>
  );
}

export default Navbar;
