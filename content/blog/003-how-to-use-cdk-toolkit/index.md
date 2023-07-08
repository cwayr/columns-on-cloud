---
title: How to use the AWS CDK Toolkit ('cdk' command)
date: "2023-07-08"
description: This is a custom description for SEO and Open Graph purposes, rather than the default generated excerpt. Simply add a description field to the frontmatter.
---

The AWS CDK Toolkit is a command-line interface that allows you to work with your AWS CDK apps and stacks. It lets you perform various tasks such as synthesizing, deploying, diffing, destroying, and more. In this article, we will cover the basics of using the cdk command and how to configure it for your needs.

## Installing the AWS CDK Toolkit

The AWS CDK Toolkit is installed with the Node Package Manager (npm). You can install it globally with the following command:

```
npm install -g aws-cdk
```

Alternatively, you can install it locally in your CDK project directory and use npx to invoke it:

```
npm install aws-cdk
npx aws-cdk
```

This way, you can use different versions of the AWS CDK Toolkit for different projects.

## Using the cdk command

The cdk command has several subcommands that perform different actions on your CDK app or stacks. You can use the **`--help`** option or the **`cdk docs`** subcommand to get more information about each subcommand and its options.

Here are some of the most common subcommands and what they do:

- **`cdk init`**: Creates a new CDK project in the current directory from a specified template. You can choose from different languages and project types, such as app or library.
- **`cdk list`**: Lists the stacks in your CDK app. You can use the **`-long`** option to see more details about each stack, such as its dependencies and outputs.
- **`cdk synth`**: Synthesizes and prints the CloudFormation template for one or more specified stacks. You can use this to inspect the generated template or save it to a file for further processing.
- **`cdk deploy`**: Deploys one or more specified stacks to your AWS account. You can use the **`-require-approval`** option to control whether you need to confirm any changes before deployment. You can also use the **`-outputs-file`** option to save the stack outputs to a file for later use.
- **`cdk diff`**: Compares the specified stack and its dependencies with the deployed stack or a local CloudFormation template. You can use this to see what changes will be applied by a deployment or to detect any drifts from the expected state.
- **`cdk destroy`**: Destroys one or more specified stacks from your AWS account. You can use the **`-force`** option to skip confirmation prompts.

## Configuring the cdk command

The cdk command uses some settings and options to interact with your AWS account and region, such as your credentials, profile, and region. You can configure these settings in different ways, such as:

- Using environment variables, such as **`AWS_ACCESS_KEY_ID`**, **`AWS_SECRET_ACCESS_KEY`**, **`AWS_PROFILE`**, and **`AWS_DEFAULT_REGION`**.
- Using command-line options, such as **`-profile`**, **`-region`**, and **`-role-arn`**.
- Using a configuration file, such as **`~/.aws/config`** or **`.cdk.json`**.

You can also use context values to provide additional information to your CDK app, such as parameters, feature flags, or environment variables. You can specify context values using the **`-c`** option or the **`cdk context`** subcommand.

For more information about configuring the cdk command, see [AWS CDK Toolkit (cdk command)](https://docs.aws.amazon.com/cdk/v2/guide/cli.html).

## Conclusion

The AWS CDK Toolkit is a powerful tool that enables you to work with your AWS CDK apps and stacks using a familiar programming language. It provides various subcommands and options that let you create, synthesize, deploy, compare, and destroy your cloud infrastructure in code. By using the cdk command, you can leverage the benefits of AWS CloudFormation and AWS CDK in a convenient and consistent way.
