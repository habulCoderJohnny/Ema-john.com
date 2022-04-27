import React from 'react';
import {useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ProductReview from '../ProductReview/ProductReview';
import './Order.css'

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart,setCart] = useCart()
    const navigate = useNavigate();
        const removeItemHandler = product=>{
            // console.log(product);
            const rest = cart.filter(pd=>pd._id!==product._id);
            setCart(rest);
            removeFromDb(product._id) //remove data from local server

        }
    return (
        <div>
            <div className="shop-container">
                <div className="review-items-container">
                <h1>Customer Order History here: {cart.length}</h1>
                    {
                        cart.map(product=><ProductReview key={product._id} product={product} removeItemHandler={removeItemHandler}></ProductReview>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                       
                         <button onClick={()=>navigate('/shipment')}>Procced to Shipping</button>
   
                    </Cart>

                </div>
                
            </div>  

        </div>
    );
};

export default Orders;