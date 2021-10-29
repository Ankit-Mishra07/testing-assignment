const { TestWatcher } = require("@jest/core")

describe("To Equal", () => {
    test("Should return pass" , ()=> {
        expect({}).toEqual({})
    })
    test("Should return pass" , ()=> {
        expect([]).toEqual([])
    })
    test("Should return pass" , ()=> {
        expect({ a: 1, b: 2 }).toEqual({ a:1, b:2 })
    })
    test("Should return pass" , ()=> {
        expect([ 1, 2, 3 ]).toEqual([ 1, 2, 3 ])
    })
    test("Should return pass" , ()=> {
        expect({ a: 1, b: { c: 1, d: 2 }}).toEqual({ a: 1, b: { c: 1, d: 2 }} )
    })
    // test("Should return fail" , ()=> {
    //     expect({ a: 1, b: { c: 1, d: 2 }}).toEqual({ a: 1, b: { e: 1, d: 2 }})
    // })
    // test("Should return fail" , ()=> {
    //     expect( [ 1, 2, [ 1, 3] ] ).toEqual([ 1, 2, [ 1, 2]  ])
    // })
})