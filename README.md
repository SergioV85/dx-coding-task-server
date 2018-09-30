Server application for cash machine application (DX coding task)

# Prerequisites
* Node.js >= 8.10
* Serverless >= 1.32

# Installation
Run `npm i` for installing development dependenices

# Deploy to AWS account
Setup own AWS account for deploying the app. Here is [the manual](https://serverless.com/framework/docs/providers/aws/guide/credentials/).
Run `serverless deploy -v`.
Check assigned API URL in AWS Control Panel

# Run Lambda function localyy
Run `serverless offline`.
Open http://localhost:3000 as local server.
