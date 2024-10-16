import { Link, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import { useEffect } from "react"
import { useState } from "react"
import ProdutoService from "../../services/ProdutoColetadoService"
import HeaderMain from "../../components/Header/HeaderMain"
import SidebarMain from "../../components/Menu/SidebarMain"

const ProdutoLer = () => {

    const { id } = useParams();

    const objectValues = {
        id: "",
        coleta: "",
        produto: "",
        quantidade: "",
        obs: "",
    };
    const [produtocoletado, setProdutoColetado] = useState(objectValues);
    const [formData, setFormData] = useState({});
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(formData => ({ ...formData, [name]: value }));
    }

    useEffect(() => {
        ProdutoService.findById(id).then(
            (response) => {
                const produtocoletado = response.data;
                setProdutoColetado(produtocoletado);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessful(false);

        ProdutoService.inativar(id).then(
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
                                value={produtocoletado.id || ''} />
                        </div>
                        <div className="col-md-5 mb-2">
                            <label htmlFor="inputColeta" className="form-label mb-1 fw-bold">Coleta:</label>
                            <input type="text" className="form-control text-center" id="inputColeta" readOnly
                                value={produtocoletado.coleta.descricao || ''} />
                        </div>
                        <div className="col-md-5 mb-2">
                            <label htmlFor="inputproduto" className="form-label mb-1 fw-bold">Produto:</label>
                            <input type="text" className="form-control text-center" id="inputproduto" readOnly
                                value={produtocoletado.produto.nome || ''} />
                        </div>

                        <div className="col-md-10">
                            <label htmlFor="inputObs" className="form-label mb-1 fw-bold">OBS:</label>
                            <input type="text" className="form-control" id="inputObs" readOnly
                                value={produtocoletado.obs || ''} />
                        </div>
                        <div className="col-md-2 mb-2">
                            <label htmlFor="inputquantidade" className="form-label mb-1 fw-bold">Quantidade:</label>
                            <input type="text" className="form-control text-center" id="inputquantidade" readOnly
                                value={produtocoletado.quantidade || ''} />
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default ProdutoLer