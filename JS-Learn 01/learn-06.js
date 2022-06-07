//CallBack function

function printMyName() {
    console.log('Sanya')
}
//console.log('Star')
//setTimeout(printMyName, 1000)



//Global Scope 1
let a                           //объявление переменной "a" in Global Scope - value "UNDIFINED"
let b                           //объявление переменной "b" in Global Scope - value "UNDIFINED"

function myFn() {
    let b                       //объявление переменной "b" в зоне видимости функции - ее значене UNDIFINED
    a = true                    //объявлена variable In Local Scope Function? NOT! IN Global Scope? YES! Value "a" = 10
    b = 10                      //объявленна ли "b" в рамках функции? YES! Присваем ей значение 10
    console.log(b)              //"b" have the value 10 in Local Scope Function

    //end function, local variable - deleted
}


myFn()                          //call myFn
console.log(a)                  //True
console.log(b)                  //Undefined


// Global scope 2


const a1 = 5
function myFn1() {
    function innerFn() {
        //         console.log(a1)
    }
    innerFn()
}

myFn1()
