import { Link , useRouteError} from "react-router-dom"
import image from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'
function Error() {
  const error= useRouteError();
  console.log(error)

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={image} alt="not found" className="not-found" />
          <h1>404</h1>
          <h3>Page Not Found</h3>
               <Link to="/dashboard">Back to dashboard</Link>
        </div>
      </Wrapper>
    )} else {
      return (
        <Wrapper>
          <h3>Try again later</h3>
        </Wrapper>
      )
    }
  }





export default Error
