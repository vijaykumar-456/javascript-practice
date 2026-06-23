let str = "vijay kumar"
let new_str = str.toUpperCase();
console.log(new_str);


let str2 = "VIJAY KUMAR"
let low_str = str2.toLowerCase();
console.log(low_str);


let str3 = "    VIJAY KUMAR      "
let low_str1 = str3.toLowerCase();
console.log(low_str1.trim());


let str4 = "VIJAY KUMAR"
let low_str2 = str4.toLowerCase();
console.log(low_str2.slice(1,3));

let str5 = "hello";
let str6 = "world";
let result = str5.concat(str6);
console.log(result);


let x = "Redddd";
console.log(x.replace("e", "a"));

let y = "Red";
console.log(y.replaceAll("ed", "at"));

let z = "Iamvijay";
console.log(z.charAt(2));
