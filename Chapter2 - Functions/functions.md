# WHAT IS A FUNCTION
A function is block of code that can reused throughout the program. It helps to avoid repetition of codes. ``Example:``
```js
    function outputName(name){
        return `Hello ${name}, how u doing`;
    }
    outputName("Carlton");
```

## Function Declaration
The above code is a type of function declaration. Function declarations are declared using the ``function`` keyword.

## Function Expression
With function expression, the output of the function is stored in a variable. ``Example:``
```js
    const greet = function(){
        console.log("Greetings!");
    }
    
```