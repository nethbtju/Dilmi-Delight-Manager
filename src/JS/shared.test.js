const {expect} = require("@jest/globals");
const Manager = require("./shared");
test('Add Topper Function in Manager', () => {
    // The first parameter of the class to be the input name
    let queue = [1]
    const main = new Manager(queue);

    expect(main._queue).toBe("[]");

});

