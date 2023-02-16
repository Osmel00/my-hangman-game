import { KeyBoard } from "../Data/ObjQuestions.js";
import { React, useContext, useEffect, useState } from "react";
import { Provider } from "./context/Contexto.jsx";
import { Outlet, Link, useNavigate } from "react-router-dom";


//////////********* */ tengo que pintar de verde todas las teclas de nuevo ***********//////////////

export const Play = () => {
  const createItem = () => {
    let arr = [];
    console.log(objQ);
    

    objQ[random].palabro.split("").forEach((item) => {
      arr.push({ item, ["Visible"]: false });
    });
    return arr;
  };

  const createRandom = () => {
    if (objQ.length > 0) {
      setRandom(Math.floor(Math.random() * objQ.length));
    }
  };
  const {
    random,
    objQ,
    characters,
    setCharacters,
    count,
    setCount,
    setRandom,
    setObjQ,
  } = useContext(Provider);
  //const [copyObj,setCopyObj] = useState(objQ.map(item=>item))
  const navigate = useNavigate();
  useEffect(() => {
    createRandom();

    setCount(-1);
    for (const key in KeyBoard) {
      KeyBoard[key].bg = null;
    }
  }, []);
  useEffect(() => {
    setCharacters(createItem());
  }, [random]);

   useEffect(() => {
    if (goWins()) {
  //     objQ.splice(random, 1);
      setCharacters([]);
       navigate("/winner");
    }
   });

   const goWins = () => {
     let flag = true;
     if (characters.length === 0) {
       return false;
     }
    for (const key in characters) {
       if (characters[key].Visible === false) {
         flag = false;
       }
     }
     return flag;
   };

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
        <p className=" text-center title text-5xl pb-10 text-green-900 font-semibold">
          
           {objQ[random].pregunta}
          {/* {objQ.length === 0
            ? null
            : objQ.length <= random
            ? objQ[random - 1].pregunta
            : objQ[random].pregunta}{" "} */}
        </p>
        {/* {ObjQuestions[5].pregunta} */}
        <div className="word flex items-center justify-center gap-3 mb-7 w-1/2 h-10 ">
          {characters.map((item, index) => {
            return (
              <div
                key={index}
                className="border-b border-green-900 w-10 h-10 flex justify-center items-center  text-4xl "
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
              <Link
                key={index}
                to={count > 4 ? "/end" : `/play/${item.letter}`}
              >
                {" "}
                <button
                  onClick={(e) => showCharacters(e, item)}
                  className={` w-10 h-10 flex items-center justify-center ${item.bg} hover:bg-green-500  text-white font-semibold rounded-lg shadow-xl`}
                >
                  <p className="">{item.letter}</p>
                </button>
              </Link>
            );
          })}
        </div>
        <Outlet />
      </div>
    </div>
  );
};
//ejemplo