const { exec } = require('child_process');
const add = `git add .`
const commit = `git commit -m "commit"`
const push = `git push`
var cron = require('node-cron');

cron.schedule('*/60 * * * * *', () => {
    const command = 'echo "pushed at $(date)" >> log.txt'
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error}`);
            return;
        }
        console.log('Execute');
        setTimeout(() => {
            executeCommit()
        }, 5000);
        console.log(stdout);
        if (stderr) {
            console.error(stderr);
        }
    });

});
function executeCommit() {
    exec(add, (error, stdout, stderr) => {
        if (error) {
            console.error(error);
            return;
        }
        console.log(`Git added, ${stdout}`);
        exec(commit, (error, stdout, stderr) => {
            if (error) {
                console.error(error);
                return;
            }
            console.log(`Git commited, ${stdout}`);
            exec(push, (error, stdout, stderr) => {
                if (error) {
                    console.error(error);
                    return;
                }
                console.log(`Git pushed, ${stdout}`);
                if (stderr) {
                    console.error(stderr);
                }
            });
            if (stderr) {
                console.error(stderr);
            }
        });
        if (stderr) {
            console.error(stderr);
        }
    });

}