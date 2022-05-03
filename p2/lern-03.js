//JSON
const post = {
    title: 'Mypost',
    likeQty: 5
}
console.log(post)
const postJson = JSON.stringify(post)
console.log(postJson)
const postParse = JSON.parse(postJson)
console.log(postParse)