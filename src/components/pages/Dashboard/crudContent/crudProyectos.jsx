import React, { useEffect, useState } from "react"
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
const CrudProyectos = () => {
     /*  const url = "http://34.227.152.213:8080/senado-iudigital/api/proyectos";
      const [token,setToken]=useState("Not")
      const getToken=()=>{
        sessionStorage.getItem("token")?setToken(sessionStorage.getItem("token")):window.location.href("/login")
      }
  
      useEffect(()=>{
        getToken()
      },[])

      const peticionGet = async() => {
        getToken()
        const {proyectos} = await axios
          .get(url,{
            headers: { Authorization: `Bearer ${token}`,          
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type", }
          })
          console.log(proyectos);
      }; */
  return (
    <div>
       <button
          className="btn btn-success"
         /*  onClick={() => {
            peticionGet()
          }} */
        >
          Agregar Proyecto
        </button>
        <br />
        <br />
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE</th>
              <th>FECHA</th>
              <th>ESTADO</th>
              <th>PROPONENTE</th>
              <th>DESCRIPCION</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            <>
         {/*      {proyectos?proyectos.map(()=>{
                <p>Hola</p>
              }):null} */}
            </>
          </tbody>
        </table>

       
    </div>
  )
}

export default CrudProyectos
