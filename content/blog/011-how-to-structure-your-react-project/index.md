---
title: "How to Structure React Project Files: Organizing Your `src` Directory"
date: "2023-07-31"
description: Learn how to effectively structure your React project with this detailed overview, giving a recommended file and folder hierarchy for maintainability and ease of understanding. Ensure your codebase is clean and developer-friendly.
---

If you're reading this, it means you've probably set up a React project! The next crucial step is to structure your project files in an organized manner. A well-thought-out folder structure makes your codebase cleaner, more maintainable, and easier for other developers to understand.

Here's a recommended structure for your **`src`** directory in a React project:

```lua
src/
|-- assets/
|   |-- images/
|   |-- fonts/
|   |-- styles/ (optional)
|
|-- components/
|   |-- common/
|   |   |-- Button/
|   |   |-- Input/
|   |   |-- ...
|
|-- containers/
|
|-- hooks/
|
|-- services/
|   |-- api/
|
|-- store/ (if using Redux or another state management library)
|   |-- actions/
|   |-- reducers/
|   |-- middlewares/
|
|-- utils/
|
|-- views/
|   |-- Home/
|   |-- About/
|   |-- ...
|
|-- App.js
|-- index.js
|-- ...
```

**1. `assets/`**

- **images/**: Store all static images that your project uses.
- **fonts/**: Any custom fonts.
- **styles/**: For global styles or theme styles (e.g., variables.scss or theme.js if using styled-components).

**2. `components/`**

- **common/**: This sub-directory can hold reusable UI components such as buttons, input fields, or modals. Each component gets its folder, keeping related files (like its specific styles or tests) together.

**3. `containers/`**

- Contains components which might manage state or connect to external data, like an API. You might often find these linked with Redux or other state management libraries, or they might contain multiple shared or common components.

**4. `hooks/`**

- Custom hooks should live here. Examples could be **`useWindowSize.js`** or **`useAPI.js`**.

**5. `services/`**

- **api/**: Any API-related code like endpoints or configurations.

**6. `store/`** (if using Redux or another state management library)

- **actions/**: All Redux action creators.
- **reducers/**: All Redux reducers.
- **middlewares/**: Custom middlewares, if any.

**7. `utils/`**

- Helper functions, formatters, validators, or any other utilities.

**8. `views/` or `pages/`**

- Each route/page in your app gets its folder, e.g., **`Home`** or **`About`**. Each of these folders might contain sub-components related only to that particular view.

**9. Root files**

- **App.js**: Main component which often includes routing.
- **index.js**: Entry point of your React app. This is where your app gets attached to the DOM.

**Best Practices:**

- **Colocation**: If a component has associated styles, tests, or other files, keep them together. For instance, if you have a **`Button`** component and its styles, you might have:
  ```css
  Button/
  |-- Button.js
  |-- Button.module.scss
  |-- Button.test.js
  ```
- **Naming Conventions**: Use consistent naming. If you're using PascalCase for component files (e.g., **`UserProfile.js`**), stick to it throughout.
- **Lazy Loading**: As your app grows, consider using React's lazy loading feature to split code by routes or components, optimizing load times.
- **Limit Depth**: Aim for a shallow depth in your directories. If you find many sub-directories within folders, it might be time to rethink your structure or break components into smaller reusable parts.

While the above is a guideline, it's essential to find what works best for your team and project. Remember, the primary goal is clarity and efficiency, so adapt these practices to your unique needs.
