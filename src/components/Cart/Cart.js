import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const {cart}=props;
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Selected Meals: </p>
            <div className='item-list'>{cart.map(item=><p><FontAwesomeIcon icon={faCheck} /> {item.strMeal}</p>)}</div>
        </div>
    );
};

export default Cart;