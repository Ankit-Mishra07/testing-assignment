const { TestWatcher } = require("@jest/core")

const {Validate} = require("./password")

describe("Password validation for the input", () => {
    test("AAAaa should return Min 6 Character is required." , () => {
        expect(Validate("AAAaa")).toBe("Min 6 Character is required.")
    })

    test("aaaaaa should return Password Should have Minmum one capital character" , () => {
        expect(Validate("aaaaaa")).toBe("Password Should have Minmum one capital character")
    })

    test("ANKITMISHRA should return Password Should have Minmum one small character" , () => {
        expect(Validate("ANKITMISHRA")).toBe("Password Should have Minmum one small character")
    })

    test("ANKITMISHRa should return Password Should have Minmum one number" , () => {
        expect(Validate("ANKITMISHRa")).toBe("Password Should have Minmum one number")
    })
    
    test("ANKITMISHRa12 should return Password Should Contain Atleast one Character from   !@#$%^&*(),.<>/';:][{}|?" , () => {
        expect(Validate("ANKITMISHRa12")).toBe("Password Should Contain Atleast one Character from   !@#$%^&*(),.<>/';:][{}|?")
    })
    
    test("ANKITMISHRa@12 should return Now Your Password is Strong" , () => {
        expect(Validate("ANKITMISHRa@12")).toBe("Now Your Password is Strong")
    })
})