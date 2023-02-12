import {React,createContext,useState} from 'react'
import { ObjQuestions } from '../../Data/ObjQuestions';
export const Provider = createContext();
export const Contexto = ({children}) => {
    const[random,setRandom] = useState(0)
    const[objQ,setObjQ] = useState(ObjQuestions)
  return (
    <Provider.Provider value={{random,setRandom,objQ,setObjQ}} >
       {children}
    </Provider.Provider>
  )
}
