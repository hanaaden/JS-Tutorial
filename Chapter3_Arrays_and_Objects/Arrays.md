# Arrays 

array is like a box that can hold many things 

let fruits = ["apple", "banana", "mango"];

In JavaScript, an array is an ordered list of values. 
You can call values into elements 
We assign this value into numeric positions we call index 

In example above apple position is index 0 

So indexing starts in 0

Arrays can hold any type of data-such as numbers, strings, objects, or even other arrays

Assess the array

Any element in the array can be accessed using the index number. The index in the arrays starts with 0.

```js
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "mango"
```

Replace 

You can replace an item by accessing it using its index:
```bash
fruits[1] = "orange";
console.log(fruits); // ["apple", "orange", "mango"]
```

arrays are data structure that is very inportant to use when you like to store multiple value 

## how to use LENGTH property 

so when you like to check how many elements are 
inside your array you need to use length property 

```js
console.log(fruits.length)
```
## Multidimentions array 

array inside another array we call nested array 

```js 
let elements = [[['H', 'Li', 'Na'], ['Be', 'Mg']], [['B', 'Al'], ['C', 'Si']]];'
```

you can access 
```
console.log(elements[0]); // [['H', 'Li', 'Na'], ['Be', 'Mg']]

console.log(elements[0][0]); // ['H', 'Li', 'Na']

console.log(elements[0][0][0]); // 'H'
```

## sparse Array 

do you know when you have array and you put two 
comma by mistake like this a=[1,2,,3,4] 
you will end up sparse Array 
sparse array is arrays that contain empty slot 

so if you console you will get 
-- 1,2,empty,3,4
so its means you dont have undefined array or element 

# how to compare arrays in JS 
arrays and objects and when comparing it its not about 
the actual value but its. reference 

if I store two arrays same 
a=[1,2,3 and b= [1,2,3] 
so if we do a===b means it will give you false means its not equal 
cuz its not about the value 

this happens because object references are compared, and not their actual content.

When you try to access a value out of the index range, you get undefined as the return value

JavaScript arrays are not fixed in size. They can grow and shrink according to their content

## the spread operator and rest parameters 

The spread operator and the rest parameter have similar syntax (...) but they perform fundamentally different operations.

spread operators allows you to expand and array 
while the rest parameters allows you to collect 
undefined number of arguments into a collectiom of one array 

```js
let me = [1,2,3,4] let you = [5,6,7,8]
let me_and_you = [...me , ...you]
console.log(me_and_you) //  1,2,3,4,5,6,7,8
```

now we merged both our arrays you can use the same 
syntax to create the same array 

```js 
let our_copy = [...me_and_you]
console.log(our_copy) // 1,2,3,4,5,6,7,8
```

### how to use rest operator 

```js 
function f1(first, second, third, ...others) {
    console.log(first);
    console.log(second);
    console.log(third);
    console.log(others);
};

f1('He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn'); 
// He
// Ne
// Ar
// ['Kr', 'Xn', 'Rn']
```

In the example above, the f1 function is called with six string arguments. And the arguments after the third one are gathered inside the others array by using the rest syntax.

## Destructing assignment 

it related unpacking them arrays so its simple way to assign values 

```js 
let collect = [1,2,3,4] 
let [first , second , third] = collect 
console.log(first)
console.log(second)
console.log(third) 
```
The variables on the left side of the assignment operator are assigned to the value of the corresponding elements of the array on the right


## Common Array Methods in JS

in JS arrays are objects 

1: how to add and remove elements of array
so all of the following methods mutate the original array 

### how to use push( ) method 
```js 
let x = [1,2,3,4]
x[4] = 5 
console.log(x) // 1,2,3,4,5 
```

so now we simply added the array at the end 
so we can use push method to that simply
```js 
x.push(6)
```
now we have array elements starts from 1 to 6 
even you can do multiple elements using push 

### How to Use the unshift() Method
while push was adding at the end the unshift adds
from the begginning and returns modified length of array
```js
x.unshift(22)
```
now we have 22,1,2,3,4,5,6

### How to Use the pop() Method
If you need to remove the last element of an array, you can use the pop() method.

```js 
x.pop()
```
now we removed the last elements 6 is gone 

### How to Use the shift() Method

as same as unshift method shift removes the first element of the array 
```js 
x.shift()
```
now we see that 22 is gone


### How to Use the splice() Method

so now why we can't remove the element in a specific area 
like exactly where I want 

the syntax 
```
array.splice(start, count)

```

the first parameter is starting index while the second is how many numbers 
to remove 
```js
let x = [1,2,3,4,5,6]
x.splice(1 , 3]
// 1,5,6 
```

so its simply saying start index one and remove 3 
elements 

### How to Combine Arrays

you will use concat( ) to combine arrays 
If you need to combine two or more arrays – that is create a single array containing each element of the arrays you want to merge – you can use the concat() method. 

You need to call .concat() on the array that should come first, passing as arguments the arrays you want it to merge with. 

```js 
let me = [1,2,3,4]
let you = [5,6,7,8]
me.concat(you)
// 1,2,3,4,5,6,7,8
```



can we compare arrays yeah we can 
```js
let a = [1, null, 3];
let b = [1, undefined, 3];

a[1] === b[1]; // false

JSON.stringify(a) === JSON.stringify(b); // true
```

### How to Use the map() Method

The map() method creates a new array by calling a function on every element of the original array.

Syntax

array.map((element, index, array) => {})

You can use map() to copy an array:
```js
let albums = [
  { artist: 'Frank Zappa', title: 'Apostrophe' },
  { artist: 'Frank Zappa', title: 'One Size Fits All' }
];

let mapAlbums = albums.map(element => element);
console.log(mapAlbums);
```
This also creates a shallow copy.




### How to Search Inside an Array

There are several methods to search for elements in an array, either by value or by index.

### How to Use the includes() Method

The includes() method checks if an array contains a specific value.

Syntax
```
array.includes(value, startingIndex)
```
It returns true if the value is found, otherwise false.

Example:
```js
let dMinor = ['D', 'E', 'F', 'G', 'A', 'B♭', 'C'];

dMinor.includes('E');    // true
dMinor.includes('E', 2); // false
```
You can also specify the index to start searching from. The default is 0.


## How to Use the find() Method

The find() method return the first or last element that satisfies a condition.

Syntax
```
array.find((element, index, array) => {})

```
They return undefined if no element matches the condition.

Example:
```js
let animals = [
  { no: 1, track: 'Pigs on the Wing (Part One)' },
  { no: 2, track: 'Dogs' },
  { no: 3, track: 'Pigs (Three Different Ones)' },
  { no: 4, track: 'Sheep' },
  { no: 5, track: 'Pigs on the Wing (Part Two)' }
];

animals.find(el => el.track.includes('Pigs'));
// { no: 1, track: 'Pigs on the Wing (Part One)' }

animals.find(el => el.track.includes('Horses'));
// undefined
```


### Filter Array Elements

filter()

filter() returns a new array containing elements that pass a test.
```js
const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Phone', price: 800 },
  { name: 'Tablet', price: 500 }
];

const expensiveProducts = products.filter(item => item.price > 700);
console.log(expensiveProducts);
/*
[
  { name: 'Laptop', price: 1200 },
  { name: 'Phone', price: 800 }
]
*/
```

### forEach()

forEach() performs a task on each element but does not return a new array.
```js
const colors = ['red', 'green', 'blue'];
colors.forEach(color => console.log(color.toUpperCase()));
/*
RED
GREEN
BLUE
*/

```



## Exercises 
Create an array and print the first and last item.

Add an item to the array and remove one.

Check if a value exists in an array using includes().

Use indexOf() to find the position of an item.

Loop through an array and log each value.

Use push() to add and pop() to remove from the end.

Use shift() and unshift() to work with the start of the array.

Use splice() to insert and remove items in the middle.

Create an array of numbers and filter only numbers > 50.

Map an array of numbers to return each number + 10.

Create an array of objects and log one property of each object.

Find an object in an array using find().

Sort an array of numbers.

Reverse an array.

Join an array into a single string.

