import { createBrowserRouter, RouterProvider } from "react-router";
import SideBar from "../../components/Sidebar/SideBar";

const router = createBrowserRouter([
    
  {
    path: "/",
    element: <SideBar/>,
  },
 

  {
    path: "/candidats",
    children: [
      // {
      //   index: true,
      //   element: <ProjectList />,
      // },
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
