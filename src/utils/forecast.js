const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=62fbcfbd67140c15346085f63c053845&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body } = {}) => {
        if(error){
            callback('Unable to connect to Weather service!', undefined)
        }
        else if(body.error){
            callback('Unable to find location', undefined)
        }
        else{
            //const body = response.body
            //console.log('It is currently '+current.temperature+' out. It feels like '+current.feelslike)
            callback(undefined, {
                temperature: body.current.temperature,
                feels_like: body.current.feelslike,
                location: body.location.name
            })
        }
    })
}

module.exports = forecast