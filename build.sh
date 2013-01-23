#! /bin/bash
cd cloud
echo ‘Installing dependencies’
npm install -d
export NODE_PATH=$PWD
echo ‘Running Makefile’
make test
cd ..