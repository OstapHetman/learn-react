import React from 'react'
import { NavLink } from 'react-router-dom'

const SignoutLinks = () => {
    return (
       <ul className="right">
           <li>
               <NavLink to="/signup">Signup</NavLink>
           </li>
           <li>
               <NavLink to="/signin">Signin</NavLink>
           </li>
       </ul>
    )
}

export default SignoutLinks;