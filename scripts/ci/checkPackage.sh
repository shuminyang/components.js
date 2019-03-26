#!/bin/sh
set -e

echo "- Checking package..."
yarn $1 test
yarn $1 format
yarn $1 lint
yarn $1 build