import logo from "../../assets/images/logo.png"
import agendamentos from "../../assets/images/agendamentos.png"
import userpic from "../../assets/images/userpic.png"
import historicoregistros from "../../assets/images/historicoregistros.png"
import caminhao from "../../assets/images/caminhao.png"
import saida from "../../assets/images/saida.png"
import HeaderMain from "../../components/Header/HeaderMain"
import { useState } from "react"
import SidebarMain from "../../components/Menu/SidebarMain"

import UsuarioNovoService from "../../services/UsuarioNovoService"
import { Link, useNavigate } from "react-router-dom"


const UsuarioNovo = () => {
  const navigate = useNavigate();

  const objectValues = {
    id: "",
    nome: "",
    email: "",
    nivelAcesso: "",
    dataCadastro: "",
    statusUsuario: "",
  }
  const [usuarionovo, setUsuarioNovo] = useState(objectValues);
  const [formData, setFormData] = useState(objectValues);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevformData) => ({ ...prevformData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessful(false);

    UsuarioNovoService.create(formData).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
        navigate(`/usuario`)
      },
      (error) => {
        const message = error.response?.data?.message || "Ocorreu um erro";
        setMessage(message);
      }
    );
  };


  return (
    <div>
      <HeaderMain
        title="Cadastrar Usuário"
        logo={logo}
      />
      <SidebarMain />

      <div className="container">
        <div className="mt-3">
          <Link to={'/usuario'} className="btn btn-warning">Voltar</Link>
        </div>
        <form className="row g-3 rounded-4 shadow p-5 mt-1" onSubmit={handleSubmit}>
          <div className="col-md-5">
            <label htmlFor="inputNome" className="form-label">Nome:</label>
            <input type="text" className="form-control" id="inputNome"
              name="nome"
              value={formData.nome || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-5">
            <label htmlFor="inputEmail" className="form-label">E-mail:</label>
            <input type="text" className="form-control" id="inputEmail"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-2">
            <label htmlFor="inputAcesso" className="form-label mb-1 fw-bold">Acesso:</label>
            <select id="inputAcesso" className="form-select" name="nivelAcesso"
              defaultValue={''} onChange={(e) => handleChange(e)}>

              <option value={''} disabled>
                Nível de Acesso...
              </option>
              <option value={"USER"}>USER</option>
              <option value={"ADMIN"}>ADMIN</option>
            </select>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-success">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UsuarioNovo;