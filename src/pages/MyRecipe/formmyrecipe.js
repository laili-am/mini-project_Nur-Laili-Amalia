import React, { useState, useRef, useEffect } from 'react';
import styles from '../AddRecipe/form.css';
import { GET } from '../../GraphQL/gql';
import { useLazyQuery } from '@apollo/client';
import MyRecipe from './myrecipe';

export default function FormRecipe() {
  const baseData = {
    creatorName: "",
  }
  const baseError = {
    creatorName: "",
  }
  const [getRecipe, { called, loading, data:datarecipe }] = useLazyQuery(GET);
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
      getRecipe({
        variables:{
          _eq:data.creatorName,
        }
      })  
      resetForm()
    }
    e.preventDefault();
  };

  const resetForm = () => {
    setData(baseData);
    setErrorMassage(baseError);
  }

  return (
    <>
    <h1 style={{"textAlign":"center", "marginTop":"60px", "fontSize":"50px", "fontFamily":"Sarala", "color":"#002148"}}>My Recipe</h1>
    <div className='tengah'>
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
    </div>
      <MyRecipe recipe={datarecipe}/>
    </>
  );
};