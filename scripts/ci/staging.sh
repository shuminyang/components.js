#!/bin/sh
set -e

echo "@components.js - Staging script - v0.0.1"
echo ""

echo "- Reading env..."
source ./scripts/ci/env.sh

echo "- Checking incoming branch..."
[[ $TRAVIS_BRANCH =~ ^staging-(.*)$ ]] && PACKAGE_NAME=${BASH_REMATCH[1]}
if [ -z "$PACKAGE_NAME" ]
then
  echo "[FAIL] Invalid branch"
  exit 1
fi

# Check package
bash ./scripts/ci/checkPackage.sh $PACKAGE_NAME

echo "- Updating develop-$PACKAGE..."
git pull origin staging-$PACKAGE:develop-$PACKAGE
git push origin develop-$PACKAGE:develop-$PACKAGE
