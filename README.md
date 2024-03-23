# streak-keeper

just an automated script to keep my git commit streak

idk just deploy to a vps with pm2, run 
`pm2 start index.js`
, remember to setup ssh keys for github account on the vps to avoid asking for credentials info in the vps terminal so that it can push automatically

this is set to automatically push every 4 hours, starting at 00:00 pm
