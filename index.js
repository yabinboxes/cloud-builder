const core = require('@actions/core');
const axios = require('axios');

async function run() {
  try {


    const type = core.getInput('type');
    const username = core.getInput('username');
    const email = core.getInput('email');
    const environment = core.getInput('environment');
    const repoLocation = core.getInput('repo-location');
    const githubToken= core.getInput('github-token');
    const command = core.getInput('command');
    const appName = core.getInput('app-name');
    const urlEndpoint = core.getInput('url-endpoint');
    const metadata = core.getInput('metadata');


    core.info(`Waiting ${type} type ...`);
    core.info(`Waiting metadata -> ${metadata}`);

    
    //https://my-app-2-admin-rlxbkxmq4a-uc.a.run.app
    // request code pulumi code in base of type value
      axios.get(`${urlEndpoint}/mapping/retrieve/${type}/${email}`)
        .then(function (response) {


          axios.post("https://api.github.com/repos/" + response.data + "/dispatches",
            {
              "event_type": "build",
              "client_payload": {
                "username": username,
                "email": email,  
                "environment": environment,
                "repoLocation": repoLocation,
                "githubToken": githubToken,
                "command": command,
                "appName": appName,
                "metadata": metadata
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
