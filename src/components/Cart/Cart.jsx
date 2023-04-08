import React from 'react';
import { Toaster } from 'react-hot-toast';
const Cart = ({ cart,handleRemoveFromCart }) => {
    return (
        <div>
        <h1 className='text-xl'>Order Summary: {cart.length}</h1>
        {
            cart.map(tShirt => 
                <p key={tShirt._id}>{tShirt.name} 
                <button onClick={() => handleRemoveFromCart(tShirt._id)}><span className='font-bold text-3xl bg-emerald-400 ml-3 rounded-lg'>XXX</span></button>
                <Toaster/></p>)
        }
        </div>
    );
};

export default Cart;