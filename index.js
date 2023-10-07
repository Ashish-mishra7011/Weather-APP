const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5e27c393edmsh8e64cde901dd702p1760a0jsn78716e083f67',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
// report of all cities
const getweather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err))
}
submit.addEventListener("click", (e) => {
    e.preventDefault()
    getweather(city.value)

})
getweather("Delhi")
    // report of bangalore
const getweather2 = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            temp1.innerHTML = response.temp
            feels_like1.innerHTML = response.feels_like
            humidity1.innerHTML = response.humidity
            min_temp1.innerHTML = response.min_temp
            max_temp1.innerHTML = response.max_temp
            wind_speed1.innerHTML = response.wind_speed
            wind_degrees1.innerHTML = response.wind_degrees
            sunrise1.innerHTML = response.sunrise
            sunset1.innerHTML = response.sunset
        })
        .catch(err => console.error(err))
}
getweather2()
    // report of mumbai
const getweather3 = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            temp3.innerHTML = response.temp
            feels_like3.innerHTML = response.feels_like
            humidity3.innerHTML = response.humidity
            min_temp3.innerHTML = response.min_temp
            max_temp3.innerHTML = response.max_temp
            wind_speed3.innerHTML = response.wind_speed
            wind_degrees3.innerHTML = response.wind_degrees
            sunrise3.innerHTML = response.sunrise
            sunset3.innerHTML = response.sunset
        })
        .catch(err => console.error(err))
}
getweather3()
    // report of mumbai
const getweather4 = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            temp4.innerHTML = response.temp
            feels_like4.innerHTML = response.feels_like
            humidity4.innerHTML = response.humidity
            min_temp4.innerHTML = response.min_temp
            max_temp4.innerHTML = response.max_temp
            wind_speed4.innerHTML = response.wind_speed
            wind_degrees4.innerHTML = response.wind_degrees
            sunrise4.innerHTML = response.sunrise
            sunset4.innerHTML = response.sunset
        })
        .catch(err => console.error(err))
}
getweather4()
    // report of Goa 
const getweather5 = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Goa', options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            temp5.innerHTML = response.temp
            feels_like5.innerHTML = response.feels_like
            humidity5.innerHTML = response.humidity
            min_temp5.innerHTML = response.min_temp
            max_temp5.innerHTML = response.max_temp
            wind_speed5.innerHTML = response.wind_speed
            wind_degrees5.innerHTML = response.wind_degrees
            sunrise5.innerHTML = response.sunrise
            sunset5.innerHTML = response.sunset
        })
        .catch(err => console.error(err))
}
getweather5()