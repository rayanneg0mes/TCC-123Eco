import { Routes, Route } from "react-router-dom"
import App from "../templates/App/App"


import LoginForgotPass from "../templates/Login/LoginForgotPass"
import Login from "../templates/Login/Login"

import Mensagem from "../templates/Mensagem/Mensagem"
import MensagemLer from "../templates/Mensagem/MensagemLer"

import UsuarioAtualiza from "../templates/Usuario/UsuarioAtualiza"
import UsuarioNovo from "../templates/Usuario/UsuarioNovo"
import UsuarioLista from "../templates/Usuario/UsuarioLista"
import Usuario from "../templates/Usuario/Usuario"

import LoginNewPass from "../templates/Login/LoginNewPass"

import ColetaAtualiza from "../templates/Coleta/ColetaAtualiza"
import ColetaNovo from "../templates/Coleta/ColetaNovo"
import ColetaLer from "../templates/Coleta/ColetaLer"

import PostoColeta from "../templates/PostoColeta/PostoColeta"
import PostoColetaNovo from "../templates/PostoColeta/PostoColetaNovo"
import PostoColetaAtualiza from "../templates/PostoColeta/PostoColetaAtualiza"
import PostoColetaLista from "../templates/PostoColeta/PostoColetaLista"

import ProdutoAtualiza from "../templates/Produto/ProdutoAtualiza"
import ProdutoColetadoAtualiza from "../templates/Produto/ProdutoColetadoAtualiza"
import ProdutoColetadoNovo from "../templates/Produto/ProdutoColetadoNovo"
import ProdutoColetado from "../templates/Produto/ProdutoColetado"

import ProdutoLista from "../templates/Produto/ProdutoLista"
import ProdutoNovo from "../templates/Produto/ProdutoNovo"
import ColetaLista from "../templates/Coleta/ColetaLista"
import ProdutoLer from "../templates/Produto/ProdutoLer"
import UsuarioVer from "../templates/Usuario/UsuarioVer"
import ProdutoVer from "../templates/Produto/ProdutoVer"
import PostoColetaVer from "../templates/PostoColeta/PostoColetaVer"
import Home from "../templates/App/Home"
import UsuarioPerfil from "../templates/Usuario/UsuarioPerfil"
import FaleConosco from "../templates/Mensagem/FaleConosco"


const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpass" element={<LoginForgotPass />} />
        <Route path="/newpass/:id" element={<LoginNewPass/>} />

        <Route path="/mensagem" element={<Mensagem />} />
        <Route path="/mensagemler/:id" element={<MensagemLer />} />
        <Route path="/faleconosco" element={<FaleConosco />} />

        <Route path="/coletaatualiza" element={<ColetaAtualiza />} />
        <Route path="/coletanovo" element={<ColetaNovo />} />
        <Route path="/coletalista" element={<ColetaLista />} />
        <Route path="/coletaler/:id" element={<ColetaLer />} />
        
        <Route path="/postocoleta" element={<PostoColeta />} />
        <Route path="/postocoletanovo" element={<PostoColetaNovo />} />
        <Route path="/postocoletaatualiza" element={<PostoColetaAtualiza />} />
        <Route path="/postocoletalista" element={<PostoColetaLista />} />
        <Route path="/postocoletaver/:id" element={<PostoColetaVer />} />
        

        <Route path="/usuarioatualiza" element={<UsuarioAtualiza/>} />
        <Route path="/usuariolista" element={<UsuarioLista />} />
        <Route path="/usuarionovo" element={<UsuarioNovo />} />
        <Route path="/usuario" element={<Usuario/>} />
        <Route path="/usuariover/:id" element={<UsuarioVer />} />
        <Route path="/usuarioperfil/:id" element={<UsuarioPerfil />} />

        <Route path="/produtoatualiza" element={<ProdutoAtualiza/>} />
        <Route path="/produtocoletadoatualiza" element={<ProdutoColetadoAtualiza/>} />
        
        <Route path="/produtocoletadonovo" element={<ProdutoColetadoNovo />} />
        <Route path="/produtolista" element={<ProdutoLista/>} />
        <Route path="/produtonovo" element={<ProdutoNovo/>} />
        <Route path="/produtocoletado" element={<ProdutoColetado/>} />

        <Route path="/produtover/:id" element={<ProdutoVer />} />
        <Route path="/produtoler/:id" element={<ProdutoLer />} />

      </Routes>
    </div>
  )
}
export default AppRoutes