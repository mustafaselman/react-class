import React from 'react'
import { useFormik } from 'formik'
import validations from "./validations"

const MyFormik = () => {
    const { handleSubmit, handleChange, errors, touched, handleBlur} = useFormik({
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
        },
        validationSchema: validations
    })
  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChange}
            onBlur={handleBlur}
        />
        <br />
        {errors.name && touched.name && <div>{errors.name}</div>}
        <input
            type="text"
            name="email"
            placeholder="email"
            onChange={handleChange}
            onBlur={handleBlur}
        />
        <br />
        {errors.email && touched.email && <div>{errors.email}</div>}
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
        <input 
        name="password" 
        onChange={handleChange}
        onBlur={handleBlur}
        />
        <br />
        {errors.password && touched.password && <div>{errors.password}</div>}
        <label>ConfirmPassword</label>
        <br/>
        <input 
        name="confirmPassword" 
        onChange={handleChange}
        onBlur={handleBlur}
        />
        <br />
        {errors.confirmPassword && touched.confirmPassword && <div>{errors.confirmPassword}</div>}
        <br/>
        <button type="submit">Kayıt ol</button>
    </form>
  )
}

export default MyFormik