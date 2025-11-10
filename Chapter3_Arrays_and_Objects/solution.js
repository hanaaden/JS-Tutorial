// Task 1
const arr1 = ["Joe", "Horse", "Hack", 3, 4, 2];
const firstItem = arr1[0];
const secondItem = arr1[arr1.length - 1];

console.log(firstItem);
console.log(secondItem);

console.log();

// Task 2
const arr2 = ["Mango", "Beans", "Salad"]
let added = arr2.push("Banana");
let removed = arr2.shift();

console.log(arr2);
console.log();

// Task 3
const arr3 = ["Mike", "Samoa", 22];
const includes = arr3.includes("Mike");
console.log(includes);
console.log();

// Task 4
const arr4 = [1, 3, 5, 7, 11];
const index = arr4.indexOf(11);
console.log(index);
console.log();

// Task 5
const arr5 = ["two", 4, 6, 8, "ten"];
arr5.forEach(arr => console.log(arr));

console.log();

// Task 6
const arr6 = [1, 2, 3, 4, 5, 6];
arr6.pop();
arr6.push(7);
console.log(arr6);
console.log();

// Task 7
const arr7 = [5, 6, 7, 8, 9];
arr7.shift();
arr7.unshift(4);
console.log(arr7);
console.log();

// Task 8
const arr8 = [1, 2, 3, 4, 5, 6, 7];
let spliced = arr8.splice(2, 2, "Monkey", "Cat");
console.log(spliced);
console.log(arr8);
console.log();

// Task 9
const arr9 = [20, 30, 40, 50, 60, 70, 80];
let filtered = arr9.filter(arr => arr > 50);
console.log(filtered);
console.log();

// Task 10
const arr10 = [1, 2, 3, 4, 5];
let mapped = arr10.map(arr => arr + 10);
console.log(mapped);
