import { createBrowserRouter, RouterProvider } from "react-router";
// import SideBar from "../../components/Sidebar/SideBar";
import Create from "../../Pages/Create/Create";
import List from "../../Pages/List/List";
import Edit from "../../Pages/Edit/Edit";
import Show from "../../Pages/Show/Show";
import Accueil from "../../components/Accueil/Accueil";

const router = createBrowserRouter([
    
  {
    path: "/",
    element: <Accueil/>,
  },
 

  {
    path: "/candidats",
    children: [
      {
        index: true,
        element: <Create />,
      },
      {
        path: "List",
        element: <List />,
      },

      {
        path: ":id/edit",
        element: <Edit />,
      },
      
      {
        path: ":id/show",
        element: <Show />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
