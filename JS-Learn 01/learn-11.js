console.log(Date())
console.dir(Date())

const newPost = (post, addedAt = Date.UTC()) => ({
    ...post,
    addedAt,
})

const firstPost = {
    id: 1,
    author: 'Sanya',
}

let infoPost = newPost(firstPost)
console.log(infoPost)


