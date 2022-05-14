import { ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://my-recipe.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers : {
    'x-hasura-admin-secret' : 'BeukjsCbXh4qsSOfcMUEcAlTbJjTqVGGSwvqaYACAuRq5XASLmKK7qcltMSJ1NQf'
  }
});

export default client 
