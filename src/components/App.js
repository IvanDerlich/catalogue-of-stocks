/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Loading from './Loading';
import { initialize } from '../actions/index';
import DisplayStocks from './DisplayStocks';
import DisplaySingleStock from './DisplaySingleStock';
import About from './About';
import NavBar from './Navbar';

function App() {
  const [store, setStore] = useState(null);

  useEffect(() => {
    initialize('offline')
      .then(store => {
        setStore(store);
      });
  }, []);

  if (store) {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <NavBar />
          <Route exact path="/" component={() => <DisplayStocks store={store} />} />
          <Route path="/About" component={About} />
          <Route
            path="/stocks/:symbol"
            component={props => (
              <DisplaySingleStock
                symbol={props.match.params.symbol}
                store={store}
              />
            )}
          />
        </Provider>
      </BrowserRouter>

    );
  }
  return Loading();
}

export default App;
