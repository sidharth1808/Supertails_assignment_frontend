import Header from './Components/Header';
import './App.css';
import { BrowserRouter, Route,  } from 'react-router-dom';
import Cart from './Components/Cart';
import  Home  from './Components/Home';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
       
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        
        
        
      </div>
    </BrowserRouter>
  );
}

export default App;
