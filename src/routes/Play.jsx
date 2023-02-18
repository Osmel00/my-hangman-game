import { KeyBoard } from "../Data/ObjQuestions.js";
import { React, useContext, useEffect } from "react";
import { Provider } from "./context/Contexto.jsx";
import { Outlet, useNavigate } from "react-router-dom";

export const Play = () => {
  const {
    random,
    objQ,
    characters,
    setCharacters,
    count,
    setCount,
    setRandom,
    setObjQ,
    setShowChaOld,
  } = useContext(Provider);

  const createItem = () => {
    let arr = [];
    let newrandom = random;
   

    if (random !== 0 && random === objQ.length) {
      newrandom--;
    }

    objQ[newrandom].palabro.split("").forEach((item) => {
      arr.push({ item, ["Visible"]: false });
    });
    return arr;
  };

  const createRandom = () => {
    if (objQ.length > 0) {
      setRandom(Math.floor(Math.random() * objQ.length));
    }
  };
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
  useEffect(() => {
    if (goWins()) {
      objQ.splice(random, 1);
      let newarr = [...objQ];
      setObjQ(newarr);
      setCharacters([]);
      navigate("/winner");
    }
  }, [characters]);

  const showCharacters = (event, item) => {
    setCharacters(
      characters.map((element) => {
        if (element.item === event.target.innerText) {
          return { ...element, Visible: true };
        }
        return element;
      })
    );
    console.log(`contadorPlay: ${count}`);
    if (count > 4) {
      
      navigate("/end");
      objQ.splice(random, 1);
      let newarr = [...objQ];
      setObjQ(newarr);
      setShowChaOld([...characters]);
      setCharacters([]);
    } else {
      navigate(`/play/${item.letter}`);
    }

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
    console.log(characters);
  return (
    <div className="w-[1300px] min-h-max mx-auto">
      <div className=" border-spacing-1 mx-auto bg-gradient-to-r from-green-300 via-green-700 flex flex-col items-center text-white max-w-screen-xl xl:h-[800px] xl:pt-20 shadow-2xl rounded-xl md:h-[600px] md:pt-10">
        <p className="title text-center  xl:text-5xl xl:pb-10 text-green-900 font-semibold md:text-4xl md:pb-6">
          {objQ.length <= random
            ? objQ[random - 1].pregunta
            : objQ[random].pregunta}
        </p>

        <div className="word flex items-center justify-center gap-3 mb-7 w-1/2 h-10 ">
          {characters.map((item, index) => {
            return (
              <div
                key={index}
                className="border-b border-green-900 w-10 h-10 flex justify-center items-center  xl:text-4xl md:text-3xl"
              >
                {item.Visible && <span className="">{item.item}</span>}
              </div>
            );
          })}
        </div>
        <div className=" KeyBoard w-[700px] flex flex-wrap gap-2 justify-center">
          {KeyBoard.map((item, index) => {
            return (
              <button
                key={index}
                onClick={(e) => showCharacters(e, item)}
                className={` w-10 h-10 flex items-center justify-center ${item.bg} hover:bg-green-500  text-white font-semibold rounded-lg shadow-xl`}
              >
                <p className="">{item.letter}</p>
              </button>
            );
          })}
        </div>
        <Outlet />
      </div>
    </div>
  );
};
////////////////////******Prueba******////////////////////////////////////////
