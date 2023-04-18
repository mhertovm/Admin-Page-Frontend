import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import Layout from "../Layouts/Layout"
import Admin from "../pages/Admin/Admin"
import User from "../pages/User/User"
import Home from "../pages/Home/Home"


function AppRoutes() {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Layout />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
          <Route path="/home" element={<Home />} />
        </Route>
    </Routes>
  )
}

export default AppRoutes