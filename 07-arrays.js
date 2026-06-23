let arr = [1,2,4,3,5,6];
console.log(arr);
console.log(arr.length);
console.log(arr[2]);
arr[2] = 10;
console.log(arr);

let heros = ['batman', 'hulk', 'spiderman','shaktiman'];

// for loop
for (let i = 0; i<heros.length; i++) {
    console.log(heros[i])
}

// for of loop
for ( let hero of heros) {
    console.log(hero);
}

// for of loop
for ( let hero of heros) {
    console.log(hero.toUpperCase());
}


// practice
let marks = [85, 75, 44, 37, 76, 80];
let sum = 0;

for ( let val of marks) {
    sum += val;
}

let average = ("Average:", sum/marks.length);
console.log(`Average of the marks of student is ${average}`);
