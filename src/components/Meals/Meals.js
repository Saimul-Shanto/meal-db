import React from 'react';
import './Meals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Meals = (props) => {
    const {strMeal,strMealThumb,strCategory,strIngredient1,strIngredient2,strIngredient3}=props.meal;
    
    // console.log(props.meal)
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="problem" />
            <div className='meal-info'>
                <p className='meal-title'>{strMeal}</p>
                <p>Category: {strCategory}</p>
                <p>Ingredient: {strIngredient1},{strIngredient2},{strIngredient3}</p>
            </div>
            <button onClick={()=>props.addToCart(props.meal)} className='btn'><p>Add To Cart</p><FontAwesomeIcon icon={faCoffee} /></button>
        </div>
    );
};

export default Meals;