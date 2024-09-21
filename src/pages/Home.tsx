import Container from 'components/layout/Container'
import SearchBar from 'components/searchbar/SearchBar'
import Title from 'components/ui/Title'
import VehicleList from 'components/vehicle/VehicleList'
import { VehicleContext } from 'context/VehicleContext'
import { useContext, useEffect, useState } from 'react'
import { Vehicle } from 'types'

function Home() {
  const vehicleContext = useContext(VehicleContext)
  const vehicles = vehicleContext?.vehicles

  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>()
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')

  useEffect(() => {
    if (vehicles) setFilteredVehicles(vehicleContext.vehicles)
  }, [vehicleContext])

  useEffect(() => {
    filterAndSearchVehicles()
  }, [searchTerm, selectedTags])

  function filterAndSearchVehicles() {
    if (vehicles) {
      // Filter by tags
      let filtered = vehicles.filter(
        (vehicle) =>
          selectedTags.length === 0 || selectedTags.every((tag) => vehicle.tags.includes(tag))
      )
      // Search by title
      if (searchTerm) {
        filtered = filtered.filter((vehicle) =>
          vehicle.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
        )
      }
      setFilteredVehicles(filtered)
    }
  }

  function handleTagChange(tag: string) {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((selectedTag) => selectedTag !== tag)
        : [...prevTags, tag]
    )
  }

  function handleSearchTermChange(title: string) {
    setSearchTerm(title)
  }

  return (
    <Container>
      <Title>Car Showroom</Title>
      <SearchBar
        selectedTags={selectedTags}
        onSearchTermChange={handleSearchTermChange}
        onTagChange={handleTagChange}
      />
      {!filteredVehicles ? <p>Loading...</p> : <VehicleList vehicles={filteredVehicles} />}
    </Container>
  )
}

export default Home
