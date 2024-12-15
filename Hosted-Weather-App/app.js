const request = require('postman-request');
const geocode = require('../utils/geocode');
const forecast = require('../utils/forecast');
const url = 'https://api.weatherstack.com/current?access_key=42dbd0af240c24715cebe41186164b6f&query=37.8267,-122.4233&units=f'

const address= process.argv[2];
 //error handling
console.log(process.argv)

if(!address){
  console.log('please provide an address')
}else{
  geocode(address,(error,{latitude, longitude, location}= {})=>{
    if(error){
     return  console.log(error)
    }
  
  forecast(latitude, longitude, (error, forecastData) => {
    if(error){
      return console.log(error)
    }
  
    console.log(location)
    console.log(forecastData)
  })
  })

}





