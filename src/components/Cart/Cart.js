import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart,children } = props;
    console.log(props);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity+product.quantity
        total = total + product.price*product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2)); // 10/100
    const grandTotal = total + shipping + tax;
    return (
        <div className='summary'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: {tax}</p>
            <h5 style={{color:'tomato'}}>Grand Total:${grandTotal.toFixed(2)}</h5>
            {children}

        </div>
    );
};

export default Cart;