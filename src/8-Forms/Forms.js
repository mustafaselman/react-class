import React from 'react'
import {useState} from "react"
import MyFormik from './FormikYup/MyFormik'

const Forms = () => {

    // const [name,setName] = useState("")
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert(`The name you entered was : ${name}`)
    // }
    // const [inputs,setInputs] = useState({})

    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setInputs((values) => ({...values, [name]:value}))
    // }
    // const handleSubmit2 = (event) => {
    //     event.preventDefault();
    //     console.log(inputs)
    // }
    // const [textarea,setTextarea] = useState("burası bir textarea içeriğidir")
    // const handleChange =(event) => {
    //     setTextarea(event.target.value)
    // }
    // const [myCar,setMyCar] = useState("Volvo")
    // const handleChange = (event)=> {
    //     setMyCar(event.target.value)
    // }
  return (
    <div>
        {/* <form onSubmit={handleSubmit}>
            <label>Enter your name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="submit" />
        </form> */}
        {/* <form onSubmit={handleSubmit2}>
            <label>
                Enter your name:
            </label>
            <input
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
            />
            <br/>
            <label>
                Enter your age:
            </label>
            <input
                type="number"
                name="age"
                value={inputs.age || 0}
                onChange={handleChange}
            />
            <input type="submit" />
        </form> */}
        {/* <textarea value={textarea} onChange={handleChange}/> */}
        {/* <form>
            <select value={myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </form> */}
        <MyFormik />
    </div>
  )
}

export default Forms