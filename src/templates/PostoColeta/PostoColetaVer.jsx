import { Link, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import { useEffect } from "react"
import { useState } from "react"
import PostoColetaService from "../../services/PostoColetaService"
import HeaderMain from "../../components/Header/HeaderMain"
import SidebarMain from "../../components/Menu/SidebarMain"

const PostoColetaVer = () => {

    const { id } = useParams();

    const objectValues = {
        id: "",
        nome: "",
        logradouro: "",
        numero: "",
        complemento: "",
        cep: "",
        bairro: "",
        cidade: "",
        uf: "",
        pontoRef: "",
        statusPosto: ""
    };
    const [postoColeta, setPostoColeta] = useState(objectValues);
    const [formData, setFormData] = useState({});
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(formData => ({ ...formData, [name]: value }));
    }

    useEffect(() => {
        PostoColetaService.findById(id).then(
            (response) => {
                const postoColeta = response.data;
                setPostoColeta(postoColeta);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessful(false);

        PostoColetaService.inativar(id).then(
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

        PostoColetaService.marcarComoLida(id).then(
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
                <section className="m-5 p-2 shadow-lg">
                    <div>
                        <Link to={'/postoColetalista'} className="btn btn-success ms-5 mt-2" >Voltar</Link>
                    </div>
                    <form className="row g-2 m-5 p-2 rounded-2 shadow" onSubmit={handleSubmit}>
                        <div className="col-md-2 mb-2">
                            <label htmlFor="id" className="form-label mb-1 fw-bold">ID:</label>
                            <input type="text" className="form-control text-center" id="id" name="id" readOnly
                                value={postoColeta.id || ''} />
                        </div>
                        <div className="col-md-4 mb-2">
                            <label htmlFor="inputNome" className="form-label mb-1 fw-bold">Nome:</label>
                            <input type="text" className="form-control text-center" id="inputNome" readOnly
                                value={postoColeta.nome || ''} />
                        </div>
                        <div className="col-md-4 mb-2">
                            <label htmlFor="inputDescricao" className="form-label mb-1 fw-bold">Descrição:</label>
                            <input type="text" className="form-control text-center" id="inputDescricao" readOnly
                                value={postoColeta.cep || ''} />
                        </div>
                        <div className="col-md-2 mb-2">
                            <label htmlFor="inputStatus" className="form-label mb-1 fw-bold">Status:</label>
                            <input type="text" className="form-control text-center" id="inputStatus" readOnly
                                value={postoColeta.statusPosto || ''} />
                        </div>

                    </form>
                </section>
            </div>
        </div>
    )
}

export default PostoColetaVer