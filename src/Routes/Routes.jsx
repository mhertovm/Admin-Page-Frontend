import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import Layout from "../Layouts/Layout"
import Admin from "../pages/Admin/Admin"
import User from "../pages/User/User"
import Home from "../pages/Home/Home"
import Productcrud from "../pages/Admin/Productcrud/Productcrud";
import Categorycrud from "../pages/Admin/Categorycrud/Categorycrud";


function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Home />} />
        <Route element={<Admin />}>
          <Route path="/productcrud" element={<Productcrud />}/>
          <Route path="/categorycrud" element={<Categorycrud />}/>
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRoutes