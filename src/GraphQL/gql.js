import { gql } from "@apollo/client";

export const GETbyid = gql`
query MyQuery($id: Int = 10) {
  recipe_by_pk(id: $id) {
    creator_name
    food_name
    id
    id_category
    recipe
    upload_image
  }
}
`;

export const EDIT=gql`
mutation MyMutation($id: Int = 10, $creator_name: String = "", $food_name: String = "", $id_category: Int = 10, $recipe: String = "", $upload_image: String = "") {
  update_recipe_by_pk(pk_columns: {id: $id}, _set: {creator_name: $creator_name, food_name: $food_name, id_category: $id_category, recipe: $recipe, upload_image: $upload_image}) {
    id
  }
}`

export const GET=gql`
query MyQuery($_eq: String = "") {
  recipe(where: {creator_name: {_eq: $_eq}}) {
    creator_name
    food_name
    id
    id_category
    recipe
    upload_image
  }
}
`

export const GETall=gql`
query geTall {
  recipe {
    creator_name
    food_name
    recipe
    id_category
    upload_image
    id
  }
}
`
export const deleteAll=gql`
mutation MyMutation($id:Int!) {
  delete_recipe_by_pk(id: $id) {
    creator_name
    food_name
    recipe
    upload_image
    id_category
    id
  }
}
`

export const GETMyRecipe = gql`
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
export const DELETE = gql`
  mutation MyMutation($id: Int!) {
    delete_list_recipe_by_pk(id: $id) {
      id
    }
  }
`;

export const INSERT = gql`
 mutation MyMutation($creator_name: String!, $food_name: String!, $id_category: Int!, $recipe: String!, $upload_image: String!) {
  insert_recipe(objects: {creator_name: $creator_name, food_name: $food_name, recipe: $recipe, upload_image: $upload_image, id_category: $id_category}) {
    affected_rows
  }
}
`;
export const EDITdata = gql`
  mutation MyMutation(
    $id: Int!
    $creator_name: String!
    $food_name: String!
    $id_category: Int!
    $recipe: String!
    $upload_image: String!
  ) {
    update_list_recipe_by_pk(
      pk_columns: { id: $id }
      _set: { creator_name: $creator_name, food_name: $food_name, id_category: $id_category, recipe: $recipe, upload_image: $upload_image }
    ) {
      id
    }
  }
`;