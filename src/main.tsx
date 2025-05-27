import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import Spinner from './views/spinner/Spinner.tsx';

createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<Spinner />}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>

)
