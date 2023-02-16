import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { objFotos } from "../Data/ObjQuestions";
import { Provider } from "./context/Contexto.jsx";
const imagenes = require.context("../images/", true);
export const Images = () => {
  const {count, setCount, characters} = useContext(Provider);
  const params = useParams();
  
  const showImagen = () => {
    if (
      characters.findIndex((e) => {
        return e.item === params.idfoto;
      }) === -1
    ) {
     // (count > 5)? setCount(count + 1) : setCount(0) ;
     if(count > 4){
      setCount(-1)
     }else{
      setCount(count + 1)
     }
    
      
    }
    
  };
  useEffect(() => {
    showImagen();
  }, [characters]);

  
  
  return (
    <div className="mt-10">
       {count >= 0 && <img className="h-96" src={imagenes(`./${objFotos[count]}`)} /> }  
      {/* { <img className="h-96" src={imagenes(`./${objFotos[0]}`)} /> }  */}
    </div>
  );
};
