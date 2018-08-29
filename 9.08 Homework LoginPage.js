let BasePage = require('./9.08 Homework BasePage.js');

class LoginPage extends BasePage {
    constructor(username, password) {
        super(username, password);
        this.name = username;
        this.passw = password;
    }
    login() {
    console.log(`Enter username`);
    console.log(`Enter password`);
    let arr = [];
    
    for (let i =0; i < this.passw.length; i++) arr[i] = this.passw[i];

    console.log(`You are logged in as ${this.name}, your password is ${arr.join("")}`);
    }
}

module.exports = LoginPage;
