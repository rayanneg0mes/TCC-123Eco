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
import ColetaService from "../../services/ColetaService"


const ColetaLista = () => {
  const navigate = useNavigate();
  const [ColetaLista, setColetaLista] = useState([]);

  useEffect(() => {
    ColetaService.findAll().then(
      (response) => {
        const coletaLista = response.data;
        setColetaLista(coletaLista);
        console.log(coletaLista);
      }
    ).catch((error) => {
      console.log(error);
    })
  }, []);

  const verColetaLista = (id) => {
    navigate(`/coletaler/` + id)
  }


  return (
    <div>
      <HeaderMain
        title=""
        logo={logo}
      />
      <SidebarMain />
      <div className="container-lg my-5">
        <h2 className="text-center my-3">Lista de Coleta</h2>
        <table className="table table-striped table-hover ">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Descrição</th>
              <th scope="col">Data Coleta</th>
              <th scope="col">Usuário ID</th>
              <th scope="col">Posto de Coleta ID</th>
              <th scope="col">Status Coleta</th>
            </tr>
          </thead>
          <tbody>
            {ColetaLista?.map((coleta) => (
              <tr key={coleta.id}>
                <td scope="row">{coleta.id}</td>
                <td>{coleta.descricao}</td>
                <td>{coleta.dataColeta}</td>
                <td>{coleta.usuario_id}</td>
                <td>{coleta.postodecoleta_id}</td>
                <td>{coleta.statusColeta}</td>
                <td>
                <button type="button" onClick={() => verColetaLista(coleta.id)} className="btn btn-sm btn-warning">
                    <i className="bi bi-envelope-open me-2"></i>Abrir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ColetaLista;
