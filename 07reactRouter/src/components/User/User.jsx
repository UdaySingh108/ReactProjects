import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div>User:{userid}</div>
  )
}
// this is used to get dynamic data for exmple differen data is accessed for different ser in facebook /twitter etc but other thins remain same 
export default User