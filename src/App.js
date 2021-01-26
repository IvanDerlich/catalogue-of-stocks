import logo from './logo.svg';
import './App.css';
import fetch from 'node-fetch';


function App() {
  // eslint-disable-next-line no-useless-concat
  const credentials = Buffer.from('Tu2pyn7ZhwuajNkMvAbUx4M7iU3ZHg_h' + ':' + 'oVQDFna_412dCcPz9Tf0FGjeL0YbKqxB').toString('base64');
  console.log(credentials)
  fetch('https://api.exchange.bitcoin.com/api/2/trading/balance', {
    method: 'GET',
    headers: {
        'Authorization': 'Basic ' + credentials
    }
}).then(response => response.json())
.then(info => console.log(info));;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
