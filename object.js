var raju2 = {
    name: "Raju Ahmed",
    age: 22,
    subsject: "CSE",
    rollNo: 1,
    regNo: 65463464654654,
    gender: 'male',
    isGanja: false
};
var raju = {
    name: "Raju Ahmed",
    age: 24,
    subsject: "CSE",
    rollNo: 1,
    regNo: 65463464654654,

};
var raju3 = {
    name: "Raju Ahmed",
    age: 23,
    subsject: "CSE",
    rollNo: 1,
    regNo: 65463464654654,
    gender: 'male',
    isGanja: false
};

// poperty value
// console.log(raju.isGanja);
var rajuAge = raju["age"] ;

// change poperty value
raju.age = 50;

var sum = raju.age + raju2.age + raju3.age;

// get all poperty
var popertys = Object.keys(raju);

// get all values;
var allValue = Object.values(raju);




// for(var i = 0; i < popertys.length; i++ ){
//     var value = raju.keys [i]
// }

// for-in loop
for (var allPoperty in raju) {
       var element =raju[allPoperty];
        console.log(element);
}

// for in structure
 for (var x in objectName) {
        var element = objectName[x];  
        console.log(element);     
 }
