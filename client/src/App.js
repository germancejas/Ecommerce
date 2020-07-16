import React, { useEffect } from 'react';
import {Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Css/App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx'
import Form from './components/Form.jsx';
import Home from './components/Home.jsx';
import ProductItem from './components/Product.jsx';
import FormAdd from './components/FormAdd.jsx';
import Categories from './components/Categories.jsx';
import FormCat from './components/FormCat.jsx';
import FormUser from './components/FormUser.jsx'
import Order from './components/Order.jsx'
import User from './components/User.jsx'
import FormEditUser from './components/FormEditUser'
import loginPage from './components/loginPage'
import { history } from './helpers/history';
import { alertActions } from './actions/alertActions';
import { PrivateRoute } from './components/PrivateRoute';




// import CatCards from './components/CatCards';
// import CatCards from './components/CatCards';

function App() {
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
      history.listen((location, action) => {
          // clear alert on location change
          dispatch(alertActions.clear());
      });
  }, []);



return (
  <div className="jumbotron">
    <div className="container">
      <div className="col-md-8 offset-md-2">
       
    <BrowserRouter  history={history}>
    
        <Route path='/' component={Nav} />
        
        <PrivateRoute exact path='/' component={Home} />
        <Route exact path='/products' component={Cards} />
        <Route exact path='/products/:id' component={ProductItem} />
        <Route exact path='/products/:id/edit' component={Form} />
        <Route exact path='/products' component={Categories} />
        <Route exact path='/products/:id/addProduct' component={FormAdd} />
        <Route exact path='/products/:id/addcat' component={FormCat} />
        <Route exact path='/order' component={Order} />
        <Route exact path='/register' component={FormUser} />
        <Route exact path='/user/:id' component={User} />
        <Route exact path='/user/:id/edit' component={FormEditUser} />
        <Route exact path='/login' component={loginPage} />
        
       </BrowserRouter>
     </div>
    </div>
   </div>
  )
}

export default App;