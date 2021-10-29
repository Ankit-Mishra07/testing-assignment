
function Validate(input) {
    
    
if(input.toString().length < 6) {
    return "Min 6 Character is required."
}else if(input.toString().match(/[A-Z]/g) === null) {
    return "Password Should have Minmum one capital character"
}else if(input.toString().match(/[a-z]/g) === null) {
    return "Password Should have Minmum one small character"
}else if (input.toString().match(/[0-9]/g) === null) {
    return "Password Should have Minmum one number"
}else if(vali(input) == false) {
    return "Password Should Contain Atleast one Character from   !@#$%^&*(),.<>/';:][{}|?"
} else {
     return "Now Your Password is Strong"
}
}


function vali(input) {
    let arr = ["!","@","#","$","%","^","&","*","(",")","<",">","/",";",":","]","[","{","}","?"]
    let inp = input.toString()
    for(let i = 0; i < inp.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] == inp[i]) {
                return true
            }
        }
    }

    return false
}

module.exports = {Validate}
