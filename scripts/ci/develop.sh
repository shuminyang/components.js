#!/bin/sh
set -e

echo "@components.js - Develop script - v0.0.1"
echo ""

echo "- Reading env..."
source ./scripts/ci/env.sh

echo "- Checking incoming branch..."
[[ $TRAVIS_BRANCH =~ ^develop-(.*)$ ]] && PACKAGE_NAME=${BASH_REMATCH[1]}
if [ -z "$PACKAGE_NAME" ]
then
  echo "[FAIL] Invalid branch"
  exit 1
fi

# Check package
./scripts/ci/checkPackage.sh $PACKAGE_NAME
