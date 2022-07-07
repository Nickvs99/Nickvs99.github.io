#!/usr/bin/env sh

BRANCH_NAME="gh-pages"

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# npm run build rebuilds the dist folder everytime and therefore deletes the
# git repo in the dist folder. Thus the git repo needs to be initialized each time
git init

git checkout -b $BRANCH_NAME

git add -A
git commit -m 'deploy'

git remote add origin https://github.com/Nickvs99/Nickvs99.github.io.git
git push -f origin $BRANCH_NAME

cd ..