
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (Array.isArray(matrix)) {
    for (let i = 1; i <matrix.length+1; i++) {
      let newMatrix = 0
      if (i%2 === 0) {
        newMatrix = matrix[i-1].reverse();
        
      } else {
        newMatrix=matrix[i-1]
      }
      
      for (let n = 0; n < newMatrix.length; n++) {
        result.push(newMatrix[n])
          }  
      
    }
    
    return result;
    
  }
  return result
}


