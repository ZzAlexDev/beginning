//PROMISE to ASYNC/AWAIT


//Promise variant
const getData1 = (url) =>
    new Promise((resolve, reject) =>
        fetch(url)
            .then(Response => Response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    )

getData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))

//Async variant
const getData2 = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'
try {
    const data = await getData(url)
    console.log(data)
} catch (error) {
    console.log(error.message)
}
