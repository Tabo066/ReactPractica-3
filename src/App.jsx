import { useState } from 'react';
import './App.css';
import Boton from './Componentes/Componente';
import maincaracter from './imagenes/1111.png';

function App() {
const [logo, setLogo] = useState('https://file.aiquickdraw.com/chatgpt/file-NuuhNibQENpKWgZFGN3vGS.png');
const [suv, setSuv] = useState('https://www.chevrolet.com.ar/content/dam/chevrolet/sa/argentina/espanol/index/crossover-and-suvs/crossover-and-suvs-subcontent/julio/jelly-tracker.jpg?imwidth=960');
const [camioneta, setCamioneta] = useState('https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_11a4778c0b244952aed29c3b9962c7d5.webp');
const [chata, setChata] = useState('https://autoenaccion.com.ar/wp-content/uploads/2025/01/chevrolet-s10-wt-4x4-2025-delantera-1.jpg');
const [sedan, setSedan] = useState('https://images.dealer.com/ddc/vehicles/2025/Chevrolet/Malibu/Sedan/color/Lakeshore%20Blue%20Metallic-GXP-119,141,172-640-en_US.jpg');
const [vocho, setVocho] = useState('https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
const [peugeot, setPeugeot] = useState('https://cdn.imagin.studio/getImage?customer=arelcerokm&countryCode=AR&make=peugeot&modelFamily=208&modelRange=208&modelVariant=ha&modelYear=2024&zoomLevel=30&width=800');


  return(
    <div className='app'>
  <header>
    <div className="logo sds">
      <img src={logo} alt="CarTrickshot"></img>
    </div>
    <div className="chat">
      <button className='botonn'>Chat</button>
    </div>
  </header>
  <section className="main">
    <div className="cta-container">
      <h1>¡FELICIDADES POR GRANDES OFERTAS!</h1>
      <img src={maincaracter} alt="Imagen de Vehículo"></img>
      <div className="cta-buttons">
        <button className="cta-btn botonn">CATALOGO GRANDES OFERTAS</button>
        <button className="cta-btn botonn">ENCUENTRA TU PRÓXIMO VEHÍCULO</button>
      </div>
    </div>
    <div className="message">
      <p>¡Hola!</p>
      <p>¡Buenas noticias! ¡El Black Friday ya está aquí y te traemos precios especiales!</p>
      <p>Grandes ofertas en vehículos de alta calidad sin romper tu presupuesto. ¡Date un gusto, te lo mereces!</p>
    </div>
  </section>
  <section className="vehicle-categories">
    <h2>Vehículos que te encantarán</h2>
    <div className="category-cards">
      <div className="card">
        <img src={suv} alt="SUV" id="carimg" className="category-img"></img>
        <p className="category-description">SUVs cómodos</p>
      </div>
      <div className="card">
        <img src={camioneta} alt="Camioneta" className="category-img"></img>
        <p className="category-description">Camionetas desde $22K</p>
      </div>
      <div className="card">
        <img src={chata} alt="AWD, 4WD" id="carimg" className="category-img"></img>
        <p className="category-description">Vehículos con AWD, 4WD</p>
      </div>
      <div className="card">
        <img src={sedan} alt="Lujo Asequible" className="category-img"></img>
        <p className="category-description">Lujo asequible</p>
      </div>
    </div>
    <button className="cta-btn botonn">BUSCAR TODOS LOS VEHÍCULOS</button>
  </section>
  <section className="sell-trade">
    <div className="payment-container">
    <h3>¿Quieres vender o intercambiar?</h3>
    <p>Te ofrecemos una oferta competitiva desde el principio, y facilitamos todo el proceso. Sin tarifas ocultas, sin compra necesaria. Sin dolores de cabeza. Ahorra tiempo publicando en línea.</p>
    <div className="sell-trade-frame">
      <img src={vocho} alt="Vender o Intercambiar Coche" className="sell-trade-img"></img>
    </div>
    <button className="cta-btn botonn">OBTÉN TU OFERTA</button>
    </div>
  </section>
  <section className="payment-info"> 
    <div className="payment-container">
      <div className="payment-details">
        <div className="payment-text">
          <h4>Tu pago mensual</h4>
          <p>$375/mo</p>
          <p>$0 de pago inicial, 4.6% APR, 72 meses*</p>
        </div>
        <div className="payment-car">
          <img src={peugeot} alt="Car Image"></img>
        </div>
      </div>
      <div className="payment-footer">
        <p>Coche correcto. Precio correcto.</p>
        <p>¡Compre con confianza! Obtenga tarifas personalizadas en menos de 2 minutos sin impacto en su puntaje crediticio.</p>
        <button className="cta-btn botonn">OBTENGA LA PRECALIFICACIÓN</button>
      </div>
    </div>
  </section>

    <footer>
        <p>© 2022 CarTrickshot, Todos los derechos reservados</p>
        <p>You are receiving this email because you opted in to receive information periodically from W&P Design.</p>
    <div className="footer-links">
      <a href="#">Política de Privacidad</a>
      <a href="#">Términos de Servicio</a>
      <a href="#">Chatea con Nosotros</a>
    </div>
    </footer>

    </div>
  )}

export default App
