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
    const orgName = core.getInput('org_name');
    const projectName = core.getInput('project_name');
    const repo = core.getInput('repo');



    //const octokit = github.getOctokit(password);

    //const { context = {} } = github;
    //const { pull_request } = context.payload;

    let typeValue = '';
    let uiCloudBuilderUrl = '';

    core.info(`Waiting ${ms} milliseconds ...`);
    core.info(`Waiting ${type} type ...`);
    core.info(`Waiting ${user} user ...`);
    core.info(`Waiting ${username} username ...`);
    core.info(`Waiting ${orgName} org name ...`);
    core.info(`Waiting ${projectName} project name ...`);
    core.info(`Waiting ${repo} repo ...`);

    if (type !== 'deploy') {

      // read ui cloud app builder to return type value url
      axios.get(uiCloudBuilderUrl)
      .then(function (response) {
        typeValue = response;
        core.info(response);
      })
      .catch(function (error) {
        core.info(error);
      });
     

    } else if (type === 'deploy') {

      typeValue = 'https://api.github.com/repos/yabinboxes/gcp-deploy-cloud-run/dispatches';

    } 

    // execute pulumi simple deployment dispatch
    if(typeValue !== '')
    {
      axios.post(typeValue,
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
          core.info(response);
        })
        .catch(function (error) {
          core.info(error);
        });
    } else {
      throw 'empty type value';
    }
    

    //console.log(JSON.stringify(github, null, "\t"));


  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
