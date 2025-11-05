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

### How to convert array into string 

you have to use two methods join() and toString()
```js
let animals = ['pig', 'dog', 'sheep'];

animals.toString(); // 'pig,dog,sheep'

animals.join(', '); // 'pig, dog, sheep'

animals.join(' '); // 'pig dog sheep'

animals.join(' * '); // 'pig * dog * sheep'
```

### How to Use the JSON.stringify() Method

```js
let albums = [
    {artist: 'Frank Zappa', title: 'Apostrophe', year: 1974},
    {artist: 'Frank Zappa', title: 'One Size Fits All', year: 1975}
];

JSON.stringify(albums);
//'[{"artist":"Frank Zappa","title":"Apostrophe","year":1974},{"artist":"Frank Zappa","title":"One Size Fits All","year":1975}]'
```

can we compare arrays yeah we can 
```js
let a = [1, null, 3];
let b = [1, undefined, 3];

a[1] === b[1]; // false

JSON.stringify(a) === JSON.stringify(b); // true
```
You might think that the comparison between the string representation of a and b would return false, since null and undefined are not equal. But in practice, they are both stringified to null.

Sure — here’s your full text rewritten as a clear, simple, and structured article with no icons, ads, or distractions. I’ve only made the language smoother and easier to follow, without changing the meaning or any code examples.

⸻

How to Use the every() Method

The every() method checks whether all elements in an array satisfy a condition defined in a callback function. It returns either true or false.

Syntax

array.every((element, index, array) => {})

You can use every() to build a simple function that compares two arrays containing primitive values.

const compareEvery = (arr1, arr2) => {
  return arr1.length === arr2.length &&
  arr1.every((elem, index) => elem === arr2[index]);
};

Explanation:
	•	First, the lengths of both arrays are compared. If they are not equal, the arrays are not the same.
	•	Then, every() is used on the first array. The callback checks if every element in arr1 is equal to the element at the same index in arr2.
	•	The && operator ensures the function returns true only if both conditions are true.

Example:

let a = [1, null, 3];
let b = [1, undefined, 3];

compareEvery(a, b); // false


⸻

How to Copy an Array

Most array copy operations in JavaScript create a shallow copy rather than a deep one.
A shallow copy means that if the array contains non-primitive values (like objects), changing the copy can also affect the original array.

⸻

How to Use the slice() Method

The slice() method allows you to copy an entire array—or part of it—without changing the original array.

Syntax

array.slice(start, end)

It takes two parameters: the starting index and the ending index (not included).
If called without arguments, it copies the entire array.

Example:

let dough = ['flour', 'water', 'yeast', 'salt'];

let doughCopy = dough.slice();
console.log(doughCopy); // ['flour', 'water', 'yeast', 'salt']

If you change the copy, the original remains the same:

doughCopy[1] = 'wine';
console.log(doughCopy); // ['flour', 'wine', 'yeast', 'salt']
console.log(dough);     // ['flour', 'water', 'yeast', 'salt']

This works because the array contains only primitive values.
However, when arrays contain objects, both copies share references to the same objects.

Example:

let albums = [
  { artist: 'Frank Zappa', title: 'Apostrophe' },
  { artist: 'Frank Zappa', title: 'One Size Fits All' }
];

let albumsCopy = albums.slice();

albumsCopy[1]['title'] = 'Absolutely Free';
console.log(albumsCopy);
console.log(albums);

Both arrays show the updated title because they reference the same object.
If you reassign an element to a new object, the change does not affect the original:

albumsCopy[1] = { artist: 'Captain Beefheart', title: 'Safe as Milk' };
console.log(albumsCopy);
console.log(albums);


⸻

How to Use the map() Method

The map() method creates a new array by calling a function on every element of the original array.

Syntax

array.map((element, index, array) => {})

You can use map() to copy an array:

let albums = [
  { artist: 'Frank Zappa', title: 'Apostrophe' },
  { artist: 'Frank Zappa', title: 'One Size Fits All' }
];

let mapAlbums = albums.map(element => element);
console.log(mapAlbums);

This also creates a shallow copy.

⸻

How to Create a Deep Copy

To make a deep copy, you can convert an array to a JSON string using JSON.stringify() and then parse it back with JSON.parse().

let albums = [
  { artist: 'Frank Zappa', title: 'Apostrophe' },
  { artist: 'Frank Zappa', title: 'One Size Fits All' }
];

let albumsCopy = JSON.parse(JSON.stringify(albums));
console.log(albumsCopy);

This method ensures the copy is completely independent of the original array.

⸻

How to Search Inside an Array

There are several methods to search for elements in an array, either by value or by index.

⸻

How to Use the includes() Method

The includes() method checks if an array contains a specific value.

Syntax

array.includes(value, startingIndex)

It returns true if the value is found, otherwise false.

Example:

let dMinor = ['D', 'E', 'F', 'G', 'A', 'B♭', 'C'];

dMinor.includes('E');    // true
dMinor.includes('E', 2); // false

You can also specify the index to start searching from. The default is 0.

⸻

How to Use the indexOf() Method

The indexOf() method returns the first index where a specific value is found, or -1 if it is not found.

Syntax

array.indexOf(value, startingIndex)

Example:
```js

let dMinor = ['D', 'E', 'F', 'G', 'A', 'B♭', 'C'];

dMinor.indexOf('E');    // 1
dMinor.indexOf('E', 2); // -1

```
How to Use the find() and findLast() Methods

The find() and findLast() methods return the first or last element that satisfies a condition.

Syntax
```
array.find((element, index, array) => {})
array.findLast((element, index, array) => {})
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

animals.findLast(el => el.track.includes('Pigs'));
// { no: 5, track: 'Pigs on the Wing (Part Two)' }

animals.find(el => el.track.includes('Horses'));
// undefined
```

### How to Use the findIndex() and findLastIndex() Methods

The findIndex() and findLastIndex() methods work like find() and findLast(),
but they return the index of the matching element instead of the element itself.

Syntax
```

array.findIndex((element, index, array) => {})
array.findLastIndex((element, index, array) => {})
```

Example:

```js
let animals = [
  { no: 1, track: 'Pigs on the Wing (Part One)' },
  { no: 2, track: 'Dogs' },
  { no: 3, track: 'Pigs (Three Different Ones)' },
  { no: 4, track: 'Sheep' },
  { no: 5, track: 'Pigs on the Wing (Part Two)' }
];

animals.findIndex(el => el.track.includes('Pigs')); // 0
animals.findLastIndex(el => el.track.includes('Pigs')); // 4
animals.findIndex(el => el.track.includes('Horses')); // -1
```