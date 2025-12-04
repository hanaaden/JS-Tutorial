# Conditionals In JavaScript
When writing code, there comes a point where the developer must make decisions. And to do that we use `conditional statements`. Well dicuss these concepts in this lessons.
* If.....else statements
* Switch statements
* Tenary Operators

## If...else Statements
This is the most common type of conditional statement. It evaluates the condition in parenthesis and if true runs the code in the block. 
### Syntax
```js
if(condition){
    // Code to run when condition is true
} else{
    // Another code to run instead
}
```
With the code snippet above, 
* We have the keyword `if` which tells the javascript interpreter that we're about to make a decision.
* Followed by a set of parenthesis which takes the condition to test.
* A set of curly braces, inside which we have some code — this can be any code we like, and it only runs if the condition returns tru
* We also have the `else` keyword.
* Another set of curly braces, inside which we have some more code and it only runs if the condition is not true. ie. false.

### Else If
When we have multiple conditions to test for, we can use `else if` in our code. `Example:`
```js
if(condition){
    // code to run
} else if(condition1){
    // another code to run
} else if(condition2){
    // some more code to run
} else{
    // final code to run
}
```
``Note:`` Conditionals go hand in hand with the `comparison operators`.

#### Example:

```js
let weather = prompt("Please enter the weather today");

if(weather === "sunny"){
    console.log("It is sunny today!");
} else if(weather === "cloudy"){
    console.log("It is cloudy today!");
} else if(weather === "rainy"){
    console.log("It is rainy today!");
} else{
    console.log("You didn't enter a weather condition");
}
```

## Tenary Operator
The `tenary operator` is a simplified form of writing if/else conditions. Tenary operators are usually assigned to variables thus storing their values when the condition runs. <br/> `Syntax:`
```js
condition ? run this code : run this code instead
```
``Code Example:``
```js
let age =  prompt("Please enter your age");

let accessAllowed = (age > 18) ? true : false;

console.log(accessAllowed);
```

## Switch Statement
