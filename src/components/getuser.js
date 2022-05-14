import React, { useEffect , useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { LOAD_USERS } from '../GraphQL/query'

function getuser() {
const {error, loading, data } = useQuery (LOAD_USERS);

UseEffect(() => {
    console.log(data);
}, 
    [data]);
 
  return (
    <div>getuser</div>
  )
}

export default getuser