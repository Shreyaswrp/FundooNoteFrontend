const axios = require('axios');

export function post(options) {
    console.log(" data in services--> ", options)
    
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:5000/register', options.data)
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                reject(error)
            })
    })
}