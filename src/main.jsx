import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App'
import PageNotFound from './pages/PageNotFound'
import MainContent from "./Componentes/MainContent/MainContent";
import SobreMim from './pages/SobreMim'
import Projetos from './pages/Projetos'
import Contact from './pages/Contato'
import SobreProjeto from './pages/SobreProjeto'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index:true, element: <MainContent/>},
      {path:'/sobre', element: <SobreMim/>},
      {path:'/projetos', element: <Projetos/>},
      {path:'/contato', element: <Contact/>},
      {path:'/projetos/:id', element: <SobreProjeto/>},
      {path:'*', element: <PageNotFound/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
