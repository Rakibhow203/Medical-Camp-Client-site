import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";

import { routers } from './Routes/Routes.jsx';
import AuthProvider from './Component/AuthProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={routers} />
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
