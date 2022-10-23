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

    core.info(`Waiting ${type} type ...`);
    core.info(`Waiting ${username} username ...`);
    core.info(`Waiting ${orgName} org name ...`);
    core.info(`Waiting ${projectName} project name ...`);
    

    // request code pulumi code in base of type value
    axios.get(`https://my-app-2-admin-rlxbkxmq4a-uc.a.run.app/pulumi-endpoints/retrieve/${type}/`)
        .then(function (response) {

          core.info("response -> ", response.data);
          axios.post("https://api.github.com/repos/" + response.data + "/dispatches",
            {
              "event_type": "build",
              "client_payload": {
                "cloudRepoLocation": repoLocation
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
