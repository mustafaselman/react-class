import React from 'react'
import { useFormik } from 'formik'

const MyFormik = () => {
    const { handleSubmit, handleChange} = useFormik({
        initialValues: {
            name: "",
            email: "",
            gender: "",
            hobies: [],
            country: "tr",
            password: "",
            confirmPassword: "",
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })
  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChange}
        />
        <br />
        <input
            type="text"
            name="email"
            placeholder="email"
            onChange={handleChange}
        />
        <br />

        <label>Male</label>
        <input 
            type="radio" 
            name="gender"
            value="male"
            onChange={handleChange} 
        />
        <label>Female</label>
        <input 
            type="radio" 
            name="gender"
            value="female"
            onChange={handleChange} 
        />
        <br />
        <label>Football</label>
        <input
            type="checkbox"
            name="hobies"
            value="Football"
            onChange={handleChange}
        />
        <label>Cinema</label>
        <input
            type="checkbox"
            name="hobies"
            value="Cinema"
            onChange={handleChange}
        />
        <label>Photography</label>
        <input
            type="checkbox"
            name="hobies"
            value="Photography"
            onChange={handleChange}
        />
        <br/>
        <select name="country" onChange={handleChange}>
            <option value="tr">Turkey</option>
            <option value="en">England</option>
            <option value="usa">USA</option>
        </select>
        <br />
        <label>Password</label>
        <br/>
        <input name="password" onChange={handleChange}/>
        <br />
        <label>ConfirmPassword</label>
        <br/>
        <input name="confirmPassword" onChange={handleChange}/>
        <br />

        <br/>
        <button type="submit">Kayıt ol</button>
    </form>
  )
}

export default MyFormik