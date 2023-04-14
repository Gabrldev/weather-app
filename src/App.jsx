import React, { useState } from 'react'
import axios from 'axios'
import Cards from './components/Cards'
import toast, { Toaster } from 'react-hot-toast'
import Form from './components/Form'

function App () {
  const API_KEY = '4ae7f5a0f05fdcc2bb3b0e3242ed4bf0'
  const URL = 'https://api.openweathermap.org/data/2.5/weather'
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState([])

  const handleCity = (e) => {
    setCity(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (city === '') {
      const notify = () => toast.error('debes ingresar una ciudad')
      notify()
    }
    if (
      weather.find((item) => item.name.toLowerCase() === city.toLowerCase())
    ) {
      const notify = () => toast.error('La ciudad ya se encuentra en la lista')
      notify()
    } else {
      try {
        const res = await axios.get(URL, {
          params: {
            q: city,
            appid: API_KEY,
            units: 'metric'
          }
        })
        setWeather((prev) => [...prev, res.data])
        setCity('')
      } catch (error) {
        if (error.response.status === 404) {
          const notify = () => toast.error('La ciudad no existe')
          notify()
        }
      }
    }
  }

  const closeCard = (name) => {
    const newWeather = weather.filter((item) => item.name !== name)
    setWeather(newWeather)
  }
  return (
    <div className='h-screen w-screen text-white py-[92px] px-24'>
      <Toaster />
      <Form handleSubmit={handleSubmit} city={city} handleCity={handleCity} />
      <Cards weather={weather} close={closeCard} />
    </div>
  )
}

export default App
