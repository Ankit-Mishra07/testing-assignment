const {Sum} = require("./MatrixSum")

describe("The sum of elements of matrix" , () => {
    test("Should return 24" , ()=> {
        let mat = [
            [1,2,3],
            [1,2,3],
            [1,2,3],
            [1,2,3]
        ]
        expect(Sum(mat)).toBe(24)
    })

    test("Should return 12" , ()=> {
        let mat = [
            [1,2,3],
            [1,2,3]
        ]
        expect(Sum(mat)).toBe(12)
    })

    test("Should return 30" , ()=> {
        let mat = [
            [0,0,0,0],
            [1,2,3,4],
            [1,2,3,4],
            [1,2,3,4]
        ]
        expect(Sum(mat)).toBe(30)
    })

    test("Should return 20" , ()=> {
        let mat = [
            [-1,2,3],
            [5,2,3],
            [6,2,3],
            [-10,2,3]
        ]
        expect(Sum(mat)).toBe(20)
    })

    test("Should return 0" , ()=> {
        let mat = [
            [-3,0,3],
        ]
        expect(Sum(mat)).toBe(0)
    })

    test("Should return 22" , ()=> {
        let mat = [
            [1,2,3],
            [0,2,3],
            [0,2,3],
            [1,2,3]
        ]
        expect(Sum(mat)).toBe(22)
    })

    test("Should return 24" , ()=> {
        let mat = [
            [1,2,3],
            [1,2,3],
            [1,2,3],
            [1,2,3],
            [1,2,3],
            [1,2,3],
            [1,2,3]
        ]
        expect(Sum(mat)).toBe(42)
    })


    test("Should return 0" , ()=> {
        let mat = [
            [-1,-2,-3],
        ]
        expect(Sum(mat)).toBe(0)
    })
})