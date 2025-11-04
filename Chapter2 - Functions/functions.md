# WHAT IS A FUNCTION
* A function is block of code that can reused throughout the program. 
* It helps to avoid repetition of codes. 
* When writing a function, it is optional to add a ``parameter``
* When calling a function, an argument is passed into it.

# Creating A Function
When creating a function, there are ways of writing it out depending on the need and use of the function. Below are the ways of creating functions.

## Function Declaration
The above code is a type of function declaration. Function declarations are declared using the ``function`` keyword. ``Example:``
```js
    function outputName(name){
        return `Hello ${name}, how u doing`;
    }
```

## Function Expression
With function expression, the output of the function is stored in a variable. ``Example:``
```js
    const greet = function(){
        console.log("Greetings!");
    }
```
## Invoking Functions
To invoke a function, you write the name of the function with a set of parenthesis ``()``
```js
    function myfunc(){
        return "Hello World!";
    }

    myfunc();
```

## Function Parameters And Arguments
Data can be passed into functions using parameters. In the example below, the function has two(2) parameters. ``name`` and ``age``

```js
    function user(name, age){
        return `Hello ${name}, you're ${age} years old`;
    }

    user("Mark", 21);
    user("Ben", 12);
```
When the function is called ``user()``, the arguments ``Mark`` and ``21`` are passed into the parameters ``name`` and ``age`` and the result is returned based on the content of the function. Same applies for the second function call.

``Note:``
* A ``parameter`` is a variable passed into a function when it's been created.
* An ``argument`` is a variable passed into a function when it's been invoked.

## Default Parameters
You can also specify default values for the parameters you create. ``Example:``
```js
    function hello(name = "Chris"){
        return `Nice to meet you ${name}`
    }
    hello("Steven"); // Would output Nice to meet you Steven
    hello(); // Would output Nice to meet you Chris 
```
With the code above, the value of `Chris` is passed into the function body and ``Nice to meet you Chris`` is returned. Since no argument was given when the function was called, it defaulted back to the default one used given when creating the function.

## Return Values
* These are values that a function returns when it is done with it's execution
* To return a value from a function, we use the ``return`` keyword.
* It is possible to use the ``return`` keyword without any value. When you do that, it stops the function execution.

```js
    function sum(num1, num2){
        return num1 + num2;
    }

    sum(10, 10);
```
``Note:`` Never add a new line between ``return`` and the value.
```js
    return
    num1 + num2;
```
Doing this will cause the function to terminate when it sees the return statement and the expression ``num1 + num2`` will not run. In order to solve such problems, it is best to wrap the expression in a set of parenthesis.
```js
    return (
        num1 + num2
        );
```

## Anonymous Function
This is a function without a name. Hence the name `anonymous`.
```js
    (function (){
        console.log("Hello World");
    });
```

## Arrow Functions
* Using an arrow function is a more simple and concise way of writing functions.
* They are just like `function expressions` but more simple.
```js
    let sum = (a, b) => a + b;
```
### OR
```js
    let sayHi = () => alert("Hi");
```
## Multi-Line Arrow Functions
Sometimes we need a more complex function, with multiple expressions and statements. In that case, we can enclose them in curly braces. The major difference is that curly braces require a return within them to return a value (just like a regular function does).

```js
    let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need to use the "return" keyword
};

alert( sum(1, 2) ); // 3
```

## Callback Functions
A callback function is a function passed into another function as an argument.
```js
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
```
The code above is a function ask(question, yes, no) with three parameters:

`question` <br>
Text of the question <br>
`yes` <br>
Function to run if the answer is “Yes” <br>
`no` <br>
Function to run if the answer is “No” <br>
The function asks the question and, depending on the user’s answer, calls yes() or no():

# Trial Questions

* Write a function called `add7` that takes one number and returns that number + 7.
``add7(10) should return 17``

* Write a function called `multiply` that takes 2 numbers and returns their product.
``multiply(3, 2) should return 6``

* Write a function called `capitalize` that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
```
capitalize("abcd") should return "Abcd"
capitalize("ABCD") should return "Abcd"
capitalize("aBcD") should return "Abcd"
```
* Write a function called `lastLetter` that takes a string and returns the very last letter of that string:
``lastLetter("abcd") should return "d"``

* Create a function `square` that returns the square of a number.

* Write a function `isEven` that returns true if a number is even, otherwise false.

