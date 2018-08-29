exports.config = {
  SELENIUM_PROMISE_MANAGER: 0,
  directConnect: false,
  framework: "jasmine",
  allScriptsTimeout: 45000,
  getPageTimeout: 30000,
  specs: ["login_spec2.js"],
 
  capabilities: {
    browserName: 'firefox'
},
params: {
    username: "alyonagladych@gmail.com",
    password: "x&b*zmzA^oj"
}

};
