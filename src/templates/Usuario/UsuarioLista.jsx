import logo from "../../assets/images/logo.png"
import agendamentos from "../../assets/images/agendamentos.png"
import userpic from "../../assets/images/userpic.png"
import historicoregistros from "../../assets/images/historicoregistros.png"
import caminhao from "../../assets/images/caminhao.png"
import saida from "../../assets/images/saida.png"
import HeaderMain from "../../components/Header/HeaderMain"


const UsuarioLista = () => {


  return (
    <div>
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
      </div>
      <table class="table table-hover table-striped">
        <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">usuário</th>
              <th scope="col">id</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Anny</td>
              <td>admin</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Rayanne</td>
                <td>admin</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Johnatan</td>
                <td>admin</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>Daniel</td>
                <td>admin</td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td>Gabriel</td>
                <td>admin</td>
            </tr>
            <tr>
                <th scope="row">6</th>
                <td>Isaac</td>
                <td>admin</td>
            </tr>
            <tr>
                <th scope="row">7</th>
                <td>Beatriz</td>
                <td>admin</td>
            </tr>
          </tbody>
        </table>
        </div>
    
    )
}

export default UsuarioLista;