const combineArrays = (array1, array2) => {
  let newArray = [];
  for(let i=0; i<array1.length; i++) {
    for(let j=0; j<array2.length; j++) {
      if(array1[i]['firebaseId'] === array2[j]['firebaseId']) {
        array1.splice(array1[i], 1)
      }
    }
  }
  return array1.concat(array2)
}

export default combineArrays
