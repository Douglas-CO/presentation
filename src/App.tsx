import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // 👈 importante
import Page from "./app/page";

function App() {
  return (
    <>
      <Page />
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
