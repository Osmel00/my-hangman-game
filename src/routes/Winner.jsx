
import { useNavigate, Link } from "react-router-dom";
import img from "../images/divertida-ilustracion-3d.png";
import { Provider } from "./context/Contexto.jsx";
import { useContext } from "react";
import { ObjQuestions } from '../Data/ObjQuestions';
export const Winner = () => {
  const navigate = useNavigate();
  const { objQ,setObjQ } = useContext(Provider);
  console.log(objQ);
  console.log(objQ.length);
  
 
  
  return (
    <div className="pt-16">
      <div className=" border-spacing-1 mx-auto bg-gradient-to-r from-green-300 via-green-700 flex flex-col items-center text-white max-w-screen-xl h-[800px] pt-10 shadow-2xl rounded-xl">
        <p className="text-4xl font-bold bg-gradient-to-r from-lime-300 to-green-500 bg-clip-text text-transparent">
          Congratulations!
        </p>
        <p className="text-8xl font-bold text-green-900"> You win!!</p>
        <img className="h-[500px]" src={img} alt="images" />
         <button
          onClick={()=>navigate('/play')}
          className="bg-green-500 text-white py-4 px-12 rounded-full hover:bg-green-800 font-semibold"
        >
          {" "}
          Get Started
        </button>
        
        
      </div>
    </div>
  );
};
