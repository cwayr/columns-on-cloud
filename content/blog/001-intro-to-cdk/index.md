---
title: "The AWS CDK for Beginners"
date: "2023-07-08"
description: Introduction to the AWS Cloud Development Kit (CDK), explaining key benefits like infrastructure as code, higher level abstractions, and local tooling (with a simple CDK app example).
---

The AWS Cloud Development Kit (CDK) is an open source software development framework for defining cloud infrastructure in code and provisioning it through AWS.

With the CDK, you can use familiar programming languages like TypeScript, Python, Java etc. to model your cloud resources. The CDK handles converting your code into AWS infrastructure through CloudFormation.

This lets you leverage the power of programming to create reusable infrastructure components. You can deploy and manage them using the CDK toolkit locally, without needing the AWS console.

Now let's dive into the key benefits of using the CDK as a developer...

## Why Use the CDK?

For developers, the CDK offers 3 major benefits:

### 1. Infrastructure as Code

You can define your AWS resources in a familiar programming language instead of JSON/YAML. This unlocks the full power of abstraction, modularity, and reuse.

For example, here's a TypeScript script to create an S3 bucket in CDK:

```typescript
import { Bucket, BucketEncryption } from "aws-cdk-lib/aws-s3"
import { Construct } from "constructs"

export class MyBucket extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id)

    new Bucket(this, "MyBucket", {
      encryption: BucketEncryption.KMS_MANAGED,
      versioned: true,
    })
  }
}
```

Much more flexible than YAML!

### 2. Higher-Level Abstractions

The CDK includes "Constructs" which are reusable cloud components. You can stitch together constructs instead of repeating boilerplate code.

For example, an auto-scaling Fargate service:

```typescript
import { FargateService } from "aws-cdk-lib/aws-ecs-patterns"

const fargateService = new FargateService(this, "MyFargateService", {
  cluster,
  taskDefinition,
})

fargateService.autoScaleTaskCount({ minCapacity: 2, maxCapacity: 10 })
```

This abstracts all the complex plumbing.

### 3. Local Tooling

The CDK toolkit lets you work locally without needing the AWS console:

- `cdk synth` to emit infrastructure-as-code
- `cdk diff` to compare local vs deployed stacks
- `cdk deploy` to provision stacks to your account

Overall, the CDK enables developers to use their existing languages and tools to build reusable infrastructure patterns.

## A Simple CDK App

Let's see a complete CDK app example.

We'll make a stack with an S3 bucket, Lambda function, and trigger to run the function when a file lands in the bucket:

```typescript
import { Bucket, EventType } from "aws-cdk-lib/aws-s3"
import { Function, Code, Runtime } from "aws-cdk-lib/aws-lambda"
import { LambdaDestination } from "aws-cdk-lib/aws-s3-notifications"
import { Construct } from "constructs"

export class CdkStack extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id)

    // S3 bucket
    const bucket = new Bucket(this, "MyBucket")

    // Lambda function
    const fn = new Function(this, "LambdaHandler", {
      runtime: Runtime.NODEJS_14_X,
      handler: "handler.handler",
      code: Code.fromAsset("lambda"),
    })

    // Trigger
    const notification = new LambdaDestination(fn)
    bucket.addEventNotification(EventType.OBJECT_CREATED, notification)
  }
}
```

We can deploy this stack to AWS via `cdk deploy`. The Lambda will run each time a file lands in the bucket.

This shows the CDK's value in letting us define reusable patterns in code.

## Getting Started

To start using the AWS CDK:

- Install the CDK toolkit globally via `npm install -g aws-cdk`
- Initialize a new CDK project via `cdk init app --language=typescript`
- Write your stacks and constructs
- Use `cdk synth` and `cdk deploy` to provision them

See the [CDK Developer Guide](https://docs.aws.amazon.com/cdk/v2/guide/home.html) for in-depth tutorials.

The AWS CDK enables developers to use the power of programming to define cloud infrastructure. With its abstractions, local tooling, and integration with modern languages, it unlocks new agility and productivity.
