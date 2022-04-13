import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ProductReview from '../ProductReview/ProductReview';
import './Order.css'

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart,setCart] = useCart(products)
    const navigate =useNavigate();
        const removeItemHandler = product=>{
            console.log(product);
            const removeItemFromOrderandCart = cart.filter(pd=>pd.id!==product.id);
            setCart(removeItemFromOrderandCart);
            removeFromDb(product.id) //remove data from local server

        }
    return (
        <div>
            <h1>Customer Order History here: {products.length}</h1>
            <p>{cart.length}</p> 
            <div className="shop-container">
                <div className="review-items-container">
                    {
                        cart.map(product=><ProductReview key={product.id} product={product} removeItemHandler={removeItemHandler}></ProductReview>)
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