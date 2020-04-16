const axios = require('axios')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json'
    const access_token = 'pk.eyJ1IjoiaXJ3bHoiLCJhIjoiY2s5MWZnMTQ5MGE4dzNkbncza2VhbGVkdiJ9.iFwy3H89igCyHe7_MTzXjg'
    axios.get(url, {
        params: {
            access_token, // <=> access_token: access_token,
            limit: 1
        }
    })
    .then(({data}) => { //destructuring response
        if (data.features.length === 0) {
            callback('Ville non trouvée', undefined)
        } else {
            callback(undefined, {
                latitude: data.features[0].center[0],
                longitude: data.features[0].center[1],
                location: data.features[0].place_name
            })
        }

    })
    .catch((error) => {
        callback('Impossible de se connecter à Géocoding', undefined)
    })
}

module.exports = geocode

// Address -> Lat/Long -> Weather

// const url_geo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Toulouse.json?access_token=pk.eyJ1IjoiaXJ3bHoiLCJhIjoiY2s5MWZnMTQ5MGE4dzNkbncza2VhbGVkdiJ9.iFwy3H89igCyHe7_MTzXjg&limit=1'
// axios.get(url_geo)
// .then((response) => {
//     if (response.data.features.length === 0) {
//         console.log("Ville non trouvée")
//     } else {
//         console.log('Ville : ' + response.data.features[0].place_name + '. Longitude : '+response.data.features[0].center[0]+' . Latitude : ' + response.data.features[0].center[1] + '.')
//     }
// })
// .catch((error) => {
//     console.log('Impossible de se connecter à Geocoding')
// })