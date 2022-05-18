import React, { useEffect } from "react";
import { deleteAll, GETall } from "../../GraphQL/gql";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import swal from 'sweetalert';
import '../Home/recipe.css';
import { Link } from "react-router-dom";

function MyRecipe({recipe}) {
  const [hapusdata, {data:datahapus, loading:loadinghapus, error:errorhapus}] = useMutation(deleteAll, {refetchQueries: [GETall],})
  const handleHapus = (x) => {
    hapusdata ({
      variables: {
        id:x
      }
    }) 
    return swal("Are You Sure?", "Once deleted, you will not be able to recover this imaginary file!", "warning");
    }
  return (
    <>
      <div className= 'grid grid-cols-3 gap-1'>
        {recipe?.recipe.map((i, index) => {
          return (
            <div key={index || null}>
              <div className="recipe">
                <img src={i.upload_image} className="image" />
                <h1>{i.food_name}</h1>
                <h4>by {i.creator_name}</h4>
                <h3>{<p className="text">{i.recipe}</p>}</h3>
                <button onClick={() => handleHapus(i.id || "")}>Delete</button>
                <Link to={'/editrecipe/' + i.id}>Edit</Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MyRecipe;
