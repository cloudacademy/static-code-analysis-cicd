# static-code-analysis-cicd

Example of integrating static code analysis into a CI/CD pipeline. The project includes a sample client and server web application in the `src/` directory written in ES6 JavaScript. For demonstration purposes, the static analysis tool used is ESLint. Use of other static analyis tools and/or other programming languages would follow a similar pattern.

The CI/CD pipeline chosen for demonstration purposes is a three-stage continuous deployment pipeline in AWS CodePipeline. The continuous deployment pipeline stages are:

1. Amazon S3 source
2. AWS CodeBuild build
3. AWS CodeDeploy EC2 deployment

The source code initially has a security vulnerability that can be detected by using ESLint. The final environment is as follows:

![Final Environment](https://user-images.githubusercontent.com/3911650/39382293-3fdec066-4a22-11e8-8b67-84abc98b17e5.png)

## Getting Started

Deploy the CloudFormation `infrastructure/cloudformation.json` template. The template creates a user with the following credentials and minimal required permisisons to complete the Lab:

- Username: _student_
- Password: _password_

## Instructions

1. In the Cloud9 environment, clone the repo with `git clone https://github.com/lrakai/static-code-analysis-cicd.git`
1. Install ESLint `npm install eslint@4.19.1 --save-dev`
1. Configure ESLint to use the Standard popular sytle guide `eslint --init`
1. Add a validate script to `package.json`: `"validate": "./node_modules/.bin/eslint server/ client/"`
1. Include the validation during the build stage by adding the following command to the build object in `buildspec.yml`: `- npm run validate`
1. Package the source with `bash package.sh`
1. Upload the source package to the `codeartifacts` S3 bucket
1. Watch the CodePipeline pipeline fail the build stage because of ESLint errors
1. Fix the error and upload a new version of the source to deploy

## Cleaning Up

Delete the CloudFormation stack to remove all the resources used in the Lab.