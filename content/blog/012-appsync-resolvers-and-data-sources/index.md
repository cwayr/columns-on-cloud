---
title: "Understanding AWS AppSync Resolvers and Data Sources"
date: "2023-08-10"
description: AWS AppSync leverages resolvers and data sources to efficiently connect GraphQL operations to backend systems. Learn what these components are and how they work.
---

AWS AppSync is a fully managed service that allows developers to create flexible and scalable APIs for their mobile and web applications. One of the core concepts in AppSync is the combination of resolvers and data sources. In this article, we'll delve deep into what these are, how they're used, and when you need them.

### **What are AppSync Resolvers?**

Resolvers in AppSync play a pivotal role in determining how an incoming GraphQL operation (query, mutation, or subscription) gets translated and executed against your data source. In essence, a resolver is a function that connects a GraphQL operation to a data source, enabling data fetching or data modification as required.

### **What are AppSync Data Sources?**

Data sources, on the other hand, are essentially the storage or compute systems that house your actual data. AppSync supports several types of data sources:

1. **Amazon DynamoDB**: A popular NoSQL database service.
2. **Amazon Aurora**: A relational database service.
3. **Amazon Elasticsearch**: A search engine.
4. **AWS Lambda**: A serverless compute service.
5. **HTTP data sources**: Any HTTP data source, including your custom RESTful APIs.
6. **None**: This is a special type that signifies no data source. It's typically used for operations that don’t require any backend interaction, like simple transformations.

### **How are Resolvers and Data Sources Used Together?**

When a client sends a GraphQL request to AppSync:

1. AppSync checks the GraphQL schema to determine which resolver should handle the request.
2. The resolver then executes its predefined logic (using VTL – Velocity Template Language or Direct Lambda Resolvers for AWS Lambda) to process the request.
3. The processed request is sent to the specified data source.
4. The data source retrieves or modifies the data as instructed.
5. The result is sent back to the client, possibly passing through the resolver once more for post-processing.

### **Examples**

Let’s look at a simple example to solidify the concepts:

Imagine you have a mobile app that needs to fetch user profiles. Your user data resides in a DynamoDB table named **`Users`**.

**Step 1**: Define a GraphQL Schema

```graphql
type UserProfile {
  id: ID!
  name: String
  age: Int
}

type Query {
  getUserProfile(id: ID!): UserProfile
}
```

**Step 2**: Attach a DynamoDB Table as a Data Source in AppSync.

**Step 3**: Connect the **`getUserProfile`** Query to a Resolver

The resolver, using VTL, might look like this:

**Request Mapping Template:**

```json
{
    "version": "2017-02-28",
    "operation": "GetItem",
    "key": {
        "id": $util.dynamodb.toDynamoDBJson($ctx.args.id)
    }
}
```

**Response Mapping Template:**

```json
$util.toJson($ctx.result)
```

Now, when the client queries for a user profile, AppSync invokes the resolver which fetches the relevant data from the DynamoDB table.

### **When Do You Need Them?**

1. **Complex Data Fetching**: If you're joining data from different sources or applying complex data transformations, resolvers handle that logic.
2. **Authorization & Security**: Resolvers can perform checks to ensure that the user has the right permissions to access or modify data.
3. **Logging & Monitoring**: Insert custom logic in resolvers to log or monitor certain operations.
4. **Data Transformations**: Convert the format of data between what the client expects and how it's stored in the backend.

### **Conclusion**

Resolvers and data sources are the heart and soul of AWS AppSync. They allow for flexible and powerful data operations, bridging the gap between client requests and backend data sources. Whether you're building a simple app or a complex system, understanding these components is key to leveraging the full power of AppSync.
