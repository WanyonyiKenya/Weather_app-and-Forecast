
import './App.css';
import Saerch from './components/Search/Search';
import Currweather from './components/currWeather/CurrWeather';
import ForeCast from './components/foreCast/ForeCast';
import { WEATHER_URL,WEATHER_KEY } from './Apis';
import { useState } from 'react';


function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const[foreCast, setForeCast] = useState(null)

  const handleSearch = (searchData) => {
    const [lat,lon] = searchData.value.split(' ')

    const currWeatherFetch = fetch(`${WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&units=metric`)
    const foreCastFetch = fetch( `${WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&units=metric`)

    Promise.all([currWeatherFetch,foreCastFetch])
    .then (async (response) => {
      const weatherResponse = await response[0].json()
      const foreCastResponse = await response[1].json()

      setCurrentWeather({city:searchData.label, ...weatherResponse})
      setForeCast({city:searchData.label, ...foreCastResponse})

    })
    .catch((err)=>console.log(err))
  }
  console.log(currentWeather)
  console.log(foreCast)


  return (
    <div className="container">
      <Saerch onSearch={handleSearch} />
     {currentWeather && <Currweather data = {currentWeather} /> }
     {foreCast && <ForeCast data = {foreCast} />}
    </div>
  )
}

export default App;
