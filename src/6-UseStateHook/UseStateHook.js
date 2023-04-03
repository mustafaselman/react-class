import React from 'react'
import { useState } from 'react'

const UseStateHook = () => {

    const [color,setColor] = useState("white")

    const [car,setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    })
    const updateColor = () => {
        setCar(previousState => {
            return {...previousState, color: "pink"}
        })
    }
  return (

    <div>
        <h1>My favourite color is {color} !</h1>
        <button type="button" onClick={()=> setColor("blue")}>blue</button>

        <h1>My {car.brand} </h1>
        <p>Its a {car.color} {car.model} from {car.year} </p>
        <button type="button" onClick={updateColor}>Pink</button>
    </div>

  )
}

export default UseStateHook