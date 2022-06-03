//CLASS
class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }
    upvote() {
        this.votesQty += 1
    }

    static mergeComment(first, second) {
        return `${first} ${second}`
    }
}

const firstComment = new Comment('First comment')
console.log(firstComment)

console.log(firstComment instanceof Comment)        //true
console.log(firstComment instanceof Object)         //true

firstComment.upvote()
console.log(firstComment.votesQty)                  //1
firstComment.upvote()
console.log(firstComment.votesQty)                  //1

console.log(firstComment.hasOwnProperty('text'))         //true
console.log(firstComment.hasOwnProperty('votesQty'))    //true
console.log(firstComment.hasOwnProperty('upVote'))             //false
console.log(firstComment.hasOwnProperty('hasOwnProperty'))    //true

const secondComment = new Comment('Second Comment')
const thirdComment = new Comment('Third Comment')

console.log(Comment.mergeComment('First comment', 'Second commment'))


const newComment = new Comment('Awesome comment')
