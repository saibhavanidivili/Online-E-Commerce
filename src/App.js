import Navbar from './component/Navbar';
import './App.css';
import Home from './component/Home';
import {Route, Switch} from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import Login from './component/Login';

function App() {
 
  return (
    <>
    <Navbar/>
    <br></br>
    <Switch>
    <Route exact path="/" component={Home}/>
   

      <Route exact path="/products" component={Products}/>

      <Route exact path="/products/:id" component={Product }/>
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/login" component={Login}/>
   </Switch>
   
    
    </>
  );
    
}

export default App;
