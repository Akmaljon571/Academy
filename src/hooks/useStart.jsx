import { useContext } from "react";
import { State } from '../content/start'

function useStart() {
   const {kurslar, setKurslar} = useContext(State)

   return {kurslar, setKurslar}
  
}

export default useStart;