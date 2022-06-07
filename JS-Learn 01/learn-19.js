//code for Browser
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(Response => {
        console.log(Response)
        return Response.json()
    })
    .then(json => console.log(json))
    .catch(error => console.error(error))


//PROMISE

const getData = (url) =>
    new Promise((resolve, reject) =>
        fetch(url)
            .then(Response => Response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    )

getData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))

//ASINC
const asyncFn = async () => {
    return 'Succes'
}
asyncFn()
    .then(value => console.log(value))

const asyncFnErr = async () => {
    throw new Error('There Error Message')
}
asyncFn()
    .then(value => console.log(value))
    .catch(error => console.log(error.message))


