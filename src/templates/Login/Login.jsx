import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UsuarioService from "../../services/UsuarioService";
import './Login.css';
import logo from "../../assets/images/logo.png";
import HeaderMain from "../../components/Header/HeaderMain";

const Login = () => {

    const navigate = useNavigate();

    const goto = () => {
        navigate("/postocoleta");
    }

    const backto = () => {
        navigate("/");
    }

    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(formData => ({ ...formData, [name]: value }))
    }

    const editar = (id) => {
        navigate(`/usuarioeditar/` + id)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");

        UsuarioService.signin(formData.email, formData.password).then(
            () => {
                const userJson = localStorage.getItem("user");
                const user = JSON.parse(userJson || '{}');
                if (user.statusUsuario == 'ATIVO') {
                    navigate("/postocoleta");
                } else if (user.statusUsuario == 'TROCAR_SENHA') {
                    navigate(`/newpass/` + user.id);
                    //window.location.reload(); ordnael@email.com.br
                }

            },
            (error) => {
                const respMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(respMessage);
            }

        );
    };

    return (
        <div className="imagem-fundo">
            <HeaderMain title="" logo={logo} />
            <form action="" className="login-form" onSubmit={handleSubmit}>
                <div className="login-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label mb-0 fw-bold">Email:</label>
                    <input type="email" id="email" className="form-control text-center fw-medium shadow"
                        name="email"
                        value={formData.email || ""}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password" className="form-label mb-0 fw-bold">Senha:</label>
                    <input type="password" id="password" className="form-control text-center fw-medium shadow"
                        name="password"
                        value={formData.password || ""}
                        onChange={handleChange} />
                </div>
                <div className="text-center p-2 rounded-2">
                    {message && (
                        <div className="fw-bold fs-5 text-danger">
                            <span>{message}</span>
                        </div>
                    )}
                </div>
                <div className="d-flex justify-content-around mb-3 mt-2">
                    <button className="btn btn-warning fw-medium shadow" type="button"
                        onClick={backto}>Cancelar</button>
                    <button className="btn btn-success fw-medium shadow" type="submit">
                        Entrar</button>
                </div>
            </form>
        </div>
    )
}

export default Login