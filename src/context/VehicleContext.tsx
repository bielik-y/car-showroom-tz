import { createContext, useEffect, useState } from 'react'
import { Vehicle } from 'types'
import { getVehicles } from 'utils/requests'

interface VehicleContextType {
  vehicles?: Vehicle[]
}

export const VehicleContext = createContext<VehicleContextType | null>(null)

interface VehiclesProviderProps {
  children: React.ReactNode
}

export function VehicleProvider({ children }: VehiclesProviderProps) {
  const [vehicles, setVehicles] = useState<Vehicle[]>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getVehicles()
        setVehicles(result.data.products)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])

  return <VehicleContext.Provider value={{ vehicles }}>{children}</VehicleContext.Provider>
}
