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
      console.log(`contadorImagen: ${count}`);
     }
    
      
    }
    
  };
  useEffect(() => {
    showImagen();
  }, [characters]);

  
  
  return (
    <div className="mt-10 md:mt-8">
       {/* {count >= 0 && <img className="xl:h-96 md:h-64" src={imagenes(`./${objFotos[count]}`)}/> }   */}
       {count >= 0 && <img className="xl:h-96 md:h-64" src={imagenes(count > 5?`./${objFotos[count-1]}` :`./${objFotos[count]}`)}/> }  
    
    </div>
  );
};
