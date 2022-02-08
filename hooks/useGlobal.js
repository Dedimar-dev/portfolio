import { useContext } from "react";
import GlobalContext from "../Context/GlobalContext";

export default function useGlobal() {
 return useContext(GlobalContext);
} 
