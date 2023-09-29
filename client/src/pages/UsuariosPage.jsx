import { useUsuarios } from "../Context/UsuariosContext";
import SidebarMenu from "../components/SidebarMenu";
import TablaUsuarios from "../components/TablaUsuarios";
import {useEffect} from 'react'

function UsuariosPage() {
  const { usuarios, getUsuarios } = useUsuarios();

  useEffect(()=>{
    getUsuarios();
  },[])

  if (usuarios.length === 0) return <h1>No hay Usuarios disponibles</h1>;
  return(
    <div>
      <SidebarMenu />
      <div className="sm:ml-64 w-8 mt-20">
        
      </div>
      <h1 className="text-3xl font-bold text-center mb-3">Usuarios</h1>
      <TablaUsuarios data={usuarios}/>
      
    </div>
  )
  
}

export default UsuariosPage;
