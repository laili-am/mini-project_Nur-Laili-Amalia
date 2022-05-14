import React from "react";
import style from '../pages/css/recipe.modulo.css'

const Recipe = ({ foodName, creatorName, image, recipe }) => {
return (
    <div className={style.recipe}>
        <h1>{foodName}</h1>
        <h2>by {creatorName}</h2>
        <img src={image} alt=""/>
        <ol>
            {recipe.map(recipe => (
                <li>{recipe.text}</li>
            ))}
        </ol>
    </div>
);
};
export default Recipe;