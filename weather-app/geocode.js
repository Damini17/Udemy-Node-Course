const request = require('request');

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiZGFtaW5pLXZ5YXMiLCJhIjoiY2s5cHh3dTBsMGYwdzNrbngxZDR0aGs5ZSJ9.GSdaqDwOpIz0Z3rA6wWKhg";

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the geoCoding api', undefined);
            //low level errors
        } else if (body.features.length == 0) {
            callback('Unable to find location. Try another search', undefined);
        } else {
            const data = {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            };
            callback(undefined, data);
        }
    })
}

module.exports = geocode;