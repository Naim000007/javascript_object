//if objecte made by constractor than it is sigleton 
// Object.create ***********this are sigleton*******

//object literals
let mysymbol = Symbol()
const jsuser ={
    name : "naim",
    "full name": "Naim Sheikh",
    age: 18,
    location: 'dhaks',
    islogin: false,
    lastlogin:['sunday', 'friday']
}

console.log(jsuser);
for (i in jsuser)
{
    console.log(i);
}
Object.freeze(jsuser);//it will not allow to change any value of this object in js find value 




let  findObjectKey = Object.keys(jsuser); //find all key in object
console.log(findObjectKey);

let findvalue = Object.values(jsuser) // find all value in object
console.log(findvalue); 

console.log(jsuser["full name"]);//if the key is defind value that time we use this [""]
console.log(jsuser.name);

jsuser.a = function(){
    console.log('hello sir');
}
jsuser.a()
console.log(jsuser);