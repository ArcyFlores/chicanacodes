
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ArticlePage from '../../components/ArticlePage';

const ReactBeginnerGuide = () => {
  const content = `Welcome to the world of React! If you're new to web development or coming from vanilla JavaScript, React might seem intimidating at first. But don't worry – we'll break it down step by step.

## What is React?

React is a JavaScript library for building user interfaces, particularly web applications. Created by Facebook (now Meta), React has become one of the most popular tools for frontend development.

## Why Choose React?

1. **Component-Based Architecture**: React allows you to build encapsulated components that manage their own state.
2. **Virtual DOM**: React uses a virtual DOM to efficiently update the UI.
3. **Large Community**: Extensive ecosystem and community support.
4. **Job Opportunities**: High demand for React developers in the job market.

## Getting Started

### Setting Up Your Environment

Before we dive into React, you'll need:
- Node.js installed on your computer
- A code editor (VS Code is recommended)
- Basic knowledge of HTML, CSS, and JavaScript

### Your First React Component

Let's create a simple component:

\`\`\`jsx
function Welcome() {
  return <h1>Hello, Chicana Codes!</h1>;
}
\`\`\`

This is a functional component that returns JSX (JavaScript XML), which looks like HTML but is actually JavaScript.

## Key Concepts

### JSX
JSX allows you to write HTML-like syntax in your JavaScript. It makes React components more readable and intuitive.

### Props
Props are how you pass data from parent components to child components:

\`\`\`jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
\`\`\`

### State
State allows components to manage and update their own data:

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

## Building Your First App

Let's create a simple to-do app to practice these concepts:

1. Create a new React app using Vite
2. Build a component to display tasks
3. Add functionality to add new tasks
4. Implement task completion and deletion

## Next Steps

Once you're comfortable with the basics:
- Learn about useEffect for side effects
- Explore React Router for navigation
- Study state management with Context API or Redux
- Practice building small projects

## Conclusion

React is a powerful tool that opens up many opportunities in web development. The key is to start small, practice regularly, and build projects that interest you. Remember, every expert was once a beginner!

¡Tú puedes! (You can do it!) Keep coding and don't give up. The React community is here to support you on your journey.`;

  return (
    <div>
      <Header />
      <ArticlePage
        title="Getting Started with React: A Beginner's Journey"
        author="Maria Rodriguez"
        date="Dec 1, 2024"
        category="React"
        readTime="8 min"
        content={content}
      />
      <Footer />
    </div>
  );
};

export default ReactBeginnerGuide;
