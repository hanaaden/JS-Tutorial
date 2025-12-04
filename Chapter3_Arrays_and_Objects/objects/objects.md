
# Objects

An Object is a variable that can hold many variables.
Objects are collections of key-value pairs, where each key (known as property names) has a value.
Different cars have the same properties, but the property values can differ from car to car.


```js
{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
```

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
```

```js
const person = {}
person.firstname : "soul"
```
### accessing
```js
console.log(person.age)
```
### modifyng the object 
Properties in an object can be modified by reassigning their values.

```js
person.age = 23
```
### removing 
The delete operator removes properties from an object.
```js
let obj = { model: "Tesla", color: "Red" };
delete obj.color;
```
### merging 
when merging objects we use spread operator 
```js
let o1 =  {name : "o1"}
let o2 =  {name : "o2"}
let o3 = {...o1,...o2}
console.log(o3)
```
### object length 

when checking object length use 
```js 
let obj = { name: "Sourav", age: 23 };
console.log(Object.keys(obj).length);
```

### map 
This code creates an array called users that contains three objects, and each object represents a user with an id, name, and age. Then, the .map() function loops through every object in the array and runs the callback function for each one. Inside that function, it prints the user’s name and age to the console. So when the map runs, it will log: “Alesh 16”, “Hani 17”, and “Musa 15”.
```js
const users = [
  { id: 1, name: "Alesh", age: 16 },
  { id: 2, name: "Hani", age: 17 },
  { id: 3, name: "Musa", age: 15 }
];

users.map(user => {
  console.log(user.name, user.age);
});
```

### objects with loop 
This code creates an object called user with three properties: name, age, and country. Then the for...in loop goes through each property (key) inside the object one by one. For every key it finds, it prints both the key and its value to the console. So the loop will print: name Alesh, age 16, and country Somalia.
```js
const user = {
  name: "Alesh",
  age: 16,
  country: "Somalia",
};

for (let key in user) {
  console.log(key, user[key]);
}
```