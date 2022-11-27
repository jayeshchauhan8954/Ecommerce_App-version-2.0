let Math = require("./../../myapp/Math");
// xtest("my first test", () => {
//     let a = 5;
//     expect(a).toBe(5);
// });
// describe("my falsy test suite", () => {

//     xtest("checking null", () => {
//         let a = null;
//         expect(a).toBeNull();
//     });
//     xtest("checking null", () => {
//         let a = null;
//         expect(a).toBeNull();
//         expect(a).toBeFalsy();
//     });
//     xtest("checking null", () => {
//         let a = null;
//         expect(a).toBeNull();
//         expect(a).toBeFalsy();
//         expect(a).toBeUndefined();
//     });
// });

/*

describe("My calcultor class", () => {
    let totalSum = 0;
    beforeEach(() => {
        totalSum = 0;
    });
    afterEach(() => {
        console.log("executed after every test");
    });

    xtest("should test sum method", () => {
        expect(Math.sum(2, 3)).toBe(5);
        expect(Math.sum(-1, -1)).toBe(-2);
        expect(Math.sum()).toBe("Please enter number");
        expect(Math.sum("a", "b")).toBe("Please enter number");
    });

    xtest("should test square method", () => {
        expect(Math.square(2)).toBe(4);
        expect(Math.square(0)).toBe(0);
        expect(Math.square(-5)).toBe(25);
        expect(Math.square()).toBe("Please enter a number");
        expect(Math.square(Infinity)).toBe(Infinity);
        expect(Math.square(2, 9)).toBe(4);
    });
    xtest("add total", () => {
        let total = Math.sum(2, 3);
        totalSum = totalSum + total;
        expect(totalSum).toBe(5)
    });

    xtest("add total", () => {
        let total = sum(2, 3);
        totalSum = totalSum + total;
        expect(totalSum).toBe(5)
    });
})
*/
