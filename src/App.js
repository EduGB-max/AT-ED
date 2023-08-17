import React from 'react';
import { FaTree, FaLeaf, FaWhatsapp, FaInstagram } from 'react-icons/fa'; // Importe os novos ícones
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sobre Nós</h1>
        <p>
          Somos apaixonados pela preservação da Mata Atlântica e estamos comprometidos em proteger e conservar esse ecossistema único.
        </p>
        <br/>

<p> Segue nossas redes sociais : </p>

<div className="Social-icons">
          <a href="https://api.whatsapp.com/your-link" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="Social-icon"/> 
          </a>
          <p>11 90245 6796</p>

          <br>
          </br>
            <br>
            </br>

          <a href="https://www.instagram.com/your-account/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="Social-icon" />
          </a>

          <p>@salve a mata</p>
        </div>
        
      </header>


      <section className="Info-section">
        <div className="Icon-container">
          <FaTree className="Icon" />
          <h2>Missão</h2>
          <p>Nossa missão é promover a conscientização e ações para a restauração e preservação da Mata Atlântica.</p>
        </div>


        <div className="Icon-container">
          <FaLeaf className="Icon" />
          <h2>Valores</h2>
          <p>Nossos valores incluem sustentabilidade, educação ambiental e colaboração com comunidades locais.</p>
        </div>
      </section>


      <section className="Data-section">
        <h2>Dados a Favor da Mata Atlântica</h2>
        <p>A Mata Atlântica é um dos biomas mais ricos em biodiversidade do mundo, abrigando milhares de espécies de plantas e animais.</p>
        <p>Infelizmente, devido à expansão urbana e desmatamento, grande parte desse ecossistema único foi destruído.</p>
       <p>Estamos trabalhando para reverter essa situação e restaurar a beleza e a vitalidade da Mata Atlântica para as gerações futuras.</p>
    
   <img src="https://www.sescrio.org.br/wp-content/uploads/2020/05/mata-atlantica-550x330.jpg" alt="" />
    
      
      </section>
    </div>
  );
}

export default App;
