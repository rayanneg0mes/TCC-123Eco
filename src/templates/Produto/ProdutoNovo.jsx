import logo from "../../assets/images/logo.png"
import agendamentos from "../../assets/images/agendamentos.png"
import userpic from "../../assets/images/userpic.png"
import historicoregistros from "../../assets/images/historicoregistros.png"
import caminhao from "../../assets/images/caminhao.png"
import saida from "../../assets/images/saida.png"
import HeaderMain from "../../components/Header/HeaderMain"
import { useState } from "react"
import SidebarMain from "../../components/Menu/SidebarMain"

import ProdutoService from "../../services/ProdutoService"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"


const ProdutoNovo = () => {
  const navigate = useNavigate();

  const objectValues = {
    id: "",
    nome: "",
    descricao: "",
    statusproduto: "",
  }
  const [produtonovo, setProdutoNovo] = useState(objectValues);
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

    ProdutoService.create(formData).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
        navigate(`/produtolista`)
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
        title="Cadastrar Produto"
        logo={logo}
      />
      <SidebarMain />

      <div className="container">

        <form className="row g-3 rounded-4 shadow p-5" onSubmit={handleSubmit}>
          <div className="d-flex justify-content-center align-items-center">
            <Link to={'/produtolista'} className="btn btn-success">Lista de Produtos</Link>
          </div>
          <div className="col-md-5">
            <label htmlFor="inputnome " className="form-label">Nome:</label>
            <input type="text" className="form-control" id="inputnome"
              name="nome"
              value={formData.nome || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-5">
            <label htmlFor="inputdescricao" className="form-label">Descrição</label>
            <input type="text" className="form-control" id="inputdescricao"
              name="descricao"
              value={formData.descricao || ""}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-2 d-flex justify-content-center align-items-end">
            <button type="submit" className="btn btn-success">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProdutoNovo;