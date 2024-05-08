import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import TodoPage from "../pages/TodoPage";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/todo", element: <TodoPage /> },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
