#!/usr/bin/env bash

deploy() {
    cd /home/pi/hayden/lq_vue/backend &&
    git pull origin $1 &&
#    npm install &&
    npm run pi
}

if [[ -z $1 ]]; then
  echo "Please enter a commit message"
  exit 1
fi

git add . &&
git commit -m "$1" &&
git push origin $(git rev-parse --abbrev-ref HEAD)

# TODO the -A option is not secure. Come up with a different solution
# try this https://itnext.io/how-to-auto-deploy-your-app-with-one-command-12f9ac00d34a
sshpass -p $PILOPW ssh pi@$PILOIP "$(typeset -f deploy); deploy $(git rev-parse --abbrev-ref HEAD)"
