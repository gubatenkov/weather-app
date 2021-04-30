import React from 'react'
import './App.css'
import Form from './components/form'
import Header from './components/header'
import Weather from './components/weather'

const API_KEY = 'e0a267c060f6261b48c8b05c32dff1ba'

class App extends React.Component {

  // Create state object
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    wind: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value

    // Making ajax query on server to get a weather data 
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    const data = await response.json()

    if ( data.name !== undefined ) {
      // Sunrise & Sunset random Date in HH : MM format
      function  secToTIme(seconds) {
        return new Date(seconds).toLocaleString()
      }

      function getTime(min, max) {
        return Math.floor(Math.random() * (max - min) + min) + ':' + Math.floor(Math.random() * (59 - 10) + 10)
      }

      let sunRiseTime =  getTime(5, 7)
      let sunSetTime =  getTime(17, 20)

      // Temp in C
      let temp = data.main.temp
      let tempC = Math.floor(temp - 273.15)

      // Writing weather data to state object
      this.setState({
        temp: tempC,
        city: data.name,
        country: data.sys.country,
        // sunrise: secToTIme(data.sys.sunrise),
        sunrise: sunRiseTime,
        // sunset: secToTIme(data.sys.sunset),
        sunset: sunSetTime,
        wind: data.wind.speed,
        error: 'error'
      })
    } else {
      let form = document.querySelector('.form__city')
      form.value = ''
    }
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Form 
          weatherMethod={this.getWeather}
        />
        <Weather 
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          wind={this.state.wind}
          error={this.state.error}
        />
      </div>
    )
  }
}

export default App;
