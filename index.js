const core = require('@actions/core');
const axios = require('axios');

async function run() {
  try {


    const type = core.getInput('type');
    const username = core.getInput('username');
    const environment = core.getInput('environment');
    const repoLocation = core.getInput('repo-location');
    const orgName = core.getInput('org-name');
    const projectName = core.getInput('project-name');
    const githubToken= core.getInput('github-token');
    const command = core.getInput('command');
    const appName = core.getInput('app-name');
    const urlEndpoint = core.getInput('url-endpoint');
    const metadata = core.getInput('metadata');


    core.info(`Waiting ${type} type ...`);
    core.info(`Waiting ${username} username ...`);
    core.info(`Waiting ${orgName} org name ...`);
    core.info(`Waiting ${projectName} project name ...`);
    core.info(`Waiting ${appName} project name ...`);
    core.info(`Waiting metadata -> ${metadata}`);

    
    //https://my-app-2-admin-rlxbkxmq4a-uc.a.run.app
    // request code pulumi code in base of type value
    axios.get(`${urlEndpoint}/pulumi-endpoints/retrieve/${type}/`)
        .then(function (response) {

          core.info("response -> ", response.data);
          axios.post("https://api.github.com/repos/" + response.data + "/dispatches",
            {
              "event_type": "build",
              "client_payload": {
                "username": username,
                "environment": environment,
                "repoLocation": repoLocation,
                "orgName": orgName,
                "projectName": projectName,
                "githubToken": githubToken,
                "command": command,
                "appName": appName
              }
            }, {
            auth: {
              username: username,
              password: githubToken
            }
          });
          
    })
    .catch(function (error) {
      // handle error
      core.info("error-> ", error);
    });

    

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
