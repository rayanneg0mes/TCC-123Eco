import logo from "../../assets/images/logo.png";
import agendamentos from "../../assets/images/agendamentos.png";
import userpic from "../../assets/images/userpic.png";
import historicoregistros from "../../assets/images/historicoregistros.png";
import caminhao from "../../assets/images/caminhao.png";
import UsuarioService from '../../services/UsuarioService'; 
import HeaderMain from "../../components/Header/HeaderMain";
import SidebarMain from "../../components/Menu/SidebarMain";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import UsuarioNovo from "./UsuarioNovo";

const Usuario = () => {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]); 

  useEffect(() => {
    UsuarioService.findAll().then(
      (response) => {
        const usuariosData = response.data; 
        setUsuarios(usuariosData);
        console.log(usuariosData);
      }
    ).catch((error) => {
      console.log(error);
    });
  }, []);

  const verUsuario = (id) => {
    navigate(`/usuariover/${id}`);
  };

  return (
    <div>
      <HeaderMain title="" logo={logo} />
      <SidebarMain />
      <div className="container-lg my-5">
        <div>
          <Link to={'/usuarionovo'} className="btn btn-warning">Novo Usuário</Link>
        </div>
        <h2 className="text-center my-3">Lista de Usuários</h2>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">E-mail</th>
              <th scope="col">Senha</th>
              <th scope="col">Nivel Acesso</th>
              <th scope="col">Data Cadastro</th>
              <th scope="col">Status Usuário</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {usuarios?.map((usuario) => (
              <tr key={usuario.id}>
                <td scope="row">{usuario.id}</td>
                <td>{usuario.nome}</td>
                <td>{usuario.email}</td> 
                <td>{usuario.senha}</td>
                <td>{usuario.nivelAcesso}</td>
                <td>{usuario.dataCadastro}</td>
                <td>{usuario.statusUsuario}</td>
                <td>
                  <button type="button" onClick={() => verUsuario(usuario.id)} className="btn btn-sm btn-warning">
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
export default Usuario;
