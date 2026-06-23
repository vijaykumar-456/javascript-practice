// For Loop

for (let count = 1; count < 5; count++){
    console.log("Apna college")
}
console.log("loop ended")

let sum=0;
for  (let i=0; i <= 5; i++){
    sum = sum+i;
}

console.log(sum)


// While loop
let i = 1;
while (i <= 5){
    console.log("i=",i);
    i++;
}

// do-while loop
let j = 20;
do {
    console.log("Apna college");
    j++;
} while ( j <= 10);


// this loop is done for counting string items
let str = "javascript"
let size = 0;

for (let i of str) {
    console.log("i=", i);
    size++;
}

console.log("size:", size)

// for in loop, this loop should be used when we are looping in objects
let student = {
    name: "vijay kumar",
    age: 28,
    cgpa: 8.01
}

for (let key in student) {
    console.log("key=", key, "value=", student[key]);
}


//print all the even numbers from 0 to 100
for (let i=0; i <= 100; i++) {
    if (i%2 !== 0){
        console.log( "odd numbers:", i);
    }
}

let GameNum=24;

let UserNum = prompt("ENter a number 0-100");

while (GameNum != UserNum) {
    UserNum = prompt("ENter a number 0-100, thats wrong");
}

console.log("congrats, number is correct");
