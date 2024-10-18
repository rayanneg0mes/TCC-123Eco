import { Link, useNavigate } from "react-router-dom";
import './Sidebar.css';

import userpic from "../../assets/images/userpic.png"

import caminhao from "../../assets/images/caminhao.png"
import saida from "../../assets/images/saida.png"
import mensagem from "../../assets/images/mensagem.png"
import usuarios from "../../assets/images/usuarios.png"
import lixo from "../../assets/images/lixo.png"
import produto from "../../assets/images/produto.png"

import UsuarioService from "../../services/UsuarioService";
import { useEffect } from "react";

const SidebarMain = () => {

    const currentUser = UsuarioService.getCurrentUser();

    const navigate = useNavigate();

    const logout = () => {
        navigate("/");
    }

    const editar = (id) => {
        navigate(`/usuarioperfil/` + id)
    }

    useEffect(() => {
console.log(currentUser);
    }, []);

    return (
        <>
            <div className="sidebar">
                <nav>
                    <ul>
                        <li>
                            <Link to={'login'}>
                                <img className="nav-icon_img" src={userpic} alt="" height="40px" width="40px" />
                                <p>{currentUser.nome}</p>
                            </Link>
                            <div>
                            <button className="btn btn-sm btn-warning py-1 px-2 mx-1 fw-bold h5 text-danger rounded shadow"
                                onClick={() => logout()}>
                                <i className="bi bi-box-arrow-left"></i> Sair
                            </button>
                            <button type="button" onClick={() => editar(currentUser.id)}
                                className="btn btn-sm btn-success py-1 px-2 mx-1 fw-bold h5 rounded shadow ">
                                Abrir <i className="bi bi-person-gear"></i>
                            </button>
                        </div>
                        </li>
                     
                        
                        <li>
                            <Link to={'/postocoleta'}>
                                <img className="nav-icon_img" src={caminhao} alt="" height="27px" width="27px" />
                                <p>Postos e Coleta</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/mensagem'}>
                                <img className="nav-icon_img" src={mensagem} alt="" height="27px" width="27px" />
                                <p>Mensagens</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/produtonovo'}>
                                <img className="nav-icon_img" src={produto} alt="" height="27px" width="27px" />
                                <p>Produto Novo</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/usuario'}>
                                <img className="nav-icon_img" src={usuarios} alt="" height="27px" width="27px" />
                                <p>Usuario</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/produtocoletado'}>
                                <img className="nav-icon_img" src={lixo} alt="" height="27px" width="27px" />
                                <p>Produto Coletado</p>
                            </Link>
                        </li>
                      
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default SidebarMain