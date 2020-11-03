const axios = require('axios');

export function post(options) {
    console.log(" data in services--> ", options)
    if (options.tokens) {
        console.log("i am in sevcie at 6");
        
        const headers = {
            'Content-Type': 'application/json',
            "token":options.tokens
          }
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:5000/register' + options.purpose,
            options.data ,
            {headers: headers})
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
    else {
        console.log("i am in sevcie at 25");

        return new Promise((resolve, reject) => {
            axios.post('http://localhost:5000/register' + options.purpose, options.data)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
}