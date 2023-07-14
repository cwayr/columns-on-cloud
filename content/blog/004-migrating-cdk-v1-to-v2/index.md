---
title: "Migrating from AWS CDK V1 to V2: A Practical Guide"
date: "2023-07-14"
description: A practical guide to migrating AWS CDK projects from version 1 to 2 by updating dependencies, imports, construct patterns, bootstrapping, and validating changes.
---

At the end of 2021, AWS released their Cloud Development Kit (CDK) version 2, which introduces some breaking changes compared to version 1. As a developer using CDK, you may still have applications that use CDK version 1. This guide provides practical steps and examples to help you with the migration process.

## Overview of Changes in CDK V2

Here are some key changes to be aware of when migrating from CDK V1 to V2:

- **New installation method**: Only install the `aws-cdk-lib` package instead of individual service packages.
- **New import namespace**: Import constructs from `aws-cdk-lib` instead of service-specific namespaces.
- **camelCase naming**: Use camelCase for construct names/properties instead of PascalCase.
- **Static factories**: Use static factory methods instead of constructors to instantiate resources.
- **Feature flags over env vars**: Use feature flags instead of environment variables to enable new behaviors.
- **New bootstrapping**: Bootstrap using the new V2 template before deploying.

## Step 1: Update Toolkit and Dependencies

First, update your CDK Toolkit and package dependencies:

```bash
# Update AWS CDK library
npm install aws-cdk-lib@latest

# Remove old CDK packages
npm uninstall @aws-cdk/aws-s3 @aws-cdk/aws-lambda ...
```

Your `package.json` should now only reference `aws-cdk-lib` instead of individual packages.

## Step 2: Update Import Statements

Next, update your import statements to use the new `aws-cdk-lib` namespace:

```ts
// V1
import { Stack } from "@aws-cdk/core"
import * as s3 from "@aws-cdk/aws-s3"

// V2
import { Stack } from "aws-cdk-lib"
import * as s3 from "aws-cdk-lib/aws-s3"
```

## Step 3: Use New Construct Patterns

Update your construct instantiation code to follow the new V2 patterns:

```ts
// V1
const bucket = new s3.Bucket(this, "MyBucket", {
  bucketName: "my-bucket",
})

// V2
const bucket = s3.Bucket.fromBucketAttributes(this, "MyBucket", {
  bucketName: "my-bucket",
})
```

Use camelCase for names:

```ts
// V1
const bucket = new s3.Bucket(this, "MyBucket", {
  bucketName: "my-name",
})

// V2
const bucket = s3.Bucket.fromBucketAttributes(this, "myBucket", {
  bucketName: "my-name",
})
```

Navigate to the [CDK API reference page](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-construct-library.html) to view the constructs and properties available for each service.

## Step 4: Update Bootstrap and Deploy

To deploy your V2 stack, first bootstrap using the new template:

```bash
cdk bootstrap
```

Then deploy your app normally:

```bash
cdk deploy
```

Make sure your CDK Toolkit version matches the `aws-cdk-lib` version!

> Use `cdk diff` and `cdk doctor` to identify any changes that are needed.

## Conclusion

Migrating from CDK V1 to V2 takes a bit of work, but following this guide will help you update your projects smoothly. The key steps are updating dependencies, imports, construct patterns, bootstrapping, and testing.
