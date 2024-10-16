import logo from "../../assets/images/logo.png"
import agendamentos from "../../assets/images/agendamentos.png"
import userpic from "../../assets/images/userpic.png"
import historicoregistros from "../../assets/images/historicoregistros.png"
import caminhao from "../../assets/images/caminhao.png"
import saida from "../../assets/images/saida.png"
import HeaderMain from "../../components/Header/HeaderMain"


const ProdutoColetadoAtualiza = () => {


  return (
    <div>
   
        
        <HeaderMain
          title=""
          logo={logo}
        />
          
        <div className="sidebar">
          <nav>
            <ul>
              <li>
                <a href="perfil.html">
                  <img className="nav-icon_img" src={userpic} alt="" height="40px" width="40px" />
                  <p>Nome do Usuário</p>
                </a>
              </li>
              <li>
                <a href="historicoregistro.html">
                  <img className="nav-icon_img" src={historicoregistros} alt="" height="30px" width="30px" />
                  <p>Histórico de Registros</p>
                </a>
              </li>
              <li>
                <a href="agendamentos.html">
                  <img className="nav-icon_img" src={agendamentos} alt="" height="27px" width="27px" />
                  <p className="new-scheduling_text">Agendamentos</p>
                </a>
              </li>
              <li>
                <a href="postosdecoleta.html">
                  <img className="nav-icon_img" src={caminhao} alt="" height="27px" width="27px" />
                  <p>Postos e Coleta</p>
                </a>
              </li>
              <li>
                <a onclick="sair()">
                  <img className="nav-icon_img" src={saida} alt="" height="27px" width="27px" />
                  <p>Encerrar Sessão</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
     
    <div class="container">
        <form class="row g-3 rounded-4 shadow p-5">
            <div class="col-md-4">
                <label for="inputState" class="form-label">Produto</label>
                <select id="inputState" class="form-select">
                  <option selected></option>
                  <option>Celulares</option>
                  <option>Monitores</option>
                  <option>Impressoras</option>
                  <option>Tablets</option>
                  <option>Teclados</option>
                  <option>Câmeras Fotográficas</option>
                </select>
              </div>
            <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Observação</label>
                <input type="text" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-md-2">
                <label for="inputZip" class="form-label">Quantidade</label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
            
            <div class="col-12">
                <button type="submit" class="btn btn-success">Atuaizar</button>
            </div>
        </form>
    </div>
   
    </div>
    )
}

export default ProdutoColetadoAtualiza;
