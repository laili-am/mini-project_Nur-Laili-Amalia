import React, { useState, useRef, useEffect } from "react";
import styles from "../EditRecipe/editrecipe.css";
import { storage } from "../../firebase.config";
import swal from "sweetalert";
import { useMutation, useQuery } from "@apollo/client";
import { EDIT } from "../../GraphQL/gql";

export default function FormEdit({ recipe }) {
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
  const editData = {
    id: recipe.recipe_by_pk.id,
    creatorName: recipe.recipe_by_pk.creator_name,
    foodName: recipe.recipe_by_pk.food_name,
    category: recipe.recipe_by_pk.id_category,
    image: recipe.recipe_by_pk.upload_image,
    recipe: recipe.recipe_by_pk.recipe,
  };

  const [updateData, { data: dataUpdate, loading, error }] = useMutation(EDIT);

  const image = useRef("");
  const [data, setData] = useState(baseData);
  const [errorMassage, setErrorMassage] = useState(baseError);
  const regexNama = /^[A-Za-z ]*$/;

  useEffect(() => {
    setData(editData);
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "creatorName") {
      if (!regexNama.test(value)) {
        setErrorMassage({
          ...errorMassage,
          [name]: "Creator Name must be Letter",
        });
      } else {
        setErrorMassage({ ...errorMassage, [name]: "" });
      }
    }

    setData({ ...data, [name]: value });
  };

  const [file, setFile] = useState(null);
  const [url, setURL] = useState();

  const handleFileUpload = async (e) => {
    if (e.target.files[0]) setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const path = `/image/${file.name}`;
    const ref = storage.ref(path);
    await ref.put(file);
    const url = await ref.getDownloadURL();
    setURL(url);
    // setFile(null);
    return swal("Image has been accepted", "Upload Success!", "success");
  };

  const handleSubmit = (e) => {
    if (errorMassage.creatorName !== "") {
      console.log("HEREEE");
      swal("Check Again!", "Invalid Registrant Data", "warning");
    } else {
      if (!file) {
        updateData({
          variables: {
            id: data.id,
            creator_name: data.creatorName,
            food_name: data.foodName,
            id_category: data.category,
            recipe: data.recipe,
            upload_image: data.image,
          },
        });
      } else {
        updateData({
          variables: {
            id: data.id,
            creator_name: data.creatorName,
            food_name: data.foodName,
            id_category: data.category,
            recipe: data.recipe,
            upload_image: url,
          },
        });
      }

      swal(
        `"${data.foodName}" recipe edit has been accepted`,
        "Upload Success!",
        "success"
      );
      resetForm();
    }
    e.preventDefault();
  };

  const resetForm = () => {
    setData(editData);
    image.current.value = "";
    setErrorMassage(baseError);
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "60px",
          fontSize: "50px",
          fontFamily: "Sarala",
          color: "#002148",
        }}
      >
        Edit Recipe
      </h1>
      <div className="tengah">
        <form onSubmit={handleSubmit} className={styles.centerForm}>
          <label>
            Creator Name
            <input
              required
              className={styles.input}
              type="text"
              name="creatorName"
              defaultValue={data.creatorName}
              onChange={handleChange}
            />
          </label>
          <label>
            Food Name
            <input
              required
              className={styles.input}
              type="text"
              name="foodName"
              defaultValue={data.foodName}
              onChange={handleChange}
            />
          </label>
          <label>
            Category <br />
            <select
              required
              type="text"
              name="category"
              value={data.category}
              onChange={handleChange}
            >
              <option disabled value="">
                Select One
              </option>
              <option value="1">Indonesian Food</option>
              <option value="2">Western Food</option>
              <option value="3">Asian Food</option>
            </select>
          </label>
          <label>
            Recipe <br />
            <textarea
              type="text"
              name="recipe"
              defaultValue={data.recipe}
              onChange={handleChange}
            />
          </label>
          <label>
            Upload Image
            <br />
            <input
              className="gambar"
              //   required
              type="file"
              name="image"
              ref={image}
              onChange={handleFileUpload}
            />
          </label>
          <br />
          <button onClick={handleUpload} className="buttonReset">
            Upload gambar
          </button>
          <ul>
            {Object.keys(errorMassage).map((key) => {
              if (errorMassage[key] !== "") {
                return (
                  <li className={styles.errorMassage} key={key}>
                    {errorMassage[key]}
                  </li>
                );
              }
              return null;
            })}
          </ul>
          <input type="submit" value="Submit" />
          <button className={styles.buttonReset} onClick={resetForm}>
            Reset
          </button>
        </form>
      </div>
    </>
  );
}
