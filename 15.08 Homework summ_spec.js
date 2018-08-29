function summ(a, b) {
    return a + b;
    }

describe('compute summ of two given integers', function () {
    it('should return summ of two integers', function () {
        expect(summ(3, 7)).toEqual(10);
    });
});
