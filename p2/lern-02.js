// lerning of object

const myCity = {} //variable declaration
myCity.city = 'LA' //description of object properties 1
myCity.popul = true         //description of object properties 2
myCity.country = 'USA'      //description of object properties 3
console.log (myCity)        //displaying the value
delete myCity.city          //object properties 1 removed
console.log (myCity)        //displaying the value
myCity['city'] = 'LA'       //description of object properties 1
console.log (myCity)        //displaying the value
delete myCity.country       //object properties 3 removed
const countryPropertyName = 'country'  //assigning an object 3 name variable
myCity[countryPropertyName] = "USA"  //description of object properties 1
console.log (myCity)        //displaying the value
delete myCity.country       //object properties 1 removed
delete myCity.popul         //object properties 1 removed
myCity.info = {}            //declaration of a nested property 
myCity.info.country = 'USA' //declaration of a nested variable 1
myCity.info.isPopul = true  //declaration of a nested variable 1
console.log (myCity)        //displaying the value
console.log (myCity.info.isPopul)   //displaying the value
delete myCity.info['isPopul']       //object properties 2 removed
console.log (myCity)        //displaying the value

//Methods & Properties v1
const myNewCity = {     //New object
    city: 'NY',         //description of object properties 1
    cityGreeting: function() {      //New method function usualy
        console.log('Greetings')    //description of object properties 1
    }
}
myNewCity.cityGreetings()   //displaying the value of method function

//Methods & Properties v2
const myNewCity2 = {     //New object
    city: 'NY',         //description of object properties 1
    cityGreeting() {      //New method function abbreviated
        console.log('Greetings')    //description of object properties 1
    }
}
myNewCity2.cityGreetings()   //displaying the value of method function



