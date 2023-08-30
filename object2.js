const object ={

}
object.name = 'naim';
object.age = '22';
object.email= 'mdnaim01303202218@gmail.com';
object.girlfriendname = 'mim rahman'
console.log(object);
const object2 ={
    name2 :'mim rahman',
    age2 : 22,
    email2 :'mim@google.com'

}
console.log(object2);
const objCombined = {...object, ...object2, ...object3};

const object3 = Object.assign({}, object, object2)
console.log(object3);

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'john@example.com'
};

// Using object destructuring to extract properties into variables
const { firstName, lastName, age, email } = person;

//Now you can use these variables directly
console.log(firstName); 
console.log(lastName);  
console.log(age);
console.log(email);     
