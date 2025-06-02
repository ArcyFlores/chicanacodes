import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ArticlePage from '../../components/ArticlePage';

const JavaScriptES6Features = () => {
  const content = `JavaScript ES6 (ECMAScript 2015) introduced many powerful features that have revolutionized how we write JavaScript. Let's explore the most important ones that every developer should master.

## 1. Let and Const

Say goodbye to \`var\` and embrace block-scoped variables:

\`\`\`javascript
// Use const for values that won't change
const name = "Maria";

// Use let for variables that will change
let age = 25;
age = 26; // This is fine

// Avoid var - it has function scope and can cause issues
\`\`\`

## 2. Arrow Functions

Arrow functions provide a more concise syntax and lexical \`this\` binding:

\`\`\`javascript
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Multiple lines
const processData = (data) => {
  const processed = data.map(item => item * 2);
  return processed;
};
\`\`\`

## 3. Template Literals

String interpolation made easy with backticks:

\`\`\`javascript
const name = "Sofia";
const greeting = \`Hello, \${name}! Welcome to Chicana Codes.\`;

// Multi-line strings
const html = \`
  <div>
    <h1>\${greeting}</h1>
    <p>This is a multi-line string!</p>
  </div>
\`;
\`\`\`

## 4. Destructuring

Extract values from arrays and objects with ease:

\`\`\`javascript
// Array destructuring
const colors = ['red', 'green', 'blue'];
const [primary, secondary] = colors;

// Object destructuring
const person = { name: 'Ana', age: 28, city: 'Los Angeles' };
const { name, age } = person;

// With default values
const { country = 'USA' } = person;
\`\`\`

## 5. Spread and Rest Operators

The three dots (\`...\`) that do powerful things:

\`\`\`javascript
// Spread operator - expanding arrays
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5, 6];

// Spread with objects
const baseUser = { name: 'Carmen', role: 'developer' };
const fullUser = { ...baseUser, company: 'Tech Startup' };

// Rest operator - collecting arguments
const sum = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};
\`\`\`

## 6. Enhanced Object Literals

Cleaner object creation syntax:

\`\`\`javascript
const name = 'Isabella';
const age = 30;

// Shorthand property names
const person = { name, age };

// Method definitions
const calculator = {
  add(a, b) {
    return a + b;
  },
  multiply(a, b) {
    return a * b;
  }
};
\`\`\`

## 7. Promises and Async/Await

Handle asynchronous operations elegantly:

\`\`\`javascript
// Promises
const fetchData = () => {
  return fetch('/api/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
};

// Async/Await
const fetchDataAsync = async () => {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
\`\`\`

## 8. Modules (Import/Export)

Organize your code with modules:

\`\`\`javascript
// math.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;
export default class Calculator {
  // calculator implementation
}

// main.js
import Calculator, { add, multiply } from './math.js';
\`\`\`

## 9. Array Methods

Powerful methods for working with arrays:

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];

// Map - transform each element
const doubled = numbers.map(num => num * 2);

// Filter - keep elements that meet criteria
const evens = numbers.filter(num => num % 2 === 0);

// Reduce - combine all elements into single value
const sum = numbers.reduce((total, num) => total + num, 0);

// Find - get first element that matches
const found = numbers.find(num => num > 3);
\`\`\`

## 10. Default Parameters

Set default values for function parameters:

\`\`\`javascript
const greet = (name = 'Amiga', language = 'en') => {
  const greetings = {
    en: \`Hello, \${name}!\`,
    es: \`¡Hola, \${name}!\`
  };
  return greetings[language];
};
\`\`\`

## Why These Features Matter

1. **Cleaner Code**: Less verbose, more readable
2. **Better Performance**: Many features are optimized
3. **Modern Development**: Essential for React, Vue, Angular
4. **Industry Standard**: Expected knowledge for developers

## Practice Exercises

1. Refactor old JavaScript code using ES6 features
2. Build a small project using only ES6+ syntax
3. Practice array methods with real datasets
4. Experiment with async/await in API calls

## Conclusion

These ES6 features are not just nice-to-haves – they're essential tools for modern JavaScript development. Start incorporating them into your projects today, and you'll see immediate improvements in code quality and developer experience.

Remember: Practice makes perfect. Don't try to learn everything at once. Pick one feature, master it, then move to the next!`;

  return (
    <div>
      <Header />
      <ArticlePage
        title="JavaScript ES6+ Features Every Developer Should Know"
        author="Sofia Garcia"
        date="Nov 28, 2024"
        category="JavaScript"
        readTime="12 min"
        content={content}
      />
      <Footer />
    </div>
  );
};

export default JavaScriptES6Features;
