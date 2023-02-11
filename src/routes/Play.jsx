import {React,useState} from "react";
import { ObjQuestions, KeyBoard } from "../Data/ObjQuestions.js";
export const Play = () => {
 const[characters,setCharacters]= useState((ObjQuestions[0].palabro.split('')));

 console.log(characters);
  return (
    <div className="p-16">
      <div className=" border-spacing-1 mx-auto bg-gradient-to-r from-green-300 via-green-700 flex flex-col items-center text-white max-w-screen-xl h-[800px] pt-20 shadow-2xl rounded-xl">
        <p className="title text-5xl pb-14">{ObjQuestions[5].pregunta}</p>
       
        <div className="word flex items-center justify-center gap-3 mb-7 w-1/2 h-10 ">
        {characters.map((item,index) => {
          return (
            <div key={index} className="border-b border-black w-10 h-10 flex justify-center items-center  text-4xl ">
               {item}
            </div>
          );
        })}
        </div>
        <div className="w-[700px] flex flex-wrap gap-2 justify-center">
          {KeyBoard.map((item, index) => {
            return (
              <div
                key={index}
                className="border w-10 h-10 flex items-center justify-center bg-green-900  hover:bg-green-500  text-white font-semibold rounded-lg shadow-xl"
              >
                <button className="">{item}</button>
              </div>
            );
          })}
        </div>
        <p>La foto del muñeco</p>
      </div>
    </div>
  );
};
