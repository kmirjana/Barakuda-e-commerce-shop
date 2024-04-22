import {  Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "../components/Logo"
import FormRow from "../components/Form";
function Register() {
  return (

    <Wrapper>
      <form action="" className="form">
        <Logo></Logo>
        <h4>Register</h4>
        <FormRow type="text" name="name"  />
        <FormRow type="text" name="lastName"  labelText="last name" />
        <FormRow type="text" name="location" />
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password"/>

        <button type="submit" className="btn btn-block">submit</button>
        <p>Already a mamber?</p>
        <Link to="/login" className="member-btn">Login</Link>
      </form>
    </Wrapper>
  )
}

export default Register
