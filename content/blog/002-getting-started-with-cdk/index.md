---
title: Getting started with AWS CDK
date: "2023-07-08"
description: How to get started using AWS Cloud Development Kit for the beginner. An overview of essential knowledge, alongside a practical example.
---

The AWS Cloud Development Kit (AWS CDK) is an open-source software development framework that allows you to define your cloud infrastructure in code using familiar programming languages. It simplifies, automates, and accelerates cloud development by providing high-level constructs, consistent workflows, and reliable deployments. In this article, we will introduce the key concepts and features of the AWS CDK, and show how to install and configure it, and create a simple app using one of the supported programming languages.

## What are the key concepts and features of the AWS CDK?

The AWS CDK is based on a few core concepts and features that you need to understand before using it. These are:

- **Apps**: An app is a collection of one or more stacks that define your cloud resources. An app is the main unit of deployment in the AWS CDK. You can use the **`cdk init`** command to create a new app from a template, or use an existing app as a starting point.
- **Stacks**: A stack is a logical unit of deployment that maps to an AWS CloudFormation stack. A stack can contain one or more constructs, which are the building blocks of your cloud infrastructure. A stack can also have dependencies on other stacks, which means that they will be deployed in the correct order.
- **Constructs**: A construct is a reusable component that encapsulates one or more cloud resources and logic. A construct can represent a single resource, such as an Amazon S3 bucket or an Amazon EC2 instance, or a higher-level abstraction that provides sensible and secure defaults for your resources, such as an Amazon ECS service or an AWS Lambda function. The AWS CDK provides a core library of constructs that cover most of the AWS services and features. You can also use constructs from other libraries developed by AWS or the community, or create your own custom constructs.
- **The CDK Toolkit**: The CDK Toolkit is a command-line interface that allows you to work with your CDK apps and stacks. It lets you perform various tasks such as synthesizing, deploying, diffing, destroying, and more. You can install the CDK Toolkit using the **`npm install -g aws-cdk`** command.
- **The AWS Construct Library**: The AWS Construct Library is a collection of modules that provide high-level constructs for various AWS services and features. You can install these modules using npm, pip, Maven, NuGet, or Go modules, depending on your programming language. You can then import these modules into your CDK app and use them to create your cloud resources.

## How to install and configure the AWS CDK?

To install and configure the AWS CDK, you need to:

- Sign up for an AWS account if you don’t have one already.
- Install Node.js and npm on your machine if you don’t have them already.
- Install the AWS CDK Toolkit using the **`npm install -g aws-cdk`** command.
- Choose a programming language and install the corresponding AWS CDK library using npm, pip, Maven, NuGet, or Go modules.
- Configure your AWS credentials and region using environment variables, command-line options, or configuration files.

For more details on how to install and configure the AWS CDK, see [Getting started with the AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html).

## How to create a simple app using the AWS CDK?

To create a simple app using the AWS CDK, you need to:

- Create a new project directory and navigate to it.
- Run the **`cdk init`** command and choose a template and a language for your app. This will create some boilerplate code and files for your app.
- Write your CDK code in your project directory using your preferred IDE or editor. You can use the core library of constructs or import modules from the AWS Construct Library to create your cloud resources.
- Run the **`cdk synth`** command to synthesize your app into CloudFormation templates. You can inspect these templates or save them to a file for further processing.
- Run the **`cdk deploy`** command to deploy your app to your AWS account using CloudFormation.

For example, here is how you can create a simple app that creates an Amazon S3 bucket using TypeScript:

```typescript
import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class MyBucketApp extends cdk.App {
    constructor() {
    super();

    // Create a new stack
    new cdk.Stack(this, 'MyBucketStack', {
      // Create a new S3 bucket
      new s3.Bucket(this, 'MyBucket', {
        versioned: true,
        encryption: s3.BucketEncryption.KMS_MANAGED,
      });
    });
}}

new MyBucketApp();`
```

To deploy this app, you can run the following commands:

- Synthesize the app into CloudFormation templates

```
cdk synth
```

- Deploy the app to your AWS account

```
cdk deploy
```

For more examples and tutorials on how to create apps using the AWS CDK, see the [AWS CDK Developer Guide](https://docs.aws.amazon.com/cdk/v2/guide/home.html).

## Conclusion

The AWS CDK is a powerful and expressive framework that enables you to define your cloud infrastructure in code using familiar programming languages. It simplifies, automates, and accelerates cloud development by providing high-level constructs, consistent workflows, and reliable deployments. By following this guide, you can get started with the AWS CDK and create your first app using one of the supported programming languages.
