import {React,createContext,useState} from 'react'
import { ObjQuestions } from '../../Data/ObjQuestions';
export const Provider = createContext();
export const Contexto = ({children}) => {
    const[random,setRandom] = useState(0)
    const[objQ,setObjQ] = useState(ObjQuestions.map(item=>{
      return {...item,palabro:item.palabro.toUpperCase()}
    }))
    const[showChaOld,setShowChaOld] = useState([]);
    const [characters, setCharacters]=useState([]);
    const [count, setCount] = useState(-1);
  return (
    <Provider.Provider value={{random,setRandom,objQ,setObjQ,characters,setCharacters,count,setCount,showChaOld,setShowChaOld}} >
       {children}
    </Provider.Provider>
  )
}
