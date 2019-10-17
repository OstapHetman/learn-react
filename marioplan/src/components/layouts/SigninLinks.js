import React from 'react'
import { NavLink } from 'react-router-dom'

const SigninLinks = () => {
    return (
       <ul className="right">
           <li>
               <NavLink to="/">New Project</NavLink>
           </li>
           <li>
               <NavLink to="/">Log out</NavLink>
           </li>
           <li>
               <NavLink to="/" className="btn btn-floating pink lighten-1">OH</NavLink>
           </li>
       </ul>
    )
}

export default SigninLinks;