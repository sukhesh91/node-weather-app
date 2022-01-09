const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoic3VraGVzaDkxIiwiYSI6ImNreTF5emZrejBibnkydWxqMzJjN2FzdWwifQ.gzIQfvWfYXe4s7aJR8AOGA&limit=1'
    request({ url, json: true }, (error, { body } = {}) => {
        if(error){
            callback('Unable to connect to geocoding service!', undefined)
        }
        else if(body.features.length === 0){
            callback('Unable to find the place!', undefined)
        }
        else{
            const data = {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            }
            callback(undefined, data)
        }
    })
}

module.exports = geocode