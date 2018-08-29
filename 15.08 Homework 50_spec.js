function check50(a, b) { 
    if (a == 50 || b == 50 || a + b == 50) return true;
    return false;
}

console.log(check50(0, 50));

describe('compute summ of two given integers', function () {
    it('2 + 2 = 4', function () {
        expect(check50(50, 0)).toBe(true);
    });
});

describe('compute summ of two given integers', function () {
    it('2 + 2 = 4', function () {
        expect(check50(40, 10)).toBe(true);
    });
});

describe('compute summ of two given integers', function () {
    it('2 + 2 = 4', function () {
        expect(check50(-7, 57)).toBe(true);
    });
});

describe('compute summ of two given integers', function () {
    it('2 + 2 = 4', function () {
        expect(check50(10, 20)).toBe(false);
    });
});

describe('compute summ of two given integers', function () {
    it('2 + 2 = 4', function () {
        expect(check50("a", 0)).toBe(false);
    });
});
