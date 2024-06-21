import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './view/Login/Login.jsx'
import './index.scss'
import Home from './view/Home/Home.jsx'
import Pay from './view/Pay/Pay.jsx'
import Finalizar from './view/FinalizarPagamento/Finalizar.jsx'
import { Produtos_Mock } from './Mock/Produtos.Mock.js' // Corrigido

import { createBrowserRouter, RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/home",
    element: <Home data={Produtos_Mock} />, //Codigo 01 explica(Final deste documento)
  },

  {
    path: "/Pay/:PayId",
    element: <Pay data={Produtos_Mock} />,
  },

  {
    path: "/Finalizar/:FinalizarId",
    element: <Finalizar data={Produtos_Mock} />,
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)


//Codigo 01 = Criamos o documento "Produtos.Mock" como se fosse uma API, e precisamos utilizar as informações deste documento dentro da rota Home