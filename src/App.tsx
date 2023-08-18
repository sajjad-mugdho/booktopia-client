import "./App.css";
import MainLayouts from "./layouts/MainLayouts";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster></Toaster>
      <MainLayouts />
    </>
  );
}

export default App;
