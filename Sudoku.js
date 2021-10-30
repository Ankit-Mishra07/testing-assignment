let N = 9

function solve(arr,row,col) {
    
    if(row == N-1 && col == N) {
        return true
    }
    
    if(col == N) {
        row++
        col = 0
    }
    if(arr[row][col] != 0) {
        return solve(arr,row,col+1)
    }
    
    for(let num = 1; num < 10; num++) {
        
        if(check(arr,row,col,num) == true) {
            arr[row][col] = num
            
            if(solve(arr,row,col+1) == true) {
                return true
            }
        }
        
        arr[row][col] = 0
    }
    return false
    
}

function check(arr,row,col,num) {
    
    for(let x = 0; x <= 8; x++) {
        if(arr[row][x] == num) {
            return false
        }
    }
    
    
    for(let x = 0; x <= 8; x++) {
        if(arr[x][col] == num) {
            return false
        }
    }
    let start_row = row - row % 3
    let start_col = col - col % 3
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if(arr[i + start_row][j + start_col] == num) {
                return false
            }
        }
    }
    return true
}

function runProgram(input) {
    // Write code here
   input = input.trim().split("\n")
   let arr = []
   for(let i = 0; i < input.length; i++) {
       
       arr.push(input[i].trim().split(" ").map(Number))
    }

    if(solve(arr,0,0)) {

        return arr
    
    }else {
        return -1
    }
  }

  

   module.exports = {runProgram}
  



  	