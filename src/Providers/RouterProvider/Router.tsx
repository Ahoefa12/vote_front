import { createBrowserRouter, RouterProvider } from "react-router";
// import SideBar from "../../components/Sidebar/SideBar";
import Create from "../../Pages/Create/Create";
import List from "../../Pages/List/List";

const router = createBrowserRouter([
    
  {
    path: "/",
    element: <List/>,
  },
 

  {
    path: "/candidats",
    children: [
      {
        index: true,
        element: <Create />,
      },
      // {
      //   path: "create",
      //   element: <ProjectCreate />,
      // },

      // {
      //   path: ":id/edit",
      //   element: <ProjectEdit />,
      // },
      
      // {
      //   path: ":id/show",
      //   element: <ProjectShow />,
      // },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
