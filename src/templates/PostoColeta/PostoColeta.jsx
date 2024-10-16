import logo from "../../assets/images/logo.png"
import agendamentos from "../../assets/images/agendamentos.png"
import userpic from "../../assets/images/userpic.png"
import historicoregistros from "../../assets/images/historicoregistros.png"
import caminhao from "../../assets/images/caminhao.png"
import saida from "../../assets/images/saida.png"
import HeaderMain from "../../components/Header/HeaderMain"
import { useState } from "react"
import SidebarMain from "../../components/Menu/SidebarMain"

import PostoColetaService from "../../services/PostoColetaService"
import { Link } from "react-router-dom"


const PostoColeta = () => {

  return (
    <div>
      <HeaderMain
        title="Cadastrar Posto"
        logo={logo}
      />
      <SidebarMain />

      <div className="d-flex justify-content-around py-5 ">

        <Link className="btn btn-success btn-lg" to={'/postocoletanovo'}>
          <p>Novo Posto de Coleta</p>
        </Link>

        <Link className="btn btn-success btn-lg"  to={'/postocoletalista'}>
          <p>Postos de Coleta</p>
        </Link>

        <Link className="btn btn-warning btn-lg"  to={'/coletalista'}>
          <p>Coletas</p>
        </Link>

      </div>
    </div>
  )
}

export default PostoColeta;