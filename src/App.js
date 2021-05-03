import './App.css';
import Conversor from "./components/Conversor"

function App() {
  return (
    <div className="App">
      <h1>Conversor de Moeda</h1>
      <div className="linha">
   <Conversor moedaA="USD" moedaB="BRL"></Conversor>
   <Conversor moedaA="BRL" moedaB="USD"></Conversor>
    </div>

    <div className="linha">
   <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
   <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
    </div>

    <div className="linha">
   <Conversor moedaA="OMR" moedaB="BRL"></Conversor>
   <Conversor moedaA="BRL" moedaB="OMR"></Conversor>
    </div>

    </div>

  );
}

export default App;
