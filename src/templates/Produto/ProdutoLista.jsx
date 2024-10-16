import logo from "../../assets/images/logo.png"
import HeaderMain from "../../components/Header/HeaderMain"
import SidebarMain from "../../components/Menu/SidebarMain"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import ProdutoService from "../../services/ProdutoService"
import { Link } from "react-router-dom"

const ProdutoLista = () => {
  const navigate = useNavigate();
  const [produtoLista, setProdutoLista] = useState([]);

  useEffect(() => {
    ProdutoService.findAll().then(
      (response) => {
        const produtoLista = response.data;
        setProdutoLista(produtoLista);
      }
    ).catch((error) => {
      console.log(error);
    })
  }, []);

  const verProduto = (id) => {
    navigate(`/produtover/` + id)
  }


  return (
    <div>
      <HeaderMain
        title=""
        logo={logo}
      />
      <SidebarMain />
      <div className="container-lg my-5">
        <div className="d-flex justify-content-center align-items-center my-3">
          <Link to={'/produtonovo'} className="btn btn-success">Novo Produto</Link>
        </div>
        <h2 className="text-center my-3">Lista de Produtos</h2>
        <table className="table table-striped table-hover ">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">nome</th>
              <th scope="col">descrição</th>
              <th scope="col">status Produto</th>
            </tr>
          </thead>
          <tbody>
            {produtoLista?.map((produtolista) => (
              <tr key={produtolista.id}>
                <td scope="row">{produtolista.id}</td>
                <td>{produtolista.nome}</td>
                <td>{produtolista.descricao}</td>
                <td>{produtolista.statusProd}</td>
                <td>
                  <button type="button" onClick={() => verProduto(produtolista.id)}
                    className="btn btn-sm btn-warning">
                    <i className="bi bi-envelope-open me-2"></i>Abrir
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ProdutoLista;