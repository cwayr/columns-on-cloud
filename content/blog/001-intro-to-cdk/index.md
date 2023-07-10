---
title: What is AWS CDK? (A beginners guide)
date: "2023-07-08"
description: Introduction to the AWS Cloud Development Kit, a tool used to create cloud infrastructure though code.
---

The AWS Cloud Development Kit (AWS CDK) is an open-source software development framework that allows you to define your cloud infrastructure in code using familiar programming languages. It was introduced by AWS in July 2019 and has since gained popularity among developers and DevOps teams who want to leverage the benefits of infrastructure as code (IaC) and cloud-native development.

## What are the benefits of CDK?

The AWS CDK offers many advantages over traditional ways of defining cloud infrastructure, such as:

- **Expressiveness**: You can use the full power of your chosen programming language, such as TypeScript, JavaScript, Python, Java, C#, or Go, to model your cloud resources and logic. You can use variables, functions, loops, conditionals, inheritance, composition, and other features to create reusable and maintainable code.
- **Simplicity**: You can use high-level constructs that provide sensible and secure defaults for your AWS resources, reducing the amount of code you need to write. You can also use existing AWS CloudFormation templates or import them into your CDK app to give them a programmatic interface.
- **Consistency**: You can put your infrastructure, application code, and configuration all in one place, ensuring that you have a complete and deployable system at every stage of development. You can also use your preferred integrated development environment (IDE), code editor, testing framework, and source control tool to work with your CDK app.
- **Reliability**: You can use the power of AWS CloudFormation to provision and update your cloud resources in a predictable and repeatable manner, with automatic rollback on error. You can also use the `cdk diff` command to compare your local and deployed stacks and detect any drifts or changes.
- **Shareability**: You can easily design and share reusable components, called constructs, that encapsulate common patterns or best practices for your cloud infrastructure. You can also discover and use constructs created by the developer community on Construct Hub.

## What are some use cases for CDK?

The AWS CDK can be used for any AWS IaC project, even the simple ones. However, it can be particularly useful when you want to:

- Involve your developers more with IaC (embracing a DevOps culture) so that they can leverage their expertise on the programming languages they already know.
- Provision complex or dynamic cloud infrastructure more efficiently, while integrating with continuous integration and delivery (CI/CD) pipelines.
- Create new microservices or applications using preconfigured cloud resources from AWS or third-party providers.
- Accelerate transitions from brand-new to fully deployed infrastructure using features like `cdk watch` and `cdk deploy`.

## How does CDK work?

The AWS CDK works by executing your app, which is a collection of one or more stacks that define your cloud resources. A stack is a logical unit of deployment that maps to an AWS CloudFormation stack. A stack can contain one or more constructs, which are the building blocks of your cloud infrastructure. A construct can represent a single resource, such as an Amazon S3 bucket or an Amazon EC2 instance, or a higher-level abstraction that encapsulates multiple resources and logic, such as an Amazon ECS service or an AWS Lambda function.

The AWS CDK provides a core library of constructs that cover most of the AWS services and features. You can also use constructs from other libraries developed by AWS or the community, or create your own custom constructs.

When you run the `cdk synth` command, the AWS CDK synthesizes your app into one or more CloudFormation templates that describe your cloud resources in JSON or YAML format. You can then use the `cdk deploy` command to deploy these templates to your AWS account using CloudFormation.

Here is an example of a simple CDK app that creates an Amazon S3 bucket:

```typescript
import * as cdk from "aws-cdk-lib"
import * as s3 from "aws-cdk-lib/aws-s3"

export class MyBucketStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string) {
    super(scope, id)

    // Create a new S3 bucket
    new s3.Bucket(this, "MyBucket", {
      versioned: true,
      encryption: s3.BucketEncryption.KMS_MANAGED,
    })
  }
}

const app = new cdk.App()
new MyBucketStack(app, "MyBucketStack")
```

## How to get started with the AWS CDK?

To get started with the AWS CDK, you need to:

- Sign up for an AWS account if you don't have one already.
- Install Node.js and npm on your machine if you don't have them already.
- Install the AWS CDK Toolkit using the `npm install -g aws-cdk` command.
- Choose a programming language and install the corresponding AWS CDK library using npm, pip, Maven, NuGet, or Go modules.
- Create a new CDK project using the `cdk init` command and choose a template and a language.
- Write your CDK code in your project directory using your preferred IDE or editor.
- Synthesize your CDK app into CloudFormation templates using the `cdk synth` command.
- Deploy your CDK app to your AWS account using the `cdk deploy` command.

For more information and tutorials on how to use the AWS CDK, see the [AWS CDK Developer Guide](https://docs.aws.amazon.com/cdk/v2/guide/home.html).

## Conclusion

The AWS CDK is a powerful and expressive framework that enables you to define your cloud infrastructure in code using familiar programming languages. It simplifies, automates, and accelerates cloud development by providing high-level constructs, consistent workflows, and reliable deployments. By using the AWS CDK, you can leverage the benefits of AWS CloudFormation and AWS CDK in a convenient and consistent way.
