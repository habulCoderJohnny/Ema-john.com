import React, { useState } from 'react';

const Shipment = () => {
       // 1st
       const [name, setName] = useState('');
       const [email, setEmail] = useState('');
       const [Address,setAddress] = useState('');
       const [phone,setPhone] = useState('');

        // 2nd
    const handleNameBlur = event =>{
        setName(event.target.value);
    }
    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handleAddressBlur = event =>{
        setAddress(event.target.value);
    }
    const handlePhoneBlur = event =>{
        setPhone(event.target.value);
    }
    const handleAddShipping = event =>{
        event.preventDefault();
    }


    return (
        <div className='form-container'>
        <div>
            <h1 className='form-title'>Shipping Information</h1>
            <form onSubmit={handleAddShipping}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleNameBlur} type="email" name="email" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="name">Your Name</label>
                    <input onBlur={handleEmailBlur} type="name" name="name" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="address">Present Address</label>
                    <input onBlur={handleAddressBlur} type="text" name="address" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="phone-number">Contract Number(+880)</label>
                    <input onBlur={handlePhoneBlur} type="phone" name="phone" id="" required/>    
                </div>
                {/* error showing & spinner in ui
                {loading && <p className='spinner'></p>}
                <p className='error'>{errors} {error?.message}</p> */}
                <input className='form-submit' type="submit" value="Add Shipping" />
            </form>
                             {/* FORM END  */}
        </div>
    </div>
    );
};

export default Shipment;