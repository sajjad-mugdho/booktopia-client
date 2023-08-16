import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Hero from "../components/Hero";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
    ],
  },
]);

export default routes;
