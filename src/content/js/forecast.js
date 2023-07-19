const request = require('request')

const forecast = (address, callback) => {
    const url = 'http://api.weatherapi.com/v1/current.json?key=01b3c0f8063c406aa4714608231907&q=' + address + '&aqi=no';

    request({ url, json: true }, (error, { body }) => {
       
        if (error) {
            callback('Unable to connect to location services!', undefined);
        } else if (body.error === 0) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            callback(undefined,body);
        }
    })
}

module.exports = forecast