//Destruction asiment

const userProfile = {
    nameUser: 'Sanya',
    commentQty: 23,
    hasSignedAgreement: false
}

const { nameUser, commentQty, hasSignedAgreement } = userProfile

console.log(nameUser)               //Sanya
console.log(commentQty)             //23
console.log(hasSignedAgreement)     //false


//Destruction arrays

const fruits = ['Apple', 'Banana']
const [fruitOne, fruitTwo] = fruits

console.log(fruitOne)   //Apple
console.log(fruitTwo)   //Banana


//Destruction function

const userInfo = ({ nameUser, commentQty }) => {
    if (!commentQty) {
        return `User ${nameUser} has no comment`
    }
    return `User ${nameUser} has ${commentQty} comments`
}

console.log(userInfo(userProfile))
