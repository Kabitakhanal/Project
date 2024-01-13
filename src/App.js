import{
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register"
import Write from "./pages/Write"
import Single from "./pages/Single"
import Login from "./pages/Login"
import Home from "./pages/Home"
import About from "./pages/About";
import Category from "./pages/Category";
import Navbar from "./components/Navbar";

import NewsForm from "./pages/writenews";
import Footer from "./components/Footer";
import CardContainer from "./pages/Newhome";
import Finalhome from "./pages/Finalhome";

import "./style.scss"

const Layout =()=>{
 return(
   <>
   <Navbar/>
   <Outlet/>
   <Footer/>
   </>
 );
};

const router = createBrowserRouter([
 {
   path: "/",
   element: <Layout/>,
   children:[
     {
       path:"/",
       element: <Home/>
     },
     {
       path: "/write",
       element: <Write/>
     },
     {
       path: "/post/:id",
       element: <Single/>
     },
     {
      path:"/category/:id",
      element:<Category/>
     },
     {
      path:"/about",
      element:<About/>
     },
    {
      path:"/form",
      element:<NewsForm/>
    },
    {
      path:"/newhome",
      element:<CardContainer/>
    },
    {
      path:"/finalhome",
      element:<Finalhome/>
    }
  

   ]
 },
 {
   path: "/register",
   element: <Register/>
 },
 {
   path: "/login",
   element: <Login/>
 },
 {
   path: "/write",
   element: <Write/>
 },
 {
   path: "/single",
   element: <Single/>
 },
 {
  path:"/form",
  element:<NewsForm/>
 }
 
 
]);
       
function App() {
 return (
   <div className="app">
     <div className="container">
    <RouterProvider router={router}/>
    </div>
 
   </div>
 );

 }

export default App;
