import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';
import './Restaurant.css';
import Cart from '../Cart/Cart';

const Restaurant = () => {
    const [foods,setFoods] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res=>res.json())
        .then(data=>setFoods(data.meals))
    },[]);
    const addToCart=(food)=>{
        // console.log(food);
        const newCart=[...cart,food];
        setCart(newCart);
        console.log(newCart);
    }
    return (
        <div className='restaurant'>
            <div className="meal-container">
                {
                    foods.map(food=><Meals meal={food} key={food.idMeal} addToCart={addToCart}></Meals>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Restaurant;