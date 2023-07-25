---
title: "AWS IaC: Why you should use CDK over CloudFormation"
date: "2023-07-24"
description: While AWS CloudFormation offers a tried-and-true method for Infrastructure as Code (IaC) using JSON or YAML templates, the AWS Cloud Development Kit (CDK) emerges as a flexible alternative, allowing developers to craft infrastructure using popular programming languages, making it a top choice for modern IaC projects.
---

In the evolving landscape of Infrastructure as Code (IaC) within AWS, developers have primarily considered AWS CloudFormation and the newer AWS Cloud Development Kit (CDK) as their go-to tools. While CloudFormation has been a consistent and reliable choice for many, the introduction of CDK has garnered considerable attention due to its innovative approach. Let's examine the unique attributes of each to understand the growing preference for CDK.

## **AWS CloudFormation: The Trusty Workhorse**

For years, AWS CloudFormation has been the cornerstone of AWS IaC, giving developers the power to craft and deploy AWS resources through JSON or YAML templates. Its enduring reliability and direct mapping to AWS resources are invaluable. And who can overlook the portability of its templates, usable across any AWS account or region?

But here's a catch: writing in JSON or YAML, while effective, can sometimes feel like trying to paint a masterpiece with a broad brush. Their lack of programming features often feels restrictive, especially when dealing with complex setups.

## **AWS CDK: The Game-Changer in Infrastructure as Code**

Enter AWS CDK. Imagine being able to design your cloud infrastructure in the same programming languages you love and use daily - TypeScript, JavaScript, Python, C#, or Java. CDK transforms that dream into a reality, giving developers a canvas brimming with possibilities.

### **The Power of Expressiveness**

Consider a scenario where you need to deploy multiple AWS Lambda functions, but only if they meet specific criteria. With CDK, you can utilize **`if-else`** conditions and loops to elegantly handle such requirements, something unthinkable in pure JSON/YAML.

### **Modularity and Reusability**

Ever heard of Constructs in CDK? Think of them as building blocks, each containing one or several AWS resources. These Constructs not only promote code reusability but also help maintain a tidy and organized codebase, a challenging feat with CloudFormation.

### **Robust Tooling**

CDK's toolset feels like a Swiss Army knife for developers. From its command-line interface for deploying applications to its native support for unit testing, it truly has a tool for every need.

## **Making the Switch: Why CDK Might Be Your Best Bet**

The beauty of CDK lies in its simplicity. It shields you from CloudFormation's intricacies, letting you harness the power of traditional programming paradigms. And with Constructs, you can effortlessly craft and manage complex infrastructures.

But here's the twist: CDK is still built upon the foundations of CloudFormation. It magically transforms your high-level code into a CloudFormation template. So, a pinch of CloudFormation knowledge can come in handy, especially when you're deep into troubleshooting.

To sum it up, embarking on a new project? If you're at home with mainstream programming languages, AWS CDK is not just a tool, but an experience. Its rich feature set designed for today's cloud developer ensures you're always a step ahead in the IaC game.
