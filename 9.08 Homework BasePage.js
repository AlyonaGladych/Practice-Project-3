class BasePage {
    constructor(webPage) {
        this.page = webPage;
    }
    load() {
        console.log(`Welcome to ${this.page}`);
    }
}

module.exports = BasePage;
