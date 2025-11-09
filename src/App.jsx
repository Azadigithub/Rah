import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Login from './Pages/Login'
import Landing from './Pages/Landing'
import { useRoutes } from 'react-router-dom'

const routes = [
  {path:"/" ,element:<Landing/>},
  {path:"/Login" ,element:<Login/>},
]
function App() {
  const router = useRoutes(routes);

  return (
    <div>

      {router}
    </div>
   

  )
}

export default App
