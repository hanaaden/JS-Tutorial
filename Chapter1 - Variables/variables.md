# Introduction To Variables

## What Is A Variable?
A variable is a temporary storage container for data in a code. Variables are the building blocks of any program. They help us to reuse, update and manipulate values. 

## Declaring Variables
Variables can be declared using the <strong>let</strong>, <strong>const</strong> and <strong>var</strong> keywords. 

## Declaration Examples

```js 
let age = 40; 
```
```js
const username = "Mark";
```
```js
var isLoggedIn = true;
```
They can be declared without assigning any value. The values can be updated during runtime.

```js
let message;

message = "Hello World!";
```
## Naming Variables

### What variables can contain
* Variables must contain only letters, digits and the symbols ``$`` and ``-``
* The first character must not be a number. `Example:` 
```js 
let 123name = "me";  //This is incorrect ❌
```
### What variables cannot contain
* Reserved keywords like ``name``, ``function``, ``for``, ``let`` etc.
* Must not start with an ``_``
* Must not contain a hyphen ``-``

### Case Matters

A variable named <strong style="color:#ff004f;">mango</strong> is different from a variable named <strong style="color:green;">MANGO</strong>



## Data Types Stored In Variables
There are two (2) types of data types stored in variables. They are ``Primitive`` and ``Non-Primitive`` datatype.

### Primitive
* Strings: ``"Hello"``
* Numbers: ``123``
* Booleans: ``true``, ``false``
* Null
* Undefined
* Symbol
* BigInt

### Non-Primitive
* Object
* Array
* Function

## Casing Conventions
### Camel Case
This is the most common naming convention in JavaScript. 
* The first word is in lowercase, and each subsequent word starts with an uppercase letter.
* It is used for variables, functions, and object properties.
#### Example:
```js
let userName = "John";
const maxScore = 100;
function getUserInfo() 
```
### Snake Case
* All letters are lowercase and are separated by underscores
* It is not often used in JavaScript, but sometimes appears in JSON keys, database fields.
#### Example
```js
let user_name = "John";
const max_score = 100;
```

### Pascals Case
* Each word starts with an uppercase letter, including the first.
#### Example
```js
class UserProfile {}
function CreateAccount() {}
const GameEngine = {};
```

# Trial Questions

* Declare a const variable ``val`` with the value <strong style="color:red;">77</strong>.
* Declare a variable ``username`` using ``let`` with the value <strong style="color: green;">John</strong>.
* Declare two variables: ``admin`` and ``name``.
* Assign the value ``Peter`` to name.
* Copy the value from name to admin.
