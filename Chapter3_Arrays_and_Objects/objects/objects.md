
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