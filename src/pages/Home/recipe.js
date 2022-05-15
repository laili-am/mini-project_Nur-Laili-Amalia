import React from "react";
import style from './recipe.css'

const Recipe = ({ foodName, category, creatorName, image, recipe }) => {
return (
    <div className={style.recipe}>
        <h1>{foodName}</h1>
        <h2>{category}</h2>
        <h3>by {creatorName}</h3>
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