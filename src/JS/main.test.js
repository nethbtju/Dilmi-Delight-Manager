const main = require('./main');
const {expect} = require("@jest/globals");

test('Test topper class', () => {
    // The first parameter of the class to be the input name
    expect(main.topperName).toBe("Mickey Mouse");

    // The second parameter of the class to be the input date
    expect(main.dueDate).toBe("03/03/2023");

    // the third parameter of the class to be the input client name
    expect(main.clientName).toBe("Bundo");

    // the fourth parameter of the class to be the input client number
    expect(main.clientNum).toBe("0435773255");
});

