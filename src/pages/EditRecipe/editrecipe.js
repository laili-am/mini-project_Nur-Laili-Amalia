import React, { useState, useRef, useEffect } from "react";
import styles from "../EditRecipe/editrecipe.css";
import { GETbyid, INSERT } from "../../GraphQL/gql";
import { storage } from "../../firebase.config";
import swal from "sweetalert";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import FormEdit from "./form";

export default function EditRecipe() {
  const baseData = {
    creatorName: "",
    foodName: "",
    category: "",
    image: "",
    recipe: "",
  };
  const baseError = {
    creatorName: "",
  };

  // Untuk mengambil parameter id
  let params = useParams();
  const { id } = params;
  const {
    data: datarecipe,
    loading,
    error,
  } = useQuery(GETbyid, {
    variables: {
      id: id,
    },
  });

  useEffect(() => {
    // setData(datarecipe)
    console.log(datarecipe);
  }, [datarecipe]);

  if (loading) {
    return (
      <p
        style={{
          display: "flex",
          fontFamily: "Sarala",
          fontSize: "120px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        loading
      </p>
    );
  } else {
    return <FormEdit recipe={datarecipe} />;
  }
}
