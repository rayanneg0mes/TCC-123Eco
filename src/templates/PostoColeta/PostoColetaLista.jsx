import logo from "../../assets/images/logo.png"
import agendamentos from "../../assets/images/agendamentos.png"
import userpic from "../../assets/images/userpic.png"
import historicoregistros from "../../assets/images/historicoregistros.png"
import caminhao from "../../assets/images/caminhao.png"
import PostoColetaService from '../../services/PostoColetaService'
import HeaderMain from "../../components/Header/HeaderMain"
import SidebarMain from "../../components/Menu/SidebarMain"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"


const PostoColetaLista = () => {
  const navigate = useNavigate();
  const [postosColeta, setPostosColeta] = useState([]);

  useEffect(() => {
    PostoColetaService.findAll().then(
      (response) => {
        const postosColeta = response.data;
        setPostosColeta(postosColeta);
      }
    ).catch((error) => {
      console.log(error);
    })
  }, []);

  const verPostoColeta = (id) => {
    navigate(`/postoColetaVer/` + id)
  }


  return (
    <div>
      <HeaderMain
        title=""
        logo={logo}
      />
      <SidebarMain />
      <div className="container-lg my-5">
        <h2 className="text-center my-3">Lista de Postos de Coleta</h2>
        <table className="table table-striped table-hover ">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">nome</th>
              <th scope="col">cidade</th>
              <th scope="col">cep</th>
              <th scope="col">numero</th>
              <th scope="col">bairro</th>
              <th scope="col">Status</th>
              <th scope="col">Abrir</th>
            </tr>
          </thead>
          <tbody>
            {postosColeta?.map((posto) => (
              <tr key={posto.id}>
                <td scope="row">{posto.id}</td>
                <td>{posto.nome}</td>
                <td>{posto.cidade}</td>
                <td>{posto.cep}</td>
                <td>{posto.numero}</td>
                <td>{posto.bairro}</td>
                <td>{posto.statusPosto}</td>
                <td>
                  <button type="button" onClick={() => verPostoColeta(posto.id)}
                    className="btn btn-sm btn-warning">
                    <i className="bi bi-envelope-open me-2"></i>Abrir
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default PostoColetaLista;