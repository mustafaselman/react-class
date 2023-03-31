import React from 'react'

const Car = (props) => {
    //birden fazla props tanımlıysa {props1,props2} şeklinde çağrılabilir
  return (
    <div>
        {/* <h2>I am a { props.brand }!</h2>; */}
        {/* <h2>I am a { props.brand.name } and { props.brand.model }</h2> */}
        <h2>{props.definition.myPerson.name}</h2>
        <h2>{props.definition.myPerson.age}</h2>
        <h2>{props.definition.myPerson.location}</h2>
        <h2>{props.definition.myCar.carName}</h2>
        <h2>{props.definition.myCar.carAge}</h2>
        <h2>{props.definition.myCar.model}</h2>
    </div>
  )
}

export default Car