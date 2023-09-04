import { createContext, useContext, useState } from "react";

import {
  crearEgresoRequest,
  deleteEgresoRequest,
  getEgresosRequest,
  getEgresosRequest,
  updateEgresoRequest,
} from "../api/egresos";

const EgresosContext = createContext();

export const useEgresos = () =>{
  const context = useContext(EgresosContext);
  if(!context) throw new Error("useEgreso must be used within a EgresoProvider")
  return context
}

export function EgresoProvider({ children }) {
  const [egresos, setEgresos] = useState([])
  const getEgresos = async()=>{
    const res = await getEgresosRequest();
    setEgresos(res.data)
  }
}
