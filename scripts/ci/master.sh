#!/bin/sh
set -e

echo "@components.js - Master script - v0.0.1"
echo ""

echo "- Reading env..."
source ./scripts/ci/env.sh

echo "- Checking incoming branch..."
[[ $TRAVIS_PULL_REQUEST_BRANCH =~ ^staging-(.*)$ ]] && BASH_REMATCH
if [ -z "$PACKAGE_NAME" ]
then
  echo "[FAIL] Invalid request branch"
  exit 1
fi

# Check package
bash ./scripts/ci/checkPackage.sh $PACKAGE_NAME

echo "- Updating packages..."
for PACKAGE in ${PACKAGES[@]}; do
  if [[ $PACKAGE != base && ! -d "packages/$PACKAGE" ]]
  then
    echo "[FAIL] package '$PACKAGE' doesn't exist"
    exit 1
  else
    if [ $PACKAGE != $PACKAGE_NAME ]
    then
      echo "-- Updating staging-$PACKAGE..."
      git pull origin master:staging-$PACKAGE
      git push origin staging-$PACKAGE:staging-$PACKAGE
    fi
  fi
done
