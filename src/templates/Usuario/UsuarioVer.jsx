import { Link, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import { useEffect } from "react"
import { useState } from "react"
import HeaderMain from "../../components/Header/HeaderMain"
import SidebarMain from "../../components/Menu/SidebarMain"
import UsuarioService from "../../services/UsuarioService"

const UsuarioVer = () => {

    const { id } = useParams();

    const objectValues = {
        id: "",
        nome: "",
        email: "",
        senha: "",
        nivelAcesso: "",
        dataCadastro: "",
        statusUsuario: "",
    };
    const [usuario, setUsuario] = useState(objectValues);
    const [formData, setFormData] = useState({});
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(formData => ({ ...formData, [name]: value }));
    }

    useEffect(() => {
        UsuarioService.findById(id).then(
            (response) => {
                const usuario = response.data;
                setUsuario(usuario);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessful(false);

        UsuarioService.inativar(id).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
                window.location.reload();

            }, (error) => {
                const message = error.response.data.message;
                setMessage(message);
            }
        )
    }

    const marcarComoLida = () => {
        setSuccessful(false);

        ColetaService.marcarComoLida(id).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
                window.location.reload();

            }, (error) => {
                const message = error.response.data.message;
                setMessage(message);
            }
        )
    }

    return (
        <div className="d-flex">
            <div className="p-3 w-100">
                <HeaderMain title="" logo={logo} />
                <SidebarMain />
                <section className="ms-5 p-2 shadow-lg">
                    <div className="m-3">
                        <Link to={'/usuario'} className="btn btn-warning">Voltar</Link>
                    </div>
                    <form className="row g-2 m-5 p-2 rounded-2 shadow my-2" onSubmit={handleSubmit}>
                        <div className="col-md-2 mb-2">
                            <label htmlFor="id" className="form-label mb-1 fw-bold">ID:</label>
                            <input type="text" className="form-control text-center" id="id" name="id" readOnly
                                value={usuario.id || ''} />
                        </div>
                        <div className="col-md-5 mb-2">
                            <label htmlFor="inputNome" className="form-label mb-1 fw-bold">Nome:</label>
                            <input type="text" className="form-control text-center" id="inputNome" readOnly
                                value={usuario.nome || ''} />
                        </div>
                        <div className="col-md-5 mb-2">
                            <label htmlFor="inputemail" className="form-label mb-1 fw-bold">E-mail:</label>
                            <input type="text" className="form-control text-center" id="inputemail" readOnly
                                value={usuario.email || ''} />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="inputNivelA" className="form-label mb-1 fw-bold">Nível Acesso:</label>
                            <input type="text" className="form-control" id="inputNivelA" readOnly
                                value={usuario.nivelAcesso || ''} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputDataC" className="form-label mb-1 fw-bold">Data Cadastro:</label>
                            <input type="text" className="form-control" id="inputDataC" readOnly
                                value={usuario.dataCadastro || ''} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputStatusU" className="form-label mb-1 fw-bold">Status:</label>
                            <input type="text" className="form-control" id="inputStatusU" readOnly
                                value={usuario.statusUsuario || ''} />
                        </div>


                    </form>
                </section>
            </div>
        </div>
    )
}

export default UsuarioVer