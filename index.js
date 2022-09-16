const core = require('@actions/core');
//const github = require('@actions/github');
const axios = require('axios');


// most @actions toolkit packages have async methods
async function run() {
  try {
    const ms = core.getInput('milliseconds');
    const type = core.getInput('type');
    const user = core.getInput('user');
    const username = core.getInput('username');
    const password = core.getInput('password');

    //const octokit = github.getOctokit(password);

    //const { context = {} } = github;
    //const { pull_request } = context.payload;

    //const urlSimpleDeployment = 'https://github.com/yabinboxes/gcp-deploy-cloud-run';
    
    core.info(`Waiting ${ms} milliseconds ...`);
    core.info(`Waiting ${type} type ...`);
    core.info(`Waiting ${user} user ...`);
    core.info(`Waiting ${username} username ...`);

    if(type !== 'deploy') {
      core.info(`Deploying ...`);
    } else if(type === 'deploy') {

      // execute pulumi simple deployment dispatch

    

    axios.post("https://api.github.com/repos/yabinboxes/gcp-deploy-cloud-run/dispatches", 
        {
            "event_type": "build",
            "client_payload": {
                "unit": false,
                "integration": true,
                "repo": "yabinboxes/pulumi-backend"
            }
        }, {
            auth: {
              username: username,
              password: password
            }
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      

    } else {
      core.info(`none ...`);
    }

    //console.log(JSON.stringify(github, null, "\t"));

   
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
