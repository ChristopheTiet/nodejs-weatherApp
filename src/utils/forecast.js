const axios = require('axios')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current'
    const access_key = '4a2789ab906ba178d214f405f1fd7f28'
    axios.get(url, {
        params: {
            access_key, // <=> ES6: access_key: access_key,
            query: longitude+','+latitude
        }
        
    })
    .then(({data}) => { // destructuring response
        if (data.error) {
            callback(data.error.info, undefined)
        } else {
            callback(undefined, {
                location: data.location.name,
                temperature: data.current.temperature
            })
        }
    })
    .catch((error) =>{
        callback('Impossible de se connecter à Weatherstack', undefined)
    })
}

module.exports = forecast

// const url = 'http://api.weatherstack.com/current?access_key=4a2789ab906ba178d214f405f1fd7f28&query=43.60444,1.44194'

// axios.get(url)
// .then((response) => {
//     if (response.data.error) {
//         console.log(response.data.error.info)
//     } else {
//     console.log(response.data.location.name + ' : '+response.data.current.temperature+ ' °C')
//     }
// })
// .catch((error) => {
//     console.log("Impossible de se connecter à Weatherstack")
// })
