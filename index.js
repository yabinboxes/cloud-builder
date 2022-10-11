const core = require('@actions/core');
const axios = require('axios');

async function run() {
  try {


    const type = core.getInput('type');
    const user = core.getInput('user');
    const username = core.getInput('username');
    const password = core.getInput('password');
    const orgName = core.getInput('orgname');
    const projectName = core.getInput('projectname');
    const repo = core.getInput('repo');

    let typeValue = '';
    //let uiCloudBuilderUrl = '';

    core.info(`Waiting ${type} type ...`);
    core.info(`Waiting ${user} user ...`);
    core.info(`Waiting ${username} username ...`);
    core.info(`Waiting ${orgName} org name ...`);
    core.info(`Waiting ${projectName} project name ...`);
    core.info(`Waiting ${repo} repo ...`);



    // request code pulumi code in base of type value
    axios.get(`https://my-app-2-admin-rlxbkxmq4a-uc.a.run.app/pulumi-endpoints/retrieve/${type}`)
        .then(function (response) {
          core.info(response);
    });

    /*if (type !== 'deploy') {
      core.info(`Deploying ...`);

      axios.get('/user?ID=12345')
        .then(function (response) {
          core.info(response);

          // handle success
          typeValue = response;

          axios.post("https://api.github.com/repos/" + typeValue + "/dispatches",
            {
              "event_type": "build",
              "client_payload": {
                "cloudRepoLocation": username + '/' + repository,
                "cloudRepository": repository,
                "appPort": 80,
              }
            }, {
            auth: {
              username: username,
              password: password
            }
          });

        })
        .catch(function (error) {
          // handle error
          core.info(error);
        });

    } else if (type === 'deploy') {

      axios.post("https://api.github.com/repos/yabinboxes/gcp-deploy-cloud-run/dispatches",
        {
          "event_type": "build",
          "client_payload": {
            "cloudRepoLocation": username + '/' + repository,
            "cloudRepository": repository,
            "appPort": 80
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
      core.info(`none ...`);
    }*/




  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
