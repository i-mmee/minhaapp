import logo from "./logo.svg";
import "./App.css";

function MyButton() {
  return <button>botão</button>;
}

function MeuTitulo() {
  return <h1>ECOSTYLE</h1>;
}

function MinhaTabela() {
  return (
    <table>
      <tr>
        <td>Participantes</td>
      </tr>
      <tr>
        <td>001</td>
        <td>Cassi</td>
      </tr>
      <tr>
        <td>002</td>
        <td>Aimée</td>
      </tr>
      <tr>
        <td>003</td>
        <td>Maluh</td>
      </tr>
    </table>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MeuTitulo />
        <MinhaTabela />
        <p></p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <MyButton />
      </header>
    </div>
  );
}

export default App;
