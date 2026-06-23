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

//concat
let indHeroes= ["salman","shahrukh", "prabhas","allu arjun"];
let southHeroes= ["prabhas","allu arjun","mahesh"];

let combinedHeroes = indHeroes.concat(southHeroes);
console.log(combinedHeroes);

//unshift - adds infront of 1st element
let tolHeroes = ["mahes", "ram", "nani"];
let hero= tolHeroes.unshift("charan");
console.log(hero);
console.log(tolHeroes);


//array methodss
//slice ----> arr1.slice(start of array, end of array(non-inclusive))
let arr1 = [1,2,3,4,5,6];
let res_arr1 = arr1.slice(1,5);
console.log(res_arr1);

//splice ----> arr2.splice(start of array, how many numbers to be deleted, how many numbers to be added)
let arr2 = [1,2,3,4,5,6];
console.log(arr2.splice(2,1,10));
console.log("res_arr2 changes in own array because arrays are mutable:",arr2);