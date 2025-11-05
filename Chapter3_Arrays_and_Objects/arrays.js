// map method 
let courses = [
    {name : "DB" , lecturer : "John"},
    {name : "BE" , lecturer : "Jane"}
]
const course = courses.map(course => course)
const coursesName = courses.map(course => course.name)
console.log(course)
console.log(coursesName)