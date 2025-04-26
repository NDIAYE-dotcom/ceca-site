import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Services from "./pages/services/Services"
import Formation from "./pages/formation/Formation"
import Contact from "./pages/contact/Contact"
import AppLayout from "./components/AppLayout"
import { createBrowserRouter, RouterProvider } from "react-router"

  const App = () => {
  const router = createBrowserRouter ([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
       path: '/',
       element: <Home/>,
        },

        {
          path: '/about',
          element: <About/>,
           },

           {
            path: '/services',
            element: <Services/>,
             },

             {
              path: '/formation',
              element: <Formation/>,
               },

               {
                path: '/contact',
                element: <Contact/>,
                 },

      ],
    },


  ]);

  return < RouterProvider router={router}/>;

}; 
export default App