import axios from 'axios'
import React from 'react'
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

const Contact = () => {

    const [users,setUsers] = useState([])

    // useEffect(()=> {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((res) => res.json())
    //     .then((data)=> setUsers(data))
    // },[])

    useEffect(()=> {
        axios("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers(res.data))
    },[])

  return (
    <div>
        <h2>Contact</h2>
        {/* <ul>
            {users.map((user)=> <li key={user.id}>{user.name}</li>)}
        </ul> */}
        <ul>
            {users.map((user)=> (
                <li key={user.id}>
                    <Link to={`${user.id}`} state={users}>{user.name}</Link>
                </li>
            ))}
        </ul>
    </div>
    
  )
}

export default Contact