import React from "react";
import Logo from "../../assets/Logo.png";
import { useState } from "react";

const nadvarLinks = [
  {
    id: 1,
    title: "Perfil",
    Link: "/",
  },
  {
    id: 2,
    title: "Cerrar sesion",
    Link: "#",
  },
  
];


const Nadvar = () => {
  const [isOpen, setIsopen] = useState(false);
  const toogleMenu = () => {
    setIsopen(!isOpen);
  };
  return (
    <nav className="fixed top-0 left-0 bg-slate-900 w-full bg-opacity-60 backdrop-blur-md z-50">
      <div className="flex justify-between items-center sm:px-12 sm:py:6 px-4 py-3">
        {/*Logo de nadvar*/}
        <div>
          <img src={Logo} alt="Logo del sitio" className="w-[50px]" />
        </div>
        {/*Boton hamburguesa*/}
        <button onClick={toogleMenu} className="md:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {/*navegacion desktop*/}
        <div className="hidden md:block">
          <ul className="flex space-x-4 sm:space-x-8">
            {nadvarLinks.map((Link) => (
              <li key={Link.id}>
                <a
                  className="text-white sm:text-lg text-sm hover:text-sky-200 transition-transform hover:scale-110
                ttransform inline-block duration-300"
                  href={Link.Link}
                >
                  {Link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/*menu movil*/}
      <div className={`md:hidden absolute w-full bg-black transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <ul className="flex flex-col px-4 py-2">
          {nadvarLinks.map((Link) => (
            <li key={Link.id} className="py-2 text-center">
              <a className="text-red-500 hover:text-red-200" href={Link.Link} onClick={()=>setIsopen(false)}>
                {Link.title}
              </a>
            </li>
          ))}
        </ul>
        
      </div>
    </nav>
  );
};

export default Nadvar;
