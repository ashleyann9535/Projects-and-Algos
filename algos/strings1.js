let testStr = 'Good morning world'

const removeBlanks = (str) => {
    let newStr = ''
    for(let i = 0; i<str.length; i++){
        if(str[i] != ' '){
            newStr += str[i]
        }
    }
    return newStr
}

const getDigits = (str) => {
    let newStr = '';
    for(let i =0; i<str.length; i++){
        if(isNaN(str[i]) === false){
            newStr += str[i]
        }
    }
    return Number(newStr)
}

const acronym = (str) => {
    let newStr = str.split(' ');
    let finalStr = '';
    for(let i = 0; i < newStr.length; i++){
        finalStr += newStr[i][0]
    }
    return finalStr.toUpperCase()
    }

const countNonSpace = str => {
    let newStr = ''
    for(let i = 0; i<str.length; i++){
        if(str[i] != ' '){
            newStr += str[i]
        }
    }
    return newStr.length
}

const removeShortStrings = (arr, num) => {
    let newArr = []
    for(let i = 0; i<arr.length; i++){
        if(arr[i].length >= num){
            newArr.push(arr[i])
        }
    }
    return newArr
}

