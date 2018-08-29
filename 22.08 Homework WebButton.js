let WebControl = require("./WebControls.js");

class WebButton extends WebControl {
    constructor(webElement, title) {
        super(webElement, title);
    }
}

module.exports = WebButton;
