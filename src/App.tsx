import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listaTema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPosts/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
        <Route exact path='/'><Login /></Route>
          <Route path='/login'><Login /></Route>
          <Route path='/home'><Home /></Route>

          <Route path='/cadastrousuario'><CadastroUsuario /></Route>
          <Route path='/temas'><ListaTema /></Route>
          <Route path='/posts'><ListaPostagem /></Route>

          <Route exact path='/formularioPostagem'><CadastroPost /></Route>
          <Route exact path='/formularioPostagem/:id'><CadastroPost /></Route>
          <Route exact path='/formularioTema'><CadastroTema /></Route>
          <Route exact path='/formularioTema/:id'><CadastroTema /></Route>
          <Route path='/deletarPostagem/:id'><DeletarPostagem /></Route>
          <Route path='/deletarTema/:id'><DeletarTema /></Route>

        </Routes>
      </div>
      <Footer />
    </Router>
  )

}

export default App;

