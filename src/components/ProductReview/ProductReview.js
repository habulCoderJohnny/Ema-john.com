import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ProductReview.css';

const ProductReview = (props) => {
    const {product,removeItemHandler} = props;
    const {name,price,img,shipping,quantity} = product;
    return (
        <div className='review-item'> 
        <div><img src={img} alt=""/></div>
       
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p className="product-name" title={name}>
                    {name.length>20? name.slice(0,20)+'...':name}
                    </p>
                    <p>Price: $<span className='orange-color'>{price}</span></p>
                    <p><small>Shipping: $<span className='orange-color'>{shipping}</span></small></p>
                    <p><small>Quantity:{quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={()=> removeItemHandler(product)} className='delete-btn'> <FontAwesomeIcon icon={faTrashAlt} className='delete-icon'></FontAwesomeIcon> </button>

                </div>
            </div>
        </div>
    );
};

export default ProductReview;