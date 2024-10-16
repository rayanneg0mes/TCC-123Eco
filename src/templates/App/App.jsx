import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../assets/images/logo1.png';
import anny from '../../assets/images/anny.jfif';
import biel from '../../assets/images/biel.jpeg';
import dan from '../../assets/images/dan.jpeg';
import isaac from '../../assets/images/isaac.jfif';
import john1 from '../../assets/images/john1.jpeg';
import beatriz from '../../assets/images/beatriz.jfif';
import rayanne from '../../assets/images/rayanne.jpg';
import './App.css';
import MensagemService from '../../services/MensagemService';

function App() {

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(formData => ({ ...formData, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.emissor != undefined && formData.email != undefined && formData.texto != undefined) {
      MensagemService.create(formData).then(
        (response) => {
          alert(response.data.message);
          window.location.reload();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }, (error) => {
          const message = error.response.data.message;
          alert(message);
        }
      )
    }
  }

  return (
    <div className='fundo'>
      
         
        
  
      
      <main className='main'>
        <section id="inicio" className='border'>
          <div>
            <img src={logo1} alt="Logo" />
          </div>
        </section>

        <section id="sobre" className='fundo'>
          <div className="container-title">
            <div className="container text-white">
              <h1 className='text-white fw-bold'>Sobre Nós</h1>
              <p className='h3 fst-italic'>A 123 ECO foi criada com o intuito de motivar os jovens e adolescentes de
                instituições escolares a reciclarem lixo eletrônico e criarem a conscientização sobre o assunto.
                Nossa empresa tem o objetivo de informar e cadastrar escolas que tenham os objetivos de
                incentivar alunos e funcionários da unidade a reciclarem. Um funcionário do nosso
                estabelecimento irá levar a caixa de coleta na unidade escolar cadastrada em nosso sistema,
                onde acontecerá o descarte de lixos eletrônicos de forma adequada na unidade. A 123 ECO irá
                entrar em contato com as instituições marcando a retirada dos resíduos eletrônicos nas unidades,
                no dia agendado a nossa empresa será responsável em ir até a escola e fazer o registro da
                quantidade de lixo que foi coletada, tipo de resíduo, data de coleta e alguma descrição, se
                necessário. Nosso foco é que as pessoas tomem conscientização sobre a importância de reciclar
                lixos eletrônico e, também para que elas entendam o que esse tipo de resíduo causa no meio
                ambiente.</p>
            </div>

            <div className="container" >
              <h1 className='text-primary fw-bold'>Nosso Time</h1>
              <p className='h3 fst-italic'>Nossa equipe é composta por profissionais dedicados e empenhados para transformar o futuro, cada um trazendo habilidades únicas para o
                grupo. Juntos, trabalhamos para criar soluções que façam a diferença.</p>
            </div>

            <div>
              <img src={rayanne} alt="Integrante 7" className="imagem-redonda" />
              <img src={biel} alt="Integrante 2" className="imagem-redonda" />
              <img src={dan} alt="Integrante 3" className="imagem-redonda" />
              <img src={isaac} alt="Integrante 4" className="imagem-redonda" />
              <img src={john1} alt="Integrante 5" className="imagem-redonda" />
              <img src={beatriz} alt="Integrante 6" className="imagem-redonda" />
              <img src={anny} alt="Integrante 1" className="imagem-redonda" />
            </div>
          </div>
        </section>

        <section id="contato">
          <header className="header_geral">
            <div className="container-fale">
              <h1>Fale Conosco</h1>
              <div className="text-success">
                <div>
                  <p><i className="bi bi-telephone-plus"></i>
                    Telefone: (11) 9737-6834
                  </p>
                </div>
                <div>
                  <p><i className="bi bi-envelope-at"></i>
                    Email: suporte123eco@gmail.com
                  </p>
                </div>
                <div>
                  <p>
                    <i className="bi bi-geo-alt"></i>
                    Endereço: R. Interna Grupo Bandeirante, 138 - Jardim Belval, Barueri - SP, 06420-150</p>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Seu Nome" required
                  name="emissor"
                  value={formData.emissor || ""}
                  onChange={handleChange} />

                <input type="email" placeholder="Seu Email" required
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange} />

                <textarea rows="5" placeholder="Sua Mensajem" required
                  name="texto"
                  value={formData.texto || ""}
                  onChange={handleChange}>
                </textarea>
                <button>Enviar</button>
              </form>
            </div>
          </header>
        </section>

        <footer>
          <Link to={'/login'} className='btn btn-sm btn-warning shadow-lg'>
            Acesso Restrito
          </Link>
        </footer>
      </main>
    </div>
  );
}

export default App;

