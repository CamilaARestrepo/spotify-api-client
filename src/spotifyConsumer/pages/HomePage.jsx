import React from "react";
import personaje from "../../assets/Personaje.png";
import logo from "../../assets/Logo.png";
import {delay, motion} from "framer-motion"
import { slipeUp,slipeInFromSide} from "../../utility/animation";

const Hero = () => {
  return (
    <section className="mt-36">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/*texto*/}
        <div className="sm:p-10 md:p-15 lg:p-30 xl:p-36 ">
          <motion.img 
          src={logo} alt="logo"
          variants={slipeUp(0.2)}
          initial="initial"
          animate="animate"
          />
          <motion.p 
          className="py-12 text-white"
          variants={slipeUp(0.3)}
          initial="initial"
          animate="animate"
          >
            Magic Quest es un emocionante juego de aventuras en un mundo de
            fantasia donde te embarcas en una épica búsqueda mágica. Explora
            reinos misteriosos, domina poderosos hechizos y enfréntate a
            criaturas legendarias mientras desvelas secretos ocultos y te
            conviertes en el héroe supremo. iLa magia está en tus manos!
          </motion.p>
          <motion.div 
          className=" flex justify-center gap-4"
          variants={slipeUp(1)}
          initial="initial"
          animate="animate"
          >
            <a href="" className=" bg-purple-600 py-2 px-12 rounded-3xl text-white hover:bg-purple-700 
            transition-all duration-300 items-center cursor-pointer">
              jugar ahora <i className="bi bi-controller text-xl ml-2"></i>
            </a>
            <a href="" className=" text-white flex items-center cursor-pointer">
              ver video <i className="bi bi-youtube text-xl ml-2"></i>{" "}
            </a>
          </motion.div>
        </div>
        {/*texto*/}
        <motion.div 
        className="sm:p-10 md:p-15 lg:p-30 xl:p-36"
        variants={slipeInFromSide("right",0.5)}
        initial="initial"
        animate="animate"
        >
          <img src={personaje} alt="personaje del juego" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
