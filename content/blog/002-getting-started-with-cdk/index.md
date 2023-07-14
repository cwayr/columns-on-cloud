---
title: "Getting Started with AWS CDK: A Step-by-Step Guide"
date: "2023-07-08"
description: How to get started with the AWS Cloud Development Kit (CDK) to define cloud infrastructure through code. Covers initializing a CDK app, finding constructs in the API reference, writing infrastructure code, and deploying stacks using the CDK toolkit.
---

This guide will walk through how to get up and running with CDK to define your cloud infrastructure through code.

## **Prerequisites**

Before starting, make sure you have:

- An AWS account
- Node.js 14.x or later
- AWS credentials configured

## **Install the CDK Toolkit**

Install the latest CDK Toolkit globally:

```bash
npm install -g aws-cdk@latest
```

Check the installation:

```bash
cdk --version
```

## **Initialize a CDK App**

Initialize a new app in TypeScript:

```bash
cdk init app --language=typescript
```

This creates a sample stack and supporting files.

## **Explore the CDK API Reference**

The **[CDK API Reference](https://docs.aws.amazon.com/cdk/api/v2/)** documents all available constructs.

For example, to make an S3 bucket, look at the **`[Bucket` API docs](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_s3.Bucket.html)**.

## **Define an S3 Bucket**

In `cdk-workshop-stack.ts`, define a bucket:

```tsx
import { Bucket } from "aws-cdk-lib/aws-s3"

new Bucket(this, "MyBucket")
```

The API reference shows how to configure the bucket.

## **Deploy the Stack**

Deploy your stack:

```bash
cdk deploy
```

Check it created the S3 bucket in AWS. You can make edits and redeploy by running the same command to apply changes.

## **Recap**

The key steps for CDK v2 are:

- Use the CDK toolkit
- Initialize a CDK app
- Find constructs in the API reference
- Write infrastructure as code
- Deploy stacks with `cdk deploy`

Check the **[CDK v2 Developer Guide](https://docs.aws.amazon.com/cdk/v2/guide/home.html)** for more!
