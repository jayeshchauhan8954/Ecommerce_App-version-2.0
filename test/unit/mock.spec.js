let checkIfSystemWorking = (n, sendEmail) => {
    let isSystemWorking = false;
    for (let i = 0; i < n; i++) {
        let delivery = sendEmail();
        isSystemWorking = delivery.passed > delivery.failed;
    }

    return isSystemWorking;
};

describe("Mock functions", () => {
    let delivery = {
        passed: 2,
        failed: 3,
    };
    let sendEmail = jest.fn().mockReturnValue(delivery);

    test("first mock example", () => {
        expect(checkIfSystemWorking(5, sendEmail)).toBe(true);
    });
});


// let calculateEmailSent = (n, sendEmail) => {
//     let totalEmailSend = 0;
//     for (let i = 0; i < 5; i++) {
//         let delivery = sendEmail();
//         totalEmailSend = delivery.passed >= delivery.failed;
//     }
//     return totalEmailSend;
// }

// describe("mock functions", () => {
//     let delivery = {
//         passed: 3,
//         failed: 2
//     }
//     let sendEmail = jest.fn().mockReturnValue(delivery);

//     test("first mock example", () => {
//         expect(calculateEmailSent(5, sendEmail)).toBe(true);
//     })
// })