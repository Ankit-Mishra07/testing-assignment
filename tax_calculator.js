function Tax(amount) {

    if(amount < 250000) {
        return "No Tax"
    }
    if(amount >= 250000 && amount <= 500000) {
        let amt = amount / 2
        amount = amount - amt
        let tax = ((amount*10)/100).toFixed(2)
        return `Tax is ${tax}`    
    }

    if(amount > 500000 && amount <= 1000000) {
        let amt = amount*(0.3)
        amount = amount - amt
        let tax = (amount*0.2).toFixed(2)
        return `Tax is ${tax}`
    }

    if(amount > 1000000) {
        let amt = amount * 0.1
        amount = amount - amt
       let tax = (amount * 0.3).toFixed(2)
       return `Tax is ${tax}`
    }
}



 module.exports = {Tax}