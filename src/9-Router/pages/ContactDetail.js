import React from 'react'
import {useEffect,useState} from "react"
import {Link, useParams, useLocation} from "react-router-dom"

const ContactDetail = () => {
    const {id} = useParams();
    // const [user,setUser]= useState(null);

    const location = useLocation();
    const [user,setUser] = useState(location.state[Number(id)-1])

    // useEffect(()=> {fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    // .then((res)=> res.json())
    // .then((data)=>setUser(data))
    // },[id])
    
    useEffect(()=>{
        setUser(location.state[Number(id)-1])
    },[id]);

  return (
    <div>
        <h2>UserDetail</h2>
        {
            user && (
                <>
                <pre>{JSON.stringify(user,null,2)}</pre>
                <p>{user.email}</p>
                </>
            )
        }
        {/* <Link to={`/contact/${Number(id)-1}`}>Önceki kullanıcı</Link>
        &emsp;
        <Link to={`/contact/${Number(id)+1}`}>Sonraki kullanıcı</Link> */}
        <Link to={`/contact/${Number(id)-1}`} state={location.state}>Önceki kullanıcı</Link>
        &emsp;
        <Link to={`/contact/${Number(id)+1}`} state={location.state}>Sonraki kullanıcı</Link>
    </div>
  )
}

export default ContactDetail