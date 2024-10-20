import { Link, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/logo.png'
import { useEffect } from "react"
import { useState } from "react"
import MensagemService from "../../services/MensagemService"
import HeaderMain from "../../components/Header/HeaderMain"
import SidebarMain from "../../components/Menu/SidebarMain"


const MensagemLer = () => {

    const { id } = useParams();

    const objectValues = {
        id: null,
        dataMensagem: "",
        email: "",
        emissor: "",
        texto: "",
        telefone: "",
        resposta: "",
        statusMensagem: ""
    };
    const [mensagem, setMensagem] = useState(objectValues);
    const [formData, setFormData] = useState({});
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setMensagem(mensagem => ({ ...mensagem, [name]: value }));
    }

    useEffect(() => {
        MensagemService.findById(id).then(
            (response) => {
                const mensagem = response.data;
                setMensagem(mensagem);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessful(false);

        MensagemService.responder(id, formData).then(
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

    const inativar = () => {
        setSuccessful(false);

        MensagemService.inativar(id).then(
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

        MensagemService.marcarComoLida(id).then(
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
                                value={mensagem.id || ''} />
                        </div>
                        <div className="col-md-4 mb-2">
                            <label htmlFor="inputData" className="form-label mb-1 fw-bold">Data:</label>
                            <input type="text" className="form-control text-center" id="inputData" readOnly
                                value={mensagem.dataMensagem || ''} />
                        </div>
                        <div className="col-md-4 mb-2">
                            <label htmlFor="inputDataR" className="form-label mb-1 fw-bold">Data da Resposta:</label>
                            <input type="text" className="form-control text-center" id="inputDataR" readOnly
                                value={mensagem.dataResposta || ''} />
                        </div>
                        <div className="col-md-2 mb-2">
                            <label htmlFor="inputStatus" className="form-label mb-1 fw-bold">Status:</label>
                            <input type="text" className="form-control text-center" id="inputStatus" readOnly
                                value={mensagem.statusMensagem || ''} />
                        </div>

                        <div className="col-md-5">
                            <label htmlFor="inputEmissor" className="form-label mb-1 fw-bold">Emissor:</label>
                            <input type="text" className="form-control" id="inputEmissor" readOnly
                                value={mensagem.emissor || ''} />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputEmail" className="form-label mb-1 fw-bold">Email:</label>
                            <input type="email" className="form-control" id="inputEmail" readOnly
                                value={mensagem.email || ''} />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputTelefone" className="form-label mb-1 fw-bold">Telefone:</label>
                            <input type="text" className="form-control" id="inputTelefone" readOnly
                                value={mensagem.telefone || ''} />
                        </div>

                        <div className="col-md-12 my-4">
                            <label htmlFor="inputTexto" className="form-label mb-1 fw-bold">Mensagem:</label>
                            <textarea rows={5} className="form-control" id="inputTexto" readOnly
                                value={mensagem.texto || ''} >
                            </textarea>
                        </div>

                        <hr />

                        <div className="col-md-12 my-2">
                            <label htmlFor="inputResposta" className="form-label mb-1 fw-bold">Resposta:</label>
                            <textarea rows={5} className="form-control" id="inputResposta"
                                name="resposta"
                                defaultValue={mensagem.resposta || ''} >
                            </textarea>
                        </div>

                        <div className="col-12 mb-3 d-flex justify-content-around">
                            <button type="button" className="btn btn-warning"
                                onClick={() => marcarComoLida()}>
                                Marcar como Lida
                            </button>
                            <button type="button" className="btn btn-danger"
                                onClick={() => inativar()}>
                                Inativar
                            </button>
                            <button type="submit" className="btn btn-success">
                                Responder
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default MensagemLer