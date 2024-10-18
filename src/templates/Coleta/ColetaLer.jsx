import { Link, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/logo.png'
import { useEffect } from "react"
import { useState } from "react"
import ColetaService from "../../services/ColetaService"
import HeaderMain from "../../components/Header/HeaderMain"
import SidebarMain from "../../components/Menu/SidebarMain"

const ColetaLer = () => {

    const { id } = useParams();

    const objectValues = {
        id: null,
        descricao: "",
        dataColeta: "",
        usuario_id: "",
        postodecoleta_id: "",
        statusColeta: "",
    };
    const [coleta, setColeta] = useState(objectValues);
    const [formData, setFormData] = useState({});
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(formData => ({ ...formData, [name]: value }));
    }

    useEffect(() => {
        ColetaService.findById(id).then(
            (response) => {
                const coleta = response.data;
                setColeta(coleta);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessful(false);

        ColetaService.inativar(id).then(
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
                <section className="m-5 p-2 shadow-lg">
                    <form className="row g-2 m-5 p-2 rounded-2 shadow" onSubmit={handleSubmit}>
                        <div className="col-md-2 mb-2">
                            <label htmlFor="id" className="form-label mb-1 fw-bold">ID:</label>
                            <input type="text" className="form-control text-center" id="id" name="id" readOnly
                                value={coleta.id || ''} />
                        </div>
                        <div className="col-md-4 mb-2">
                            <label htmlFor="inputDescricao" className="form-label mb-1 fw-bold">Descrição:</label>
                            <input type="text" className="form-control text-center" id="inputDescricao" readOnly
                                value={coleta.descricao || ''} />
                        </div>
                        <div className="col-md-4 mb-2">
                            <label htmlFor="inputDataC" className="form-label mb-1 fw-bold">Data da Coleta:</label>
                            <input type="text" className="form-control text-center" id="inputDataC" readOnly
                                value={coleta.dataColeta || ''} />
                        </div>
                        <div className="col-md-2 mb-2">
                            <label htmlFor="inputUsuario" className="form-label mb-1 fw-bold">Usuário ID:</label>
                            <input type="text" className="form-control text-center" id="inputUsuario" readOnly
                                value={coleta.usuario_id || ''} />
                        </div>

                        <div className="col-md-5">
                            <label htmlFor="inputPosto" className="form-label mb-1 fw-bold">Posto de Coleta ID:</label>
                            <input type="text" className="form-control" id="inputPosto" readOnly
                                value={coleta.postodecoleta_id || ''} />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputStatus" className="form-label mb-1 fw-bold">Status Coleta:</label>
                            <input type="text" className="form-control" id="inputStatus" readOnly
                                value={coleta.statusColeta || ''} />
                        </div>

                    </form>
                </section>
            </div>
        </div>
    )
}

export default ColetaLer