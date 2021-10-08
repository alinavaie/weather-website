const request = require('postman-request')


const forecast = (latitude, longitude, callback) => {

    // const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=' + latitude + ',' + longitude + '&units=f'

    const url = 'http://api.weatherstack.com/current?access_key=eaccbfe3ebc431bc09ca64c4275e1939&query=' + latitude + ',' + longitude;

    request({url, json: true}, (error, {body}) => {
    if (error) {
        callback('Unable to connect to weather service', undefined);
    } else if (body.error) {
        callback('Unable to find location', undefined);
    } else {
        callback(undefined, body.current.weather_descriptions[0] + `It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`);
    }
})

}

module.exports = forecast