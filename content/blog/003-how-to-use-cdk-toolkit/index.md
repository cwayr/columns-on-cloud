---
title: How to use the AWS CDK Toolkit ('cdk' command)
date: "2023-07-10"
description: The AWS CDK Toolkit is a command line interface that allows developers to work with CDK apps and stacks; this article will outline all the basics you need to know to effectively work with the 'cdk' command.
---

The AWS Cloud Development Kit (CDK) Toolkit is an essential tool for developers using CDK to define cloud infrastructure in code. This handy command-line interface lets you easily work with CDK apps and stacks right from your terminal.

In this guide, we'll cover the key things you need to know to start being productive with the CDK Toolkit.

## Installation

Install the CDK Toolkit globally using npm:

```bash
npm install -g aws-cdk
```

Or install it locally and use npx to invoke it:

```bash
npm install aws-cdk
npx cdk --version
```

## Initializing a New CDK App

Use the `cdk init` command to bootstrap a new CDK project:

```bash
cdk init app --language typescript
```

This scaffolds a starter app with example constructs in your chosen language. It provides the basic setup needed to define and synthesize CDK stacks.

## Key Commands

### `cdk synth`

The `cdk synth` command synthesizes your CDK app into raw CloudFormation templates.

Behind the scenes, it invokes the synthesis process which transforms the CDK constructs into formatted CloudFormation YAML/JSON. This is useful for inspecting the generated templates before deployment.

### `cdk diff`

The `cdk diff` command compares your locally synthesized templates against deployed stack templates or a local CloudFormation template.

This helps you preview changes before deploying updates. It's important for avoiding unintentional changes going into production.

### `cdk deploy`

The `cdk deploy` command deploys your stacks into your default AWS account and region.

It first synthesizes the templates, and then deploys the generated CloudFormation stacks using CloudFormation's CreateChangeset API. This is how you push changes in your CDK app into your AWS account.

> Note: `cdk synth` and `cdk diff` are not required before running `cdk deploy`. `cdk deploy` will generate and deploy a CFT all on it's own.

### `cdk context`

The `cdk context` command lets you set key-value pairs that serve as contextual information for your CDK app.

This is useful for parameterizing your stacks for different environments. For example, you can set an environment variable to switch between production vs staging backends.

## Configuring Credentials

The CDK Toolkit uses your configured AWS CLI credentials and profiles. Make sure these are set up properly.

For example, to use a named profile:

```bash
cdk deploy --profile myProfile
```

See the [CDK Toolkit docs](https://docs.aws.amazon.com/cdk/v2/guide/cli.html) for more configuration options.

## Recap

Key takeaways:

- Use `cdk init` to bootstrap new CDK apps
- `cdk synth` generates CloudFormation templates
- `cdk diff` previews changes before deploying
- `cdk deploy` deploys stacks into your AWS account
- Configure AWS credentials as needed

The CDK Toolkit unlocks the full power of infrastructure as code with AWS CDK. Give it a try today!
