import React, { useState, useRef } from 'react';
import styles from "./form.module.css"

export default function NameForm() {
  const baseData = {
    creatorName: "",
    food: "",
    category: "",
    image: "",
    recipe: ""
  }
  const baseError = {
    creatorName: "",
  }

  const image = useRef('')
  const [data, setData] = useState(baseData);
  const [errorMassage, setErrorMassage] = useState(baseError);
  const regexNama = /^[A-Za-z ]*$/

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "creatorName") {
      if (!regexNama.test(value)) {
        setErrorMassage({...errorMassage, [name]: 'Creator Name must be Letter'})
      } else {
        setErrorMassage({...errorMassage, [name]: ''})
      }
    }
    
    setData({...data, [name]: value});
  };

  const handleSubmit = e => {
    if (errorMassage.creatorName !== '') {
      console.log("HEREEE")
      alert(`Invalid Registrant Data`)
    } else {
      console.log("HEREE1")
      alert(`"${data.food}" recipe has been accepted`)
      resetForm()
    }
    e.preventDefault();
  };

  const resetForm = () => {
    setData(baseData);
    image.current.value = '';
    setErrorMassage(baseError);
  }

  return (
    <>
    <h1 style={{"textAlign":"center", "marginTop":"60px", "fontSize":"50px"}}>Add Recipe</h1>
    <form onSubmit={handleSubmit} className={styles.centerForm}>
      <label>
        Creator Name
        <input
          required
          className={styles.input}
          type="text"
          name="creatorName"
          value={data.creatorName}
          onChange={handleChange}
        />
      </label>
      <label>
        Food Name
        <input
          required
          className={styles.input}
          type="text"
          name="food"
          value={data.food}
          onChange={handleChange}
        />
      </label>
      <label>
        Category <br/>
        <select
          required
          type="text"
          name="category"
          value={data.category}
          onChange={handleChange}
        >
        <option disabled value="">Select One</option>
        <option value="indonesian">Indonesian Food</option>
        <option value="western">Western Food</option>
        <option value="asian">Asian Food</option>
        </select>
      </label>
      <label>
        Recipe <br/>
        <textarea
          type="text"
          name="recipe"
          value={data.recipe}
          onChange={handleChange}
        />
      </label>
      <label>
        Upload Image
        <input
          required
          type="file"
          name="image"
          ref={image}
          onChange={handleChange}
        />
      </label>
      <ul>
        {Object.keys(errorMassage).map(key => {
          if (errorMassage[key] !== "") {
            return <li className={styles.errorMassage} key={key}>{errorMassage[key]}</li>
          }
          return null
        })}
      </ul>
      <input type="submit" value="Submit" />
      <button className={styles.buttonReset} onClick={resetForm}>Reset</button>
      </form>
    </>
  );
};