import React from 'react';
import { Toaster } from 'react-hot-toast';
const Cart = ({ cart,handleRemoveFromCart }) => {
    //1.
    let msg;
    if(cart.length===0){
        msg=<p className='text-3xl bg-slate-500'>Please added some products</p>
    }
    // 2.
    else{
        msg=<p className='text-3xl bg-cyan-500'>Thank you for buying products</p>
    }
    return (
        <div>
        <h1 className='text-xl'>Order Summary: {cart.length}</h1>
        {/**3. */}
       {cart.length>3 ? 'thanks for buying' : 'not good' 
        }
        {
            cart.map(tShirt => 
                <p key={tShirt._id}>{tShirt.name} 
                <button onClick={() => handleRemoveFromCart(tShirt._id)}><span className='font-bold text-3xl bg-emerald-400 ml-3 rounded-lg'>XXX</span></button>
                <Toaster/></p>)
        }
        {/*1. */}
        {msg}

        {/**4. */}
        {
            cart.length ===2 && <p>You are beautiful</p>
        }
        </div>
    );
};

export default Cart;
/**
 * CONDITIONAL RENDERING
 * 1. use if or if else to set a variable that will contain an element, components
 * 2. ternary operator: condition ? 'for true' : 'false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical ||: (if the condition is false then the next thing will be displayed)
 * 
 * */ 

/**
 * CONDITIONAL CSS Class
 * 1. use ternary 
 * 2. ternary inside template string
 * */ 