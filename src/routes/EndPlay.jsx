import { useContext, } from "react";
import { Provider } from "./context/Contexto.jsx";
import img from '../images/el_ahorcado6.png'
import {useNavigate,Link } from "react-router-dom";
export const EndPlay = () => {

const {setRandom,objQ ,characters,setCharacters,setCount,count,random} = useContext(Provider);
const navigate = useNavigate();  
const showCha = () => {
    let cadena = '';
    for (const key in characters) {
         cadena+= characters[key].item;
    }
    return cadena.trim().toLowerCase();
}

  return (
    <div className='pt-16'>
    <div className=" border-spacing-1 mx-auto bg-gradient-to-r from-green-300 via-green-700 flex flex-col items-center text-white max-w-screen-xl h-[800px] pt-10 shadow-2xl rounded-xl">
        <p className='text-6xl font-bold  text-green-900'>Oh!, Game over!</p>
        <p className='text-xl font-bold p-6 text-green-900'>The correct answer was:<span className="pl-3 tracking-widest text-2xl uppercase ">{showCha()}</span> </p>
        <img className="h-[500px]" src={img} alt='images'/>
        {/* <button onClick={()=>navigate('/play')} className='bg-green-500 text-white py-4 px-12 rounded-full hover:bg-green-800 font-semibold'> Get Started</button> */}
        <Link to={'/play'} className='bg-green-700 text-white py-4 px-12 rounded-full hover:bg-green-500 font-semibold'> Get Started</Link>
        
    </div>
    </div>
  )
}
