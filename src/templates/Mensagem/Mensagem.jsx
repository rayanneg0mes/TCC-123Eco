import logo from "../../assets/images/logo.png";
import agendamentos from "../../assets/images/agendamentos.png";
import userpic from "../../assets/images/userpic.png";
import historicoregistros from "../../assets/images/historicoregistros.png";
import caminhao from "../../assets/images/caminhao.png";
import MensagemService from '../../services/MensagemService'; 
import HeaderMain from "../../components/Header/HeaderMain";
import SidebarMain from "../../components/Menu/SidebarMain";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Mensagem = () => {
  const navigate = useNavigate();
  const [mensagens, setMensagens] = useState([]); 

  useEffect(() => {
    MensagemService.findAll().then(
      (response) => {
        const mensagensData = response.data; 
        setMensagens(mensagensData);
        console.log(mensagensData);
      }
    ).catch((error) => {
      console.log(error);
    });
  }, []);

  const verMensagem = (id) => {
    navigate(`/mensagemler/${id}`);
  };

  return (
    <div>
      <HeaderMain title="" logo={logo} />
      <SidebarMain />
      <div className="container-lg my-5">
        <h2 className="text-center my-3">Lista de Mensagens</h2>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Data Mensagem</th>
              <th scope="col">Emissor</th>
              <th scope="col">E-mail</th>
              <th scope="col">Telefone</th>
              <th scope="col">Data Resposta</th>
              <th scope="col">Status Mensagem</th>
            </tr>
          </thead>
          <tbody>
            {mensagens?.map((mensagem) => (
              <tr key={mensagem.id}>
                <td scope="row">{mensagem.id}</td>
                <td>{mensagem.dataMensagem}</td>
                <td>{mensagem.emissor}</td> 
                <td>{mensagem.email}</td>
                <td>{mensagem.telefone}</td>
                <td>{mensagem.dataResposta}</td>
                <td>{mensagem.statusMensagem}</td>
                <td>
                  <button type="button" onClick={() => verMensagem(mensagem.id)} className="btn btn-sm btn-warning">
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

export default Mensagem;
