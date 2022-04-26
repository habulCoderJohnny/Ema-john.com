import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    //For Pagination 
    const[pageCount, setPageCount] = useState(0);
    useEffect(()=>{
        fetch('http://localhost:5000/productCount')
        .then(res => res.json())
        .then(data =>{
            const count = data.count;
            const pages = Math.ceil(count/10);
            setPageCount(pages)
        });
    },[]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product._id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }

        }
        setCart(savedCart);
    }, [products])  //dependency injection

    const handleAddtoCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id);

        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        // console.log(product);
        // cart.push(product);

        setCart(newCart);
        addToDb(selectedProduct._id); //added to local database
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product._id}
                        product={product} handleAddtoCart={handleAddtoCart}></Product>)
                }
            </div>
            
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/orders'>
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>

                            {/* Pagination */}
                            <div className='pagination'>
                    {
                        [...Array(pageCount).keys()].map(number=><button>{number+1}</button>)
                    }
                </div>
        </div>
    );
};

export default Shop;