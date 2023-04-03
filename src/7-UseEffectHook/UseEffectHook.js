import React from 'react'
import {useEffect,useState} from "react"

const UseEffectHook = () => {

    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);
    // useEffect(()=>{
    //     setTimeout(() => {
    //         setCount((count) => count + 1)
    //     },1000);
    // })

    // useEffect(()=>{
    //     setTimeout(() => {
    //         setCount((count) => count + 1)
    //     },1000);
    // },[])

    // useEffect(()=>{
    //     setTimeout(() => {
    //         setCount((count) => count + 1)
    //     },1000);
    // },[count])
    // useEffect(()=>{
    //     setTimeout(() => {
    //         setCount2((count) => count + 1)
    //     },1000);
    // },[])

    useEffect(() => {
        let timer = setInterval(()=> {
            setCount((count)=> count + 1)
        },1000)
        return () => clearInterval(timer)
    },[count])
    useEffect(()=>{
        setInterval(()=> {
            setCount2((count)=> count + 1)
        },1000)
    },[count2])

  return (
    <div>
        <h1>I've rendered {count} times, First Count</h1>
        <h1>I've rendered {count2} times, Second Count</h1>
    </div>
  )
}

export default UseEffectHook