let str = 'catinthehat7'

console.log(str)
let count = 0
let newStr = str.split('')
for(let i =0; i<newStr.length; i++){
    count++
    if(count%3 === 0){
        newStr[i] = '_'
    }
}

console.log(newStr.join(''))

