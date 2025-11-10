const add7 = (a)=>{
  return a + 7
}
console.log(add7(10))

const multiply=(a,b)=>{
  return a*b
}
console.log(multiply(2,3))

const lastLatter =(str)=>{
  const lastL = str[str.length-1]
  return lastL
}
console.log(lastLatter("abd"))

const square =(a)=>{
  return a*a
}
console.log(3)

const evenChecker =(n)=>{
  if(n % 2 == 0){
    return true
  }else{
    return false
  }
  
}

console.log(evenChecker(6))


const Uppercase =(word)=>{
  const chars = word.charAt(0)
  const upper = chars.toUpperCase()
  const remaining = word.slice(1)
  return upper + remaining
}
console.log(Uppercase("farax"))