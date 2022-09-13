const core = require('@actions/core');
const github = require('@actions/github');


// most @actions toolkit packages have async methods
async function run() {
  try {
    const ms = core.getInput('milliseconds');
    const type = core.getInput('type');
    const user = core.getInput('user');
    
    core.info(`Waiting ${ms} milliseconds ...`);
    core.info(`Waiting ${type} type ...`);
    core.info(`Waiting ${user} user ...`);

    console.log(JSON.stringify(github, null, "\t"));

   
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
