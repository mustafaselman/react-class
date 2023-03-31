import React from 'react'

const Events = () => {

    // const shoot = () => {
    //     alert("great shot")
    // }

    // const shoot2 = (a) => {
    //     alert(a)
    // }

    const shoot3 = (a,b) => {
        // alert(a)
        // alert(b.type)
        console.log(b.target)
        console.log(b.type)
    }
  return (
    <div>
        {/* <button onClick={shoot}>Take the shot!</button> */}
        {/* <button onClick={() => shoot2("Goal!")}>Take the shot2</button> */}
        <button onClick={(event) => shoot3("Goal!",event)}>Take the shot3</button>
    </div>
  )
}

export default Events