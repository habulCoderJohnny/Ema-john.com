import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const [cart, setCart] = useCart();
    //For Pagination 
    const[pageCount, setPageCount] = useState(0);
    const[page, setPage] = useState(0);
    const[size, setSize] = useState(5);
    const [products,setProducts] = useState([]);

    // search query 
    useEffect(()=>{
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
        .then(res=>res.json())
        .then(data => setProducts(data));
    },[page, size]);

    useEffect(()=>{
        fetch('http://localhost:5000/productCount')
        .then(res => res.json())
        .then(data =>{
            const count = data.count;
            const pages = Math.ceil(count/10);
            setPageCount(pages)
        });
    },[]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/product')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, []);

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
                        <button>Order History</button>
                    </Link>
                </Cart>
            </div>
                   {/* Pagination Part*/}
                 <div className='pagination'>
                    {
                        [...Array(pageCount).keys()].map(number=><button className={page===number ? 'selected':''} 
                        onClick={()=>setPage(number)}>{number+1}</button>)
                    }
                    <select className='' onChange={e=> setSize(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
        </div>
    );
};

export default Shop;