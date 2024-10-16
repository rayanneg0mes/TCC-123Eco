import logo from "../../assets/images/logo.png"
import agendamentos from "../../assets/images/agendamentos.png"
import userpic from "../../assets/images/userpic.png"
import historicoregistros from "../../assets/images/historicoregistros.png"
import caminhao from "../../assets/images/caminhao.png"
import saida from "../../assets/images/saida.png"
import HeaderMain from "../../components/Header/HeaderMain"


const UsuarioAtualiza = () => {
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
        navigate(`/usuarionovo`)
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
          <div className="col-md-6">
            <label htmlFor="inputID" className="form-label">ID</label>
            <input type="text" className="form-control" id="inputID"
              name="id"
              value={formData.id || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputNome" className="form-label">Nome</label>
            <input type="text" className="form-control" id="inputNome"
              name="nome"
              value={formData.nome || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label htmlFor="inputEmail" className="form-label">E-mail</label>
            <input type="text" className="form-control" id="inputEmail"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label htmlFor="inputnivelAcesso" className="form-label">Nivel Acesso</label>
            <input type="text" className="form-control" id="inputnivelAcesso"
              name="nivelAcesso"
              value={formData.nivelAcesso || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-5">
            <label htmlFor="inputdataCadastro" className="form-label">Data Cadastro</label>
            <input type="text" className="form-control" id="inputdataCadastro"
              name="dataCadastro"
              value={formData.dataCadastro || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputstatusUsuario" className="form-label">Status Usuario</label>
            <input type="text" className="form-control" id="inputstatusUsuario"
              name="statusUsuario"
              value={formData.statusUsuario || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-success">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UsuarioAtualiza;
