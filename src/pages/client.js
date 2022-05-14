import { gql } from "@apollo/client";

const GETMyRecipe = gql`
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
const GETbyid = gql`
  query MyQuery($id: Int!) {
    list_recipe(where: { id: { _eq: $id } }) {
        creator_name
        food_name
        id_category
        recipe
        upload_image
    }
  }
`;
const DELETE = gql`
  mutation MyMutation($id: Int!) {
    delete_list_recipe_by_pk(id: $id) {
      id
    }
  }
`;

const INSERT = gql`
  mutation MyMutation($creator_name: String!, $food_name: String!, $id_category: Int!, $recipe: String!, $upload_image: String!) {
    insert_list_recipe(
      objects: { creator_name: $creator_name, food_name: $food_name, id_category: $id_category, recipe: $recipe, upload_image: $upload_image }
    ) {
      returning {
        id
      }
    }
  }
`;
const EDITdata = gql`
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
export { GETMyRecipe, GETbyid, DELETE, INSERT, EDITdata };