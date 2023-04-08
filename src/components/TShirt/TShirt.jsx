import React from 'react';
import { Toaster } from 'react-hot-toast';

const TShirt = ({ tShirt, handleAddToCart }) => {
    const { _id, picture, price, name } = tShirt
    return (
        <div className="card w-64 md:w-96 bg-base-100 shadow-xl card-bordered border-black mb-3 mt-10">
            <figure><img className='w-50' src={picture} alt="TShirts" /></figure>
            <hr></hr>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>handleAddToCart(tShirt)} className="btn btn-primary">Add to cart</button>
                    <Toaster/>
                </div>
            </div>
        </div>
    );
};

export default TShirt;