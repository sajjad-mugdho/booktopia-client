import { ToastContainer } from "react-toastify";
import "./App.css";
import MainLayouts from "./layouts/MainLayouts";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster></Toaster>
      <ToastContainer />

      <MainLayouts />
    </>
  );
}

export default App;
