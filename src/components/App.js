import { useState, useEffect } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import {initialize} from '../actions/index'
import DisplayStocks from './DisplayStocks'
import DisplaySingleStock from './DisplaySingleStock'
import About from './About'
import NavBar from './Navbar'


function App() {
  const [store, setStore ] = useState(null) 

   useEffect(() => {   
    initialize('offline')
      .then(store => {
        setStore(store)        
      })
  }, []);

  if (store){
    return(      
      <BrowserRouter >    
        <NavBar/>
        <Route exact path='/' component={()=><DisplayStocks store={store}/>}/>
        <Route path='/About' component={About}/>
        <Route path='/stocks/:symbol'component={(props)=>
          <DisplaySingleStock 
            {...props}
            store={store}            
          />}
        />
      </BrowserRouter>    
      
    )
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <div>Fetching stocks...</div>      
        </header>
      </div>
    );
  }
}

export default App;
