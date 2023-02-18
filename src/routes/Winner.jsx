import { useNavigate } from "react-router-dom";
import img from "../images/divertida-ilustracion-3d.png";
import { Provider } from "./context/Contexto.jsx";
import { ObjQuestions } from "../Data/ObjQuestions";
import { React, useContext, useEffect } from "react";

export const Winner = () => {
  const navigate = useNavigate();
  const { objQ, setRandom, setObjQ } = useContext(Provider);
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

  return (
    <div className="w-[1300px] min-h-max  mx-auto">
      <div className=" xl:border-spacing-1 mx-auto bg-gradient-to-r from-green-300 via-green-700 flex flex-col items-center text-white max-w-screen-xl xl:h-[800px] xl:pt-10 shadow-2xl rounded-xl  md:h-[600px] md:pt-8">
        <p className="xl:text-4xl font-bold bg-gradient-to-r from-lime-300 to-green-500 bg-clip-text text-transparent md:text-3xl">
          Congratulations!
        </p>
        <p className="xl:text-8xl font-bold text-green-900 md:text-7xl"> You win!!</p>
        <img className="xl:h-[500px] md:h-[350px]" src={img} alt="images" />
        <button
          onClick={() => navigate("/play")}
          className="bg-green-500 text-white py-4 px-12 rounded-full hover:bg-green-800 font-semibold"
        >
          {" "}
          Get Started
        </button>
      </div>
    </div>
  );
};
