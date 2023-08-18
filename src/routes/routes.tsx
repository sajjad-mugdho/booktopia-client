import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../pages/Home";
import BookPage from "../pages/BookPage";
import SignUpPages from "../pages/SignUpPages";
import LoginPage from "../pages/LoginPage";
import AddBook from "../pages/AddBook";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/books",
        element: <BookPage></BookPage>,
      },

      {
        path: "/book-details",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/add-books",
        element: <AddBook></AddBook>,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignUpPages></SignUpPages>,
  },
]);

export default routes;
