const { first, last, concatenateStrings, chunk } = require('./array_utils.js');

describe('Array Utilities', () => {
    // Tests for first() function
    describe('first', () => {
        test('should return empty array when input is null', () => {
            expect(first(null, 1)).toEqual([]);
        });

        test('should return empty array when n is less than or equal to 0', () => {
            expect(first([1, 2, 3], 0)).toEqual([]);
            expect(first([1, 2, 3], -1)).toEqual([]);
        });

        test('should return first element when n is null', () => {
            expect(first([1, 2, 3])).toBe(1);
        });

        test('should return first n elements', () => {
            expect(first([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
        });

        test('should return all elements when n is greater than array length', () => {
            expect(first([1, 2, 3], 5)).toEqual([1, 2, 3]);
        });
    });

    // Tests for last() function
    describe('last', () => {
        test('should return empty array when input is null', () => {
            expect(last(null)).toEqual([]);
        });

        test('should return last element when n is null', () => {
            expect(last([1, 2, 3])).toBe(3);
        });

        test('should return last n elements', () => {
            expect(last([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);
        });

        test('should return all elements when n is greater than array length', () => {
            expect(last([1, 2, 3], 5)).toEqual([1, 2, 3]);
        });
    });

    // Tests for concatenateStrings() function
    describe('concatenateStrings', () => {
        test('should return empty string for null input', () => {
            expect(concatenateStrings(null)).toBe('');
        });

        test('should concatenate array of strings', () => {
            expect(concatenateStrings(["Red", "Green", "White", "Black"])).toBe('RedGreenWhiteBlack');
        });

        test('should handle empty array', () => {
            expect(concatenateStrings([])).toBe('');
        });
    });

    // Tests for chunk() function
    describe('chunk', () => {
        test('should split array into chunks of specified size', () => {
            expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
        });

        test('should handle empty array', () => {
            expect(chunk([], 2)).toEqual([]);
        });

        test('should handle size larger than array length', () => {
            expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
        });

        test('should handle size of 1', () => {
            expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
        });
    });
});