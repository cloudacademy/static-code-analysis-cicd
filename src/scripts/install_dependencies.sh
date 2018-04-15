#!/bin/bash
source /home/ec2-user/.bash_profile
test -d /home/ec2-user/app || (mkdir /home/ec2-user/app)
rm -rf /home/ec2-user/app/*
cp -R . /home/ec2-user/app
cd /home/ec2-user/app
cp -R prod_node_modules/. node_modules
