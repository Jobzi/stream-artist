import './App.css'
import cafune from './assets/cafune.mp3'

function App() {
  return (
    <div className="App">
      <nav>
         <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Sobre nosotros</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
      {/* <div className="overlay"></div> */}
      <div className="gridContainer">
        <div className="boxLeft">
          <div className="box">
            <h2>2020 europan tour</h2>
            <h1>LIFE ABOVE IMAGINATION</h1>
            <h3>Next Conciert</h3>
            <div className="gridMiniContainer">
              <h2>10.02.2020</h2>
              <h1>Wabba lab dab dab</h1>
              <h1></h1>
              <h1>Lorem ipsum dolor</h1>
              <h2>10.02.2020</h2>
              <h1>Tamo en vivo</h1>
              <h1></h1>
              <h1>Suena Portugal</h1>
              <h1></h1>
            </div>
          </div>
        </div>
        <div className="boxRight"><audio src={cafune} controls ></audio></div>
      </div>
    </div>
  )
}

export default App
