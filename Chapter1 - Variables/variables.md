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

