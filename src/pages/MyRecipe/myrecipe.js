import React from 'react';
import { gql , useQuery } from '@apollo/client'

    const GetMyRecipe = gql`
  query MyQuery {
  recipe_by_pk(id: 10) {
    creator_name
    food_name
    id_category
    recipe
    upload_image
  }
}
`
function MyRecipe(){
  const{data, loading, error} = useQuery(GetMyRecipe)
  if(data){
    
  }
  if(error){
    console.log(error)
    return null
  }
  if(loading){

  }

}

export default MyRecipe;