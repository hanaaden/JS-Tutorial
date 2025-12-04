const user = {
  name: "Alesh",
  age: 16,
  country: "Somalia",
};

for (let key in user) {
  console.log(key, user[key]);
}
const users = [
  { id: 1, name: "Alesh", age: 16 },
  { id: 2, name: "Hani", age: 17 },
  { id: 3, name: "Musa", age: 15 }
];

users.map(user => {
  console.log(user.name, user.age);
});


