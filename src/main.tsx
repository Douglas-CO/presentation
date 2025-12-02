import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { Suspense } from "react";
import "./index.css";

import App from "./App.tsx";
import { Spinner } from "./views/index.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<Spinner />}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>,
);
