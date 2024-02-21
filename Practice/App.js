//Math Functions
console.log(Math.PI)
console.log(Math.floor(Math.PI))  //Remove decimal show rounded value
console.log(Math.round(Math.PI))
console.log(Math.round(3.8))      //Ans 4 show rounded value
console.log(Math.floor(3.8))      //Ans 3 only remove decimalplace
console.log(Math.min(2,4,5,23,67))
console.log(Math.max(2,4,5,23,67))
console.log(Math.random())
console.log(Math.round(Math.random()*4)+1)
console.log(Math.floor(Math.random()*4)+1)
console.log(Math.SQRT1_2)
console.log(Math.ceil(6.1))    //Ans 7
console.log(Math.ceil(6.8))    //Ans 7
console.log(Math.cos(30))

//String Function

let str='This is very beautiful place'
let str1='But is also very danger'
console.log(str.slice(4,7))     //slice(start index,end index)
console.log(str1.indexOf('i'))
console.log(str1.endsWith('k'))  //check the string end with k returns boolean value
console.log(str.lastIndexOf('i'))
console.log(str.charAt(6))
console.log(str.substring(4,9)) 
console.log(str.substring(9,18)) 
console.log(str.toUpperCase())
console.log(str.replace('This','It'))
console.log(str.trim())   //Remove space Start and End
console.log(str.trimStart()) // Remove space Start only
let bill="Rs.10"
console.log(bill.padEnd(7,'0'))
console.log(bill.length)
console.log(str.padStart(5,'0'))
console.log(str.search('not'))

//Ex
let nam='Bharathi'
let index=Math.floor((Math.random()*nam.length))
console.log(index)

console.log(nam.charAt(index))


//Template Literalls