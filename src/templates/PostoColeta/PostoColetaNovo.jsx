import logo from "../../assets/images/logo.png";
import HeaderMain from "../../components/Header/HeaderMain";
import { useState } from "react";
import SidebarMain from "../../components/Menu/SidebarMain";
import PostoColetaService from "../../services/PostoColetaService";
import { useNavigate } from "react-router-dom";

const PostoColetaNovo = () => {
  const navigate = useNavigate();

  const objectValues = {
    nome: "",
    logradouro: "",
    numero: "",
    complemento: "",
    cep: "",
    bairro: "",
    cidade: "",
    uf: "",
    pontoRef: ""
  };
  const [formData, setFormData] = useState(objectValues);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessful(false);

    PostoColetaService.create(formData).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
        navigate(`/postocoleta`);
      },
      (error) => {
        const message = error.response?.data?.message || "Ocorreu um erro";
        setMessage(message);
      }
    );
  };

  return (
    <div>
      <HeaderMain title="Cadastrar Posto" logo={logo} />
      <SidebarMain />

      <div className="container">
        <form className="row g-3 rounded-4 shadow p-5" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="inputNome" className="form-label">Nome Do Posto</label>
            <input type="text" className="form-control" id="inputNome"
              name="nome"
              value={formData.nome || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputLogradouro" className="form-label">Logradouro</label>
            <input type="text" className="form-control" id="inputLogradouro"
              name="logradouro"
              value={formData.logradouro || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCidade" className="form-label">Cidade</label>
            <input type="text" className="form-control" id="inputCidade"
              name="cidade"
              value={formData.cidade || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputComplemento" className="form-label">Complemento</label>
            <input type="text" className="form-control" id="inputComplemento"
              name="complemento"
              value={formData.complemento || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputBairro" className="form-label">Bairro</label>
            <input type="text" className="form-control" id="inputBairro"
              name="bairro"
              value={formData.bairro || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputCep" className="form-label">CEP</label>
            <input type="text" className="form-control" id="inputCep"
              name="cep"
              value={formData.cep || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputNumero" className="form-label">Número</label>
            <input type="text" className="form-control" id="inputNumero"
              name="numero"
              value={formData.numero || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="inputUf" className="form-label">UF</label>
            <select id="inputUf" className="form-select"
              name="uf"
              onChange={handleChange}>
              <option value={''} disabled>UF...</option>
              <option value={"AC"}>AC</option>
              <option value={"AL"}>AL</option>
              {/* Outras opções */}
              <option value={"SP"}>SP</option>
              <option value={"TO"}>TO</option>
            </select>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-success">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostoColetaNovo;
