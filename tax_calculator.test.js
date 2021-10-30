const { Tax } = require("./tax_calculator")

describe("The tax calculator" , () => {
    test("Should return Tax is 25000.00" , () => {
        expect(Tax(500000)).toBe("Tax is 25000.00")
    })

    test("Should return No Tax" , () => {
        expect(Tax(125000)).toBe("No Tax")
    })


    test("Should return Tax is 140000.00" , () => {
        expect(Tax(1000000)).toBe("Tax is 140000.00")
    })

    test("Should return Tax is 98000.00" , () => {
        expect(Tax(700000)).toBe("Tax is 98000.00")
    })

    test("Should return No Tax" , () => {
        expect(Tax(50000)).toBe("No Tax")
    })

    test("Should return Tax is 1350000.00" , () => {
        expect(Tax(5000000)).toBe("Tax is 1350000.00")
    })

    test("Should return Tax is 25000.00" , () => {
        expect(Tax(249000)).toBe("No Tax")
    })

    test("Should return Tax is 675000.00" , () => {
        expect(Tax(2500000)).toBe("Tax is 675000.00")
    })


})