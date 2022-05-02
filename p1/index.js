const objectA = {
    a:10, b:true}
const copyOfA = objectA
copyOfA.a = 99
objectA.a
console.log(objectA.a)
copyOfA.c = 'abcd'
objectA.c
console.log(objectA.c)
