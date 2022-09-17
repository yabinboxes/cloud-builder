const core = require('@actions/core');
const axios = require('axios');

async function run() {
  try {
    //const ms = core.getInput('milliseconds');
    const type = core.getInput('type');
    const user = core.getInput('user');
    const username = core.getInput('username');
    const password = core.getInput('password');
    //const orgName = core.getInput('org_name');
    const projectName = core.getInput('project_name');
    const repo = core.getInput('repo');

    //let typeValue = '';
    //let uiCloudBuilderUrl = '';

    //core.info(`Waiting ${ms} milliseconds ...`);
    core.info(`Waiting ${type} type ...`);
    core.info(`Waiting ${user} user ...`);
    //core.info(`Waiting ${username} username ...`);
    //core.info(`Waiting ${orgName} org name ...`);
    core.info(`Waiting ${projectName} project name ...`);
    core.info(`Waiting ${repo} repo ...`);

    axios.post('https://api.github.com/repos/yabinboxes/gcp-deploy-cloud-run/dispatches',
      {
        "event_type": "build",
        "client_payload": {
          "unit": false,
          "integration": true,
          "repo": repo
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

    /*if (type !== 'deploy') {

      core.info(`not deploy...`);
      // read ui cloud app builder to return type value url
      axios.get(uiCloudBuilderUrl)
      .then(function (response) {
        typeValue = response;
        core.info(response);
      })
      .catch(function (error) {
        core.info(error);
      });
      
     

    } else */
    
    /*if (type === 'deploy') {

      core.info(`deploy...`);
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
    }*/
    



  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
