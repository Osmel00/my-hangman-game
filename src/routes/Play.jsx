import { KeyBoard } from "../Data/ObjQuestions.js";
import { React, useContext, useEffect, useState } from "react";
import { Provider } from "./context/Contexto.jsx";

export const Play = () => {
  const createItem = () => {
    let arr = [];
    objQ[random].palabro.split("").forEach((item) => {
      arr.push({ item, ["Visible"]: false });
    });
    return arr;
  };
  const { random, setRandom, objQ, setObjQ } = useContext(Provider);
  const [characters, setCharacters] = useState(createItem());
  

  const showCharacters = (event, item) => {
    setCharacters(
      characters.map((element) => {
        if (element.item === event.target.innerText) {
          return { ...element, Visible: true };
        }
        return element;
      })
    );
    
    paintLetter(item);
    
  };
  function paintLetter(item) {
    let obj = characters.find((element) => element.item === item.letter);
    if (obj) {
      item.bg = "bg-green-500";
    } else {
      item.bg = "bg-red-800";
    }
  }

 
  return (
    <div className="p-16">
      <div className=" border-spacing-1 mx-auto bg-gradient-to-r from-green-300 via-green-700 flex flex-col items-center text-white max-w-screen-xl h-[800px] pt-20 shadow-2xl rounded-xl">
        <p className="title text-5xl pb-14">{objQ[random].pregunta} </p>
        {/* {ObjQuestions[5].pregunta} */}
        <div className="word flex items-center justify-center gap-3 mb-7 w-1/2 h-10 ">
          {characters.map((item, index) => {
            return (
              <div
                key={index}
                className="border-b border-black w-10 h-10 flex justify-center items-center  text-4xl "
              >
                {item.Visible && <span className="">{item.item}</span>}
              </div>
            );
          })}
        </div>
        <div className=" KeyBoard w-[700px] flex flex-wrap gap-2 justify-center">
          {/*  bg-green-900 */}
          {KeyBoard.map((item, index) => {
            return (
              <button
                onClick={(e) => showCharacters(e, item)}
                key={index}
                className={` w-10 h-10 flex items-center justify-center ${item.bg} hover:bg-green-500  text-white font-semibold rounded-lg shadow-xl`}
              >
                <p className="">{item.letter}</p>
              </button>
            );
          })}
        </div>
        <p>La foto del muñeco</p>
      </div>
    </div>
  );
};
