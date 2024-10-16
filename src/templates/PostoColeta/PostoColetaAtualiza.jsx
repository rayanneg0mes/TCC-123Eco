import logo from "../../assets/images/logo.png"

import HeaderMain from "../../components/Header/HeaderMain"


const PostoColetaAtualiza = () => {


  return (
    <div>
      <div>
        
        <HeaderMain
          title=""
          logo={logo}
        />
          
        
      </div>
      <div className="container">
        <form className="row g-3 rounded-4 shadow p-5">
          <div className="col-md-6">
            <label htmlfor="inputEmail4" className="form-label">Nome Do Posto</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label htmlfor="inputPassword4" className="form-label">Logadouro</label>
            <input type="password" className="form-control" id="inputPassword4" />
          </div>
          <div className="col-12">
            <label htmlfor="inputAddress" className="form-label">Cidade</label>
            <input type="text" className="form-control" id="inputAddress" />
          </div>
          <div className="col-md-6">
            <label htmlfor="inputCity" className="form-label">Bairro</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-6">
            <label htmlfor="inputCity" className="form-label">CEP</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-2">
            <label htmlfor="inputZip" className="form-label">Número</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          <div className="col-md-4">
            <label htmlfor="inputState" className="form-label">UF</label>
            <select id="inputState" className="form-select">
              <option selected></option>
              <option>AC</option>
              <option>AL</option>
              <option>AP</option>
              <option>AM</option>
              <option>BA</option>
              <option>CE</option>
              <option>DF</option>
              <option>ES</option>
              <option>GO</option>
              <option>MA</option>
              <option>MT</option>
              <option>MS</option>
              <option>MG</option>
              <option>PA</option>
              <option>PB</option>
              <option>PR</option>
              <option>PE</option>
              <option>PI</option>
              <option>RJ</option>
              <option>RN</option>
              <option>RS</option>
              <option>RO</option>
              <option>RR</option>
              <option>SC</option>
              <option>SP</option>
              <option>SE</option>
              <option>TO</option>
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-success">Alterar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PostoColetaAtualiza;