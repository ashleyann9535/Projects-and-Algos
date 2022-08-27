const pushFront = (arr, num) => {
    arr.unshift(num)
}

const popFront = arr => {
    arr.shift()
    return arr
  }

const insertAt = (arr, i, num) => {
    arr.splice(i, 0, num)
    return arr
}

const removeAt = (arr, i) => {
    arr.splice(i,1)
    return arr
  }

  const swapPairs = (arr) => {
    for(let i = 0; i<arr.length; i++){
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
        i++
    }
    let newArr = arr.filter((v) => {
      return v !== undefined
    })
    return newArr;
  }

const removeDuplicates = (arr) => {
    let newArr = [...new Set(arr)]
    return newArr
}

