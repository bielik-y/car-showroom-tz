import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from 'pages/Home'
import Vehicles from 'pages/Vehicles'
import NotFound from 'pages/NotFound'
import { VehicleProvider } from 'context/VehicleContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: '/vehicles/:vehicleId',
    element: <Vehicles />
  }
])

function App() {
  return (
    <VehicleProvider>
      <RouterProvider router={router} />
    </VehicleProvider>
  )
}

export default App
