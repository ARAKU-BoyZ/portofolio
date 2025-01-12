import { NavLink } from "react-router-dom"


const NavlinkApp = (props) => {
  return (
    <NavLink
    to={props.to}
    className={({ isActive }) =>
      `${isActive ? "bg-gray-900 text-white block" : "text-gray-300 hover:bg-gray-700 hover:text-white"} block rounded-md px-3 py-2`
    }
  >
    {props.menu}
  </NavLink>
  )
}

export default NavlinkApp