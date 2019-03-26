#!/bin/sh
set -e

echo "@components.js - PR script - v0.0.1"
echo ""

echo "- Reading env..."
source ./scripts/ci/env.sh

echo "- Checking incoming branch..."
if [[ ! -z "$TRAVIS_BRANCH" ]]
then
  TO_LOWER_CASE=$(echo "$TRAVIS_BRANCH" | tr '[:upper:]' '[:lower:]')
  [[ $TO_LOWER_CASE =~ ^.+\((.*)\).*$ ]] && PACKAGE_NAME=${BASH_REMATCH[1]}
elif [[ ! -z "$TRAVIS_PULL_REQUEST_BRANCH" ]]
then
  TO_LOWER_CASE=$(echo "$TRAVIS_PULL_REQUEST_BRANCH" | tr '[:upper:]' '[:lower:]')
  [[ $TO_LOWER_CASE =~ ^.+\((.*)\).*$ ]] && PACKAGE_NAME=${BASH_REMATCH[1]}
fi

if [ -z "$PACKAGE_NAME" ]
then
  echo "[FAIL] Invalid request branch"
  exit 1
fi

# Check package
./scripts/ci/checkPackage.sh $PACKAGE_NAME
