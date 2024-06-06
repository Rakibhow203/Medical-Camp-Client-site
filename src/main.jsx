import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";

import { routers } from './Routes/Routes.jsx';
import AuthProvider from './Component/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';
const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='max-w-screen-xl mx-auto'>
        <HelmetProvider>

          <QueryClientProvider client={queryClient}>
            <RouterProvider router={routers} />
          </QueryClientProvider>
        </HelmetProvider>
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
