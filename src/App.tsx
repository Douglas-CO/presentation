/* eslint-disable react/react-in-jsx-scope */
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Page from "./app/page";
import { useIsMediaQuery } from "./hooks/useIsMediaQuery";

function App() {
  const isMobile = useIsMediaQuery("sm");
  return (
    <>
      <Page isMobile={!isMobile} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
}

export default App;
