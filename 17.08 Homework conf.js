exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['17.08 Homework spec.js'],
    capabilities: {
        browserName: 'firefox'
    },
    params: {
        number1: 4,
        number2: 3
    }
}
