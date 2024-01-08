import React, { useState, useEffect } from 'react';
import '../src/Css/Home.css';
import cartData from '../src/data/data.json';
import { Link } from 'react-router-dom';


const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(cartData);
    }, []);


    return (
        <>
        <div className="cart">
            {cart.length && cart.map((cartItem) => (
                <div className="elebration" key={cartItem.id}>
                    <img className="dataImage" src={cartItem.logo} />
                    <div className="postedAt">  <span className='at' >{cartItem.postedAt}</span> 
                        <img className='contract' src="\src\İmage\Logos\point.svg" alt="" />{cartItem.contract}
                      <Link className='positionLink' to = '/Detail'>  <h3 className="position"> {cartItem.position} </h3></Link>
                        <p className="company">{cartItem.company}  </p>
                        <p className="detaillocation"> {cartItem.location} </p></div>
                </div>

            ))}
             
        </div>
        <button className='loadMoreButtonOne' >Load More</button>
        </>)
}


export default Cart;