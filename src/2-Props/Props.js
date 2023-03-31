import React from 'react'
import Car from "./Car"

const Props = () => {
    // const myElement = <Car brand="Ford"/>

    // let variable = "Mustang"
    // const myElement = <Car brand={variable}/>

    // const carInfo = { name: "Ford", model: "Mustang"}
    // const myElement = <Car brand={carInfo}/>

    const myPerson = {
        name: "mustafa",
        age : "25",
        location: "turkey"
    }
    const myCar = {
        carName : "ford",
        carAge: 5,
        model: "mustang"
    }
    const myProps = {
        myPerson,
        myCar
    }
    const myElement = <Car definition = { myProps } />

  return (
    <div>{myElement}</div>
  )
}

export default Props