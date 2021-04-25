const API_KEY = '84dedf050f9a161ed3558e55b7fd74fd'
const axios = require('axios').default
let hasError = false

export const getWeatherFromApi = async (cityName) => {
  hasError = false
  const res = {}

  const coord = await getCityCoord(cityName)
  const weather = await getCoordWeather(coord)
  res.name = cityName
  res.weather = weather
  res.hasError = hasError
  saveToSessionStorage(cityName)
  return res
}

const getCoordWeather = (coord) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=minutely&appid=${API_KEY}&units=metric&lang=ru`
    )
    .then((r) => r.data)
    .catch(() => (hasError = true))
}

const getCityCoord = (cityName) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=ru&appid=${API_KEY}`
    )
    .then((r) => r.data.coord)
    .catch(() => (hasError = true))
}

function saveToSessionStorage(cityName) {
  sessionStorage.setItem('cityName', cityName)
}
