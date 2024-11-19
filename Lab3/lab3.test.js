const { mean } = require('./notation.js');
const { exf } = require('./echo.js');

// Test for notation.js
describe('Mean Function', () => {
    test('calculates the mean of an array of numbers', () => {
        const scores = [85, 90, 92, 88, 87];
        expect(mean(scores)).toBe(88.4);
    });

    test('returns 0 for an empty array', () => {
        expect(mean([])).toBe(0);
    });
});

// Test for echo.js
describe('exf Function', () => {
    console.log = jest.fn(); // Mock console.log

    test('logs the string the specified number of times', () => {
        exf("echo", 3);
        expect(console.log).toHaveBeenCalledTimes(3);
        expect(console.log).toHaveBeenCalledWith("echo");
    });

    test('logs a different string the specified number of times', () => {
        exf("JS from server", 2);
        expect(console.log).toHaveBeenCalledTimes(2);
        expect(console.log).toHaveBeenCalledWith("JS from server");
    });
}); 