const { execSync } = require('child_process');
const usersname = execSync('git config user.name', {encoding: "utf-8"}).trim();
console.log(usersname) /*цей код я вкрав в віті який він вкрав в гпт бо я не знав чи треба було просто прописати console.log("Hello Hellndodger"); чи треба було аби він підвязувався до гіта */