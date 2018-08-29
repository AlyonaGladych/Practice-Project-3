exports.config = {
  SELENIUM_PROMISE_MANAGER: 0,
  directConnect: false,
  framework: "jasmine",
  allScriptsTimeout: 45000,
  getPageTimeout: 30000,
  specs: ["22.08 Homework login_spec.js"],
 
  capabilities: {
    browserName: 'firefox'
},
params: {
    username: "alyonagladych@gmail.com",
    password: "x&b*zmzA^oj"
}

};
