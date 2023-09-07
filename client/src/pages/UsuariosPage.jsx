import { useUsuarios } from "../Context/UsuariosContext";
import TablaUsuarios from "../components/TablaUsuarios";
import {useEffect} from 'react'

function UsuariosPage() {
  const { usuarios, getUsuarios } = useUsuarios();

  useEffect(()=>{
    getUsuarios();
  },[])
  console.log(usuarios)
  return(
    <TablaUsuarios data={usuarios}/>
  )
  
}

export default UsuariosPage;
