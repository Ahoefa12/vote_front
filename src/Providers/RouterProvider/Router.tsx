import { createBrowserRouter, RouterProvider } from "react-router";
// import SideBar from "../../components/Sidebar/SideBar";
import Create from "../../Pages/Create/Create";

const router = createBrowserRouter([
    
  {
    path: "/",
    element: <Create/>,
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
