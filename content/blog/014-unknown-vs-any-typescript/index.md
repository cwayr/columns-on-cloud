---
title: "Unknown vs Any in TypeScript"
date: "2024-07-07"
description: Both 'unknown' and 'any' are TypeScript types that can represent any value. However, they differ in how they allow you to interact with those values, leading to distinct use cases and scenarios where each should be used.
---

Both **`unknown`** and **`any`** are TypeScript types that can represent any value. However, the ways they allow you to interact with those values differ, which leads to distinct use cases and scenarios where each should be used.

### **`unknown`**

- **Safety**: **`unknown`** is a safer alternative to **`any`**. If a value has the type **`unknown`**, you can't perform any operations on it, assign it to variables of most other types, or access any properties on it without some sort of type assertion or type guarding.
- **Use Cases**: Use **`unknown`** when:
    - You're dealing with values from external sources (e.g., user inputs, API responses) and you want to ensure you perform adequate type checking before using them.
    - You want to write more type-safe, predictable, and self-documenting code.
- **Example**:
    
    ```tsx
    function processInput(input: unknown) {
        if (typeof input === "string") {
            console.log(input.toUpperCase());  // Type checking ensures this is safe
        }
    }
    ```

### **`any`**

- **Flexibility at the cost of safety**: **`any`** is the most flexible type in TypeScript. It tells the compiler to turn off all type checking for a variable declared of this type. A variable of type **`any`** can be assigned to a variable of any other type and vice versa without any issues.
- **Use Cases**: While overuse of **`any`** can lead to less type-safe and less maintainable code, there are scenarios where it's handy:
    - When you're migrating a JavaScript codebase to TypeScript and gradually adding types. Using **`any`** can be a starting point.
    - When you're using third-party libraries or code that isn't typed, and creating type definitions is impractical.
    - In certain metaprogramming scenarios where type dynamism is required.
- **Example**:
    
    ```tsx
    let data: any = fetchDataFromApi();
    console.log(data.someProperty);  // No type checking, this might be risky
    ```
    
### **Recommendations:**

1. **Default to stricter types**: Always aim to use the strictest type possible. This means using specific types (e.g., **`string`**, **`number`**, or your custom types) over **`unknown`**, and using **`unknown`** over **`any`**.
2. **Use `unknown` for greater safety**: If you're unsure about the shape or type of a value (like from an external source), start with **`unknown`**. This will force you to perform necessary type checks or type assertions, ensuring safety.
3. **Limit the use of `any`**: Only use **`any`** when you have a strong reason, and it's impractical to use any other type. If you do use **`any`**, try to limit its scope and document why it's necessary, so future maintainers are aware of potential type risks.
4. **Leverage compiler options**: Consider enabling the **`noImplicitAny`** compiler option in your **`tsconfig.json`**. This ensures that you explicitly mark variables or return types as **`any`** when you truly intend to, rather than accidentally omitting types.
