

let carSoul = {
    color :"red",
    engine : "v8",
    year : 2004
}
// access 
// console.log(carSoul.color)
delete carSoul.engine
// console.log(carSoul)

// empty obj
let carHana = {}
carHana.color = "green"
carHana.year = 2024

carHana.color = "purple"
// console.log(carHana)

console.log("-------------------------------------------")

// console.log(carHana)
// console.log(carSoul)

let cars = {carHana ,...carSoul}
// console.log(cars)

let obj = { name: "Sourav", age: 23 };
// console.log(Object.keys(obj).length);

const users = [
  { id: 1, name: "Alesh", age: 16 },
  { id: 2, name: "Hani", age: 17 },
  { id: 3, name: "Musa", age: 15 }
];

for (let i = 0; i< users.length;i++){
    console.log(users[i].name)
}

users.map((user)=>{
   console.log(user.name , user.age)
})
