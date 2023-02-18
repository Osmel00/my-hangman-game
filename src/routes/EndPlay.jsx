import { React, useContext, useEffect } from "react";
import { Provider } from "./context/Contexto.jsx";
import img from "../images/el_ahorcado6.png";
import { Link } from "react-router-dom";
import { ObjQuestions } from "../Data/ObjQuestions.js";
export const EndPlay = () => {
  const { objQ, setRandom, setObjQ, showChaOld } = useContext(Provider);

  useEffect(() => {
    newStart();
  });
  const newStart = () => {
    if (objQ.length === 0) {
      setObjQ(
        ObjQuestions.map((item) => {
          return { ...item, palabro: item.palabro.toUpperCase() };
        })
      );
      setRandom(0);
    }
  };
  const showCha = () => {
    let cadena = "";
    for (const key in showChaOld) {
      cadena += showChaOld[key].item;
    }
    return cadena.trim().toLowerCase();
  };

  return (
    <div className="w-[1300px] min-h-max  mx-auto">
      <div className=" border-spacing-1 mx-auto bg-gradient-to-r from-green-300 via-green-700 flex flex-col items-center text-white max-w-screen-xl xl:h-[800px] pt-10 shadow-2xl rounded-xl md:h-[600px]">
        <p className="xl:text-6xl font-bold  text-green-900 md:text-4xl">Oh!, Game over!</p>
        <p className="text-xl font-bold p-6 text-green-900">
          The correct answer was:
          <span className="text-red-900 pl-3 tracking-widest text-3xl uppercase ">
            {showCha()}
          </span>{" "}
        </p>
        <img className="xl:h-[500px] md:h-[350px]" src={img} alt="images" />
        {/* <button onClick={()=>navigate('/play')} className='bg-green-500 text-white py-4 px-12 rounded-full hover:bg-green-800 font-semibold'> Get Started</button> */}
        <Link
          to={"/play"}
          className="bg-green-700 text-white py-4 px-12 rounded-full hover:bg-green-500 font-semibold"
        >
          {" "}
          Get Started
        </Link>
      </div>
    </div>
  );
};
