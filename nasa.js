const axios = require("axios");
function  getData() {
    return new Promise(function (resolve) {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=TaIWwLKD0DTxioa0c1U8vcIVP4R1g4L8AH2BvWs4')
            .then(function (json) {
                resolve(json.data)

            })
    })
}
getData().then(result=>console.log(result.hdurl))