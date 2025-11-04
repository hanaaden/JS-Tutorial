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