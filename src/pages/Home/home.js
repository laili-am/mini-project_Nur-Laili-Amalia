import { useMutation, useQuery, useSubscription } from "@apollo/client";
import React, { useEffect } from "react";
import { deleteAll, GETall } from "../../GraphQL/gql";
import "../Home/recipe.css";
import { useState } from "react";
import swal from "sweetalert";

const Home = () => {
  const { data, loading, error } = useQuery(GETall);
  const [recipe, setRecipe] = useState();
  //mutation dan lazy query
  //pakai function jadi pakai array []
  useEffect(() => {
    if (data) {
      setRecipe(data?.recipe || []);
    }
    //console.log(recipe)
  }, [data]);
  const [
    hapusdata,
    { data: datahapus, loading: loadinghapus, error: errorhapus },
  ] = useMutation(deleteAll, { refetchQueries: [GETall] });
  const handleHapus = (x) => {
    hapusdata({
      variables: {
        id: x,
      },
    });
    return swal(
      "Are You Sure?",
      "Once deleted, you will not be able to recover this imaginary file!",
      "warning"
    );
  };

  return (
    <div className="grid grid-cols-3 gap-1">
      {recipe?.map((i, index) => {
        return (
          <div key={index || null}>
            <div className="recipe">
              <img src={i.upload_image} className="image" />
              <h1>{i.food_name}</h1>
              <h4>by {i.creator_name}</h4>
              <h3>{<p className="text">{i.recipe}</p>}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
