import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'
const Product = (props) => {
    const {handleAddtoCart,product}= props;
    const {name, img, seller,price, ratings} = product;
    
    return (
        <div className='product-list'>
            <img src={img} alt=""></img>
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price : ${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={()=>handleAddtoCart(product)} className='btn-cart'>
            <p className='btn-text'>Add to Cart</p><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;