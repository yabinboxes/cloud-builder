const core = require('@actions/core');
const github = require('@actions/github');
const httpClient = require('@actions/http-client');


// most @actions toolkit packages have async methods
async function run() {
  try {
    const ms = core.getInput('milliseconds');
    const type = core.getInput('type');
    const user = core.getInput('user');
    const urlSimpleDeployment = 'https://github.com/yabinboxes/gcp-deploy-cloud-run';
    
    core.info(`Waiting ${ms} milliseconds ...`);
    core.info(`Waiting ${type} type ...`);
    core.info(`Waiting ${user} user ...`);

    if(type !== 'deploy') {

    } else if(type === 'deploy') {

      // execute pulumi simple deployment dispatch

      httpClient.



      /*axios.post("https://api.github.com/repos/yabinboxes/gcp-deploy-cloud-run/dispatches", 
        {
            "event_type": "build",
            "client_payload": {
                "unit": false,
                "integration": true,
                "repo": "yabinboxes/pulumi-backend"
            }
        }, {
            auth: {
              username: "",
              password: ""
            }
        });*/
      

    } else {

    }

    //console.log(JSON.stringify(github, null, "\t"));

   
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
