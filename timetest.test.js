const { TestWatcher } = require("@jest/core")
const {convertTime} = require("./timetest")

describe("milliseconds to hour, minute & second is " , () => {
    test("5200 should return 5 seconds", ()=> {
        expect(convertTime(5200)).toBe("5 seconds")
    })

    test("60000 should return 1 minute", ()=> {
        expect(convertTime(60000)).toBe("1 minute ")
    })

    test("180000 should return 3 minutes", ()=> {
        expect(convertTime(180000)).toBe("3 minutes ")
    })

    test("200000 should return 3 minutes 20 seconds", ()=> {
        expect(convertTime(200000)).toBe("3 minutes 20 seconds")
    })

    test("3200000 should return 3 minutes 20 seconds", ()=> {
        expect(convertTime(3200000)).toBe("53 minutes 20 seconds")
    })

    test("3600000 should return 1 hour ", ()=> {
        expect(convertTime(3600000)).toBe("1 hour  ")
    })
})