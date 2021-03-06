import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Master from '../components/layoutes/Master';
import Products from '../components/product/Product';
import SingleProduct from '../components/product/SingleProduct';
import Home from '../components/mainpage/Home';
import Profile from '../components/user/Profile'
import Login from '../components/user/Login';
import Register from '../components/user/Register';
import Userinfo from '../components/user/Userinfo';
import Registerinfo from '../components/user/Registerinfo';
import Confirm from '../components/user/Confirm';
import Cart from '../components/product/Cart';
import MapPicker from '../components/Mappicker';
import NotFound from '../components/common/NotFound';
import ProductCompare from '../components/product/ProductCompare';
import Search from '../components/product/Search';
import Card from '../components/product/Card1';
import Card2 from '../components/product/Card2';
import Payment1 from '../components/product/Payment1';
import Payment2 from '../components/product/Payment2';
import Location from '../components/product/Location';
import Location1 from '../components/product/Location1';
import Discounts from '../components/product/Discounts';
import Diagram from '../components/product/Diagram';



const Shop = () => {
    return (
        <Master>
            <Switch>
                <Route path='/mappicker' component={MapPicker} />
                <Route path='/compare' component={ProductCompare} />
                 <Route path='/search' component={Search} />
                <Route path='/login' component={Login} />
                      <Route path='/register' component={Register} />
                <Route path='/userinfo' component={Userinfo} />
                <Route path='/register' component={Register} />
                <Route path='/confirm' component={Confirm} />
                <Route path='/profile' component={Profile} />
                <Route path='/products' component={Products} />
                 <Route path='/pricediagram' component={Diagram} />
                {/*  <Route path='/product/:id' component={SingleProduct} /> */}
                   <Route path='/product' component={SingleProduct} />
                <Route path='/cart' component={Cart} />
                  <Route path='/card' component={Card} />
                    <Route path='/location' component={Location} />
                         <Route path='/location1' component={Location1} />
                  <Route path='/discounts' component={Discounts} />
                   <Route path='/card2' component={Card2} />
                   <Route path='/payment1' component={Payment1} />
                    <Route path='/payment2' component={Payment2} />
                <Route path='/' exact component={Home} />
                <Route path='*' exact component={NotFound} />
                
            </Switch>
        </Master>
    );
};

export default Shop;