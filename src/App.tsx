import "react-toastify/dist/ReactToastify.css";
import "simplebar-react/dist/simplebar.min.css";

import { useRoutes } from "react-router-dom";

import { Bounce, ToastContainer } from "react-toastify";
import AppRouter from "./router/AppRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const routing = useRoutes(AppRouter);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {routing}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          limit={3}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
