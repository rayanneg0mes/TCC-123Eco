import logo from "../../assets/images/logo.png"
import agendamentos from "../../assets/images/agendamentos.png"
import userpic from "../../assets/images/userpic.png"
import historicoregistros from "../../assets/images/historicoregistros.png"
import caminhao from "../../assets/images/caminhao.png"
import saida from "../../assets/images/saida.png"
import HeaderMain from "../../components/Header/HeaderMain"
import { useState } from "react"
import SidebarMain from "../../components/Menu/SidebarMain"

import ColetaNovoService from "../../services/ColetaNovoService"
import { Link, useNavigate } from "react-router-dom"
import UsuarioService from "../../services/UsuarioService"
import PostoColetaService from "../../services/PostoColetaService"
import { useRef } from "react"
import { useEffect } from "react"


const ColetaNovo = () => {
  const navigate = useNavigate();
  const _dbRecords = useRef(true);

  const user = UsuarioService.getCurrentUser();
  const [postos, setPostos] = useState([]);
  const [coleta, setColeta] = useState();
  const [formData, setFormData] = useState({});
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(formData => ({ ...formData, [name]: value }));
}

  const getPostos = () => {
    PostoColetaService.findAll().then(
      (response) => {
        const postos = response.data;
        setPostos(postos);
      }
    ).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    if (_dbRecords.current) {
      getPostos();
    }
    return () => {
      _dbRecords.current = false;
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessful(false);

    ColetaNovoService.create(formData, user.email).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
        navigate(`/coletalista`)
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
        title="Registrar Coleta"
        logo={logo}
      />
      <SidebarMain />

      <div className="container">
        <div className="mt-3">
          <Link to={'/usuario'} className="btn btn-warning">Voltar</Link>
        </div>
        <form className="row g-3 rounded-4 shadow p-5 mt-1" onSubmit={handleSubmit}>
          <div className="col-5">
            <label htmlFor="inputDescricao" className="form-label">Descricao:</label>
            <input type="text" className="form-control" id="inputDescricao"
              name="descricao"
              value={formData.descricao || ""}
              onChange={handleChange}
            />
          </div>


          <div className="col-5">
            <label htmlFor="inputPosto" className="form-label mb-1 fw-bold">Posto:</label>
            <select id="inputPosto" className="form-select" defaultValue={0}
              name="postodecoleta"
              onChange={(e) => handleChange(e)}>

              <option value={0} disabled>
                Celeçione um posto...
              </option>

              {postos?.map((posto) => (
                <option key={posto.id} value={posto.id}>
                  {posto.nome}
                </option>
              ))}
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

export default ColetaNovo;