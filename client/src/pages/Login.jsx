import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import FormRow from "../components/Form"
import Logo from "../components/Logo";

function Login() {
  return (
    <Wrapper>
      <form action="" className="form">
        <Logo></Logo>
        <FormRow type="name" name="name" />
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" required/>
        <button type="submit" className="btn btn-block">Submit</button>
        <p>Not a memeber yet?</p>
        <Link to="/register" className="member-btn">Register</Link>
      </form>
    </Wrapper>
  )
}

export default Login
