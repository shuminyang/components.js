#!/bin/sh
set -e

echo "@components.js - PR script - v0.0.1"
echo ""

echo "- Reading env..."
source scripts/ci/env.sh

echo "- Checking incoming branch..."
TO_LOWER_CASE=$(echo "$TRAVIS_PULL_REQUEST_BRANCH" | tr '[:upper:]' '[:lower:]')
[[ $TO_LOWER_CASE =~ ^.+\((.*)\).*$ ]] && PACKAGE_NAME=${BASH_REMATCH[1]}
if [ -z "$PACKAGE_NAME" ]
then
  echo "[FAIL] Invalid request branch"
  exit 1
fi

# Check package
bash scripts/ci/checkPackage.sh $PACKAGE_NAME
