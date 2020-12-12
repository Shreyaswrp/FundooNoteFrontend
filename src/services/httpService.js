const axios = require('axios');

export function post(options) {
    console.log(" data in services--> ", options)
    
    var config = { headers: {
        'Content-Type': 'application/json'}
    }

    axios.post('http://localhost:5000/register',{
        firstName: options.data.firstName,
        lastName: options.data.lastName,
        emailId: options.data.email,
        password: options.data.password
    },config)
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    })
}