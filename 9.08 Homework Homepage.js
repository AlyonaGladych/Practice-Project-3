let BasePage = require('./BasePage.js');

class HomePage extends BasePage {
    constructor(type, username) {
        super(type, username); 
        this.name = username;
    }
    showUserInfo() {
        console.log(`You are logged in as ${this.name}`);
    }
}

module.exports = HomePage;
