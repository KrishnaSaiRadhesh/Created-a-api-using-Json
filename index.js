// GET method
let options = {
    "method" : "GET"
}

fetch("http://localhost:3000/users",options)
    .then(res => res.json())
    .then(User_data => console.log(User_data))



// POST Method
/*
let options = {
        "method" : "POST",
        "headers" : {
            "content-type": "application/json"
        },
        "body" : JSON.stringify({
            "id":3,
            "name":"Charan",
            "age": 24
        })
    }
    
fetch("http://localhost:3000/users/2", options)
    .then(response => {
        if(response.ok)
            console.log("New Data Inserted",response.status)
    }).catch(err => console.log(err))
*/


// PUT Method
/*
let options = {
        "method" : "PUT",
        "headers" : {
            "content-type": "application/json"
        },
        "body" : JSON.stringify({
            "id":3,
            "name":"Chotu",
        })
    }
    
fetch("http://localhost:3000/users/3", options)
    .then(response => {
        if(response.ok)
            console.log("New Data Inserted",response.status)
    }).catch(err => console.log(err))
*/


// PATCH Method
/*
let options = {
        "method" : "PATCH",
        "headers" : {
            "content-type": "application/json"
        },
        "body" : JSON.stringify({
            "name":"Charan",
        })
    }
    
fetch("http://localhost:3000/users/3", options)
    .then(response => {
        if(response.ok)
            console.log("New Data Inserted",response.status)
    }).catch(err => console.log(err))
*/


// Delete Method
/*
let options = {
    "method" : "DELETE"
}


fetch("http://localhost:3000/users/2", options)
    .then(res => {
        if(res.ok)
            console.log("New data added", res.status)
    })

*/
