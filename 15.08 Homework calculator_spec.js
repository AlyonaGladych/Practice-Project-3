function calculator(a, b, action) {

    if (typeof a !== "number" || typeof b !== "number")  
        return "Please enter the numbers or google first how calculator works"; 

    switch (action) {
        case "+": return getSumm(a, b);
        case "-": return getDiff(a, b);
        case "*": return getMult(a, b);
        case "/": return getDiv(a, b);
    }
}
function getSumm(a, b) {
    return a + b;
}

function getDiff(a, b) {
    return a - b;
}

function getMult(a, b) {
    return a * b;
}

function getDiv(a, b) {
    if (b)
    return a / b;
    else return "You can't devide by 0. Please have some dignity and enter appropriate number";
}
console.log(calculator(8, 0, "/"));

describe('calculator', function () {
    it('check summ', function () {
        expect(calculator(- 5, 10, "+")).toEqual(5);
    });
});

describe('calculator', function () {
    it('check diff', function () {
        expect(calculator(1, 1, '-')).toEqual(0);
    });
});

describe('calculator', function () {
    it('check mult', function () {
        expect(calculator(3, 4, '*')).toEqual(12);
    });
});

describe('calculator', function () {
    it('check mult', function () {
        expect(calculator(-8, 4, '/')).toEqual(-2);
    });
});

describe('calculator', function () {
    it('check div by 0', function () {
        expect(calculator(8, 0, '/')).toEqual('You can\'t devide by 0. Please have some dignity and enter appropriate number');
    });
});

describe('calculator', function () {
    it('check not numbers', function () {
        expect(calculator('a', 3, '/')).toEqual('Please enter the numbers or google first how calculator works');
    });
});
