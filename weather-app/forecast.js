const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f563045443b5bf9e01930c53b349ffb1&query=' + latitude + ',' + longitude + '&units=m';
    //single required parameter = url
    //response is JSON string but if specify json = true then response.body will already be JSON object no need to parse it
    //request is already parsing the response for us
    request({ url, json: true }, (error, {body}) => {
        //const data = JSON.parse(response.body);
        if (error) {
            callback('Unable to connect to the weather service', undefined);
        } else if (body.error) {
            callback('Unable to get location', undefined)
        } else {
            const result = body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degress out.";
            callback(undefined, result);
        }
    });
}


module.exports = forecast;