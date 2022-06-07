//Error and try & clash

let a;

const b = 5;

if (a > b) {
    console.log('a is larger');
}

for (let i = 0; i++; i < 5) {
    console.log(i);
}


'abc';
a = a + 3;
c = a + b;
d = 'Good ' + 'Evening';
myFunction(c, d);
console.log('Hey');

function myFn(a) {
    console.log(a);
}

const b1 = true;
let c = 10;

myFn(2 + 3)             //5
myFn(b1)                //true
myFn(c = c + 1)         //11
// myFn(c = c + 1;)     //SyntaxError
// myFn(let d)          //SyntaxError
