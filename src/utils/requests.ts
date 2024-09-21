import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL

export async function getVehicles() {
  const result = await axios.get(`${apiUrl}/products/category/vehicle`)
  return result
}
