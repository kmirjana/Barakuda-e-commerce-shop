import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { HomeLayout,Register,Login,DashboardLayout ,LandingPage,Error,AddProduct,Stats,AllProducts,Profile,Admin} from "./pages";


const router = createBrowserRouter([

{
  path: "/",
 element: <HomeLayout />,
 errorElement: <Error />,
 children: [
  {
    index:true,
    element: <LandingPage />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "register",
    element: <Register />
  },

{
  path: "/dashboard",
 element: <DashboardLayout />,
 children: [
  {
    path: "stats",
    element: <Stats />
  },
  {
    index: "true",
    element: <AddProduct />
  },
  {
    path: "all-products",
    element: <AllProducts />
  },
  {
    path: "profile",
    element: <Profile />
  },
  {
    path: "admin",
    element: <Admin />
  },]
},


]
}]);
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
export default App
