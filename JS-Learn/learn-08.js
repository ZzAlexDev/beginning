//Devide object of the string 

const button = {
    width: 200,
    text: 'Sanya'
}

const redButton = {
    ...button,              //new preferense
    color: 'red'
}

console.log(redButton)


//var 02
const buttonInfo = {
    text: 'Buy',
}

const buttonStyle = {
    color: 'yellow',
    width: 200,
    height: 300
}

const button2 = {
    ...buttonInfo,
    ...buttonStyle
}

console.log(button2)