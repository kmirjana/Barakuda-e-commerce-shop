import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <Wrapper>
        <nav>
          <Logo></Logo>
        </nav>
        <div className="container page">
          <div className="info">
            <h1>barakuda</h1>
            <p>E commerce page for seafood delivery</p>
            <Link to="/register" className="btn register-link">
              Get Started
            </Link>
            <Link to="/login" className="btn">
              Login /User
            </Link>{" "}
          </div>
          <div>
            <img src={main} alt="barakuda" className="img main-img" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default LandingPage;
