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