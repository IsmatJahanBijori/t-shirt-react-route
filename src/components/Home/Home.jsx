import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';
import './Home.css'

const Home = () => {
    const tShirts = useLoaderData()
    const [cart, setCart] = useState([])

    const handleAddToCart = (tShirt) => {
        const exists = cart.find(ts => ts._id === tShirt._id)
        if (exists) {
            toast('already added this product')
        }
        else{
            const newCart=[...cart, tShirt]
            setCart(newCart)
        }
    }
    const handleRemoveFromCart=id=>{
        const remaining=cart.filter(ts=>ts._id!== id)
        if (remaining) {
            toast('deleted this product')
        }
        setCart(remaining)
    }
    console.log(tShirts)
    return (
        <div className='home-container'>
            <div className='grid grid-cols-1 md:grid-cols-3 rounded-lg ml-10 md:ml-5 '>
                {
                    tShirts.map(tShirt => <TShirt key={tShirt._id} tShirt={tShirt} handleAddToCart={handleAddToCart}></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart></div>
        </div>
    );
};

export default Home;