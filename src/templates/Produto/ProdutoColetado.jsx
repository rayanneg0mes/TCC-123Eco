import logo from "../../assets/images/logo.png"
import ProdutoColetadoService from '../../services/ProdutoColetadoService'
import HeaderMain from "../../components/Header/HeaderMain"
import SidebarMain from "../../components/Menu/SidebarMain"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"


const ProdutoColetado = () => {
  const navigate = useNavigate();
  const [ProdutoColetado, setProdutoColetado] = useState([]);

  useEffect(() => {
    ProdutoColetadoService.findAll().then(
      (response) => {
        const produtocoletado = response.data;
        setProdutoColetado(produtocoletado);
        console.log(produtocoletado);
      }
    ).catch((error) => {
      console.log(error);
    })
  }, []);

  const verProdutoColetado = (id) => {
    navigate(`/produtoler/` + id)
  }


  return (
    <div>
      <HeaderMain
        title=""
        logo={logo}
      />
      <SidebarMain />
      <div className="container-lg my-5">
        <h2 className="text-center my-3">Lista de Produto Coletado</h2>
        <table className="table table-striped table-hover ">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Coleta ID</th>
              <th scope="col">Produto ID</th>
              <th scope="col">Quantidade</th>
              <th scope="col">OBS</th>
            </tr>
          </thead>
          <tbody>
            {ProdutoColetado?.map((produtocoletado) => (
              <tr key={produtocoletado.id}>
                <td scope="row">{produtocoletado.id}</td>
                <td>{produtocoletado.coleta.dataColeta}</td>
                <td>{produtocoletado.produto.nome}</td>
                <td>{produtocoletado.quantidade}</td>
                <td>{produtocoletado.obs}</td>
                <td>
                <button type="button" onClick={() => verProdutoColetado(produtocoletado.id)} className="btn btn-sm btn-warning">
                    <i className="bi bi-envelope-open me-2"></i>Abrir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProdutoColetado;
