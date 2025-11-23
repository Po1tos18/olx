fetch('https://my-json-server.typicode.com/Po1tos18/olx/db')
    .then(async function(response){
        let data = await response.json()
        console.log(data)
    })