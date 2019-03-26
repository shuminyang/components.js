#!/bin/sh
set -e

echo "@components.js - CI script - v0.0.1"
echo ""

if [ $TRAVIS_EVENT_TYPE == 'push' ]
then
  if [[ "$TRAVIS_BRANCH" == develop-* ]]
  then
    bash ./scripts/ci/develop.sh
  elif [[ "$TRAVIS_BRANCH" == staging-* ]]
  then
    bash ./scripts/ci/staging.sh
  elif [[ "$TRAVIS_BRANCH" == master ]]
  then
    bash ./scripts/ci/master.sh
  else
    bash ./scripts/ci/pr.sh
  fi
fi
