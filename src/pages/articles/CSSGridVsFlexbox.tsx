
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ArticlePage from '../../components/ArticlePage';

const CSSGridVsFlexbox = () => {
  const content = `CSS Grid and Flexbox are two powerful layout systems that have revolutionized web design. But when should you use which? Let's dive deep into both and learn when each shines.

## Understanding the Fundamentals

### What is Flexbox?

Flexbox (Flexible Box Layout) is a one-dimensional layout method that arranges items in a row or column. It's perfect for distributing space and aligning items within a container.

### What is CSS Grid?

CSS Grid is a two-dimensional layout system that allows you to create complex layouts with rows and columns simultaneously. It gives you precise control over both dimensions.

## Key Differences at a Glance

| Feature | Flexbox | CSS Grid |
|---------|---------|----------|
| Dimensions | 1D (row OR column) | 2D (rows AND columns) |
| Best for | Components, small layouts | Page layouts, complex designs |
| Content flow | Content-first | Layout-first |
| Browser support | Excellent | Very good (IE11 partial) |

## When to Use Flexbox

### 1. Navigation Bars
Perfect for creating responsive navigation menus:

\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 1rem;
}
\`\`\`

### 2. Centering Content
The easiest way to center content both horizontally and vertically:

\`\`\`css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
\`\`\`

### 3. Card Layouts
Great for flexible card components:

\`\`\`css
.card-container {
  display: flex;
  flex-direction: column;
}

.card-content {
  flex: 1; /* Takes up remaining space */
}

.card-actions {
  margin-top: auto; /* Pushes to bottom */
}
\`\`\`

### 4. Form Controls
Aligning form elements beautifully:

\`\`\`css
.form-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
\`\`\`

## When to Use CSS Grid

### 1. Page Layouts
Creating the overall structure of your page:

\`\`\`css
.page-layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 200px 1fr 200px;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
\`\`\`

### 2. Image Galleries
Perfect for creating responsive photo grids:

\`\`\`css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
\`\`\`

### 3. Dashboard Layouts
Complex dashboard interfaces with multiple sections:

\`\`\`css
.dashboard {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
}

.widget-large {
  grid-column: span 8;
}

.widget-small {
  grid-column: span 4;
}
\`\`\`

### 4. Magazine-Style Layouts
When you need precise control over element placement:

\`\`\`css
.magazine-layout {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 200px);
  gap: 1rem;
}

.featured-article {
  grid-column: 1 / 4;
  grid-row: 1 / 3;
}

.sidebar-article {
  grid-column: 4 / 7;
  grid-row: 1 / 2;
}
\`\`\`

## Combining Flexbox and Grid

The real power comes from using both together! Here's how:

### Grid for Layout, Flexbox for Components

\`\`\`css
/* Grid for page structure */
.page {
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
}

/* Flexbox for header components */
.header {
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Flexbox for card content */
.card {
  display: flex;
  flex-direction: column;
}
\`\`\`

## Practical Examples

### Example 1: Blog Layout with Both

\`\`\`html
<div class="blog-layout">
  <header class="header">
    <div class="logo">Chicana Codes</div>
    <nav class="navigation">
      <a href="#">Home</a>
      <a href="#">Articles</a>
      <a href="#">About</a>
    </nav>
  </header>
  
  <main class="main">
    <article class="post">
      <h1>Post Title</h1>
      <div class="post-meta">
        <span>Author</span>
        <span>Date</span>
      </div>
      <div class="post-content">...</div>
    </article>
  </main>
  
  <aside class="sidebar">
    <div class="widget">Related Posts</div>
  </aside>
  
  <footer class="footer">
    <p>© 2024 Chicana Codes</p>
  </footer>
</div>
\`\`\`

\`\`\`css
/* Grid for overall layout */
.blog-layout {
  display: grid;
  grid-template-areas:
    "header header"
    "main sidebar"
    "footer footer";
  grid-template-columns: 1fr 300px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

/* Flexbox for header */
.header {
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.navigation {
  display: flex;
  gap: 1rem;
}

/* Flexbox for post meta */
.post-meta {
  display: flex;
  gap: 1rem;
  color: #666;
}
\`\`\`

### Example 2: Responsive Card Grid

\`\`\`css
/* Grid for card container */
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* Flexbox for individual cards */
.card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.card-content {
  flex: 1;
  padding: 1rem;
}

.card-actions {
  padding: 1rem;
  margin-top: auto;
  border-top: 1px solid #eee;
}
\`\`\`

## Browser Support and Fallbacks

### Flexbox Support
- Excellent across all modern browsers
- IE10+ with vendor prefixes
- Safe to use without fallbacks

### Grid Support
- Good support in modern browsers
- IE11 has partial support (old specification)
- Consider fallbacks for IE11 if needed:

\`\`\`css
.layout {
  /* Fallback for older browsers */
  display: flex;
  flex-wrap: wrap;
}

/* Modern browsers with grid support */
@supports (display: grid) {
  .layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}
\`\`\`

## Common Patterns and Solutions

### 1. Sticky Footer with Flexbox
\`\`\`css
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
\`\`\`

### 2. Holy Grail Layout with Grid
\`\`\`css
.holy-grail {
  display: grid;
  grid-template: auto 1fr auto / 200px 1fr 200px;
  min-height: 100vh;
}
\`\`\`

### 3. Responsive Navigation
\`\`\`css
.nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
  }
}
\`\`\`

## Performance Considerations

### Flexbox Performance
- Very efficient for one-dimensional layouts
- Minimal reflow/repaint operations
- Great for animations and transitions

### Grid Performance
- Efficient for two-dimensional layouts
- More complex calculations but still performant
- Excellent for static layouts

## Decision Framework

Ask yourself these questions:

1. **Is this a one-dimensional layout?** → Use Flexbox
2. **Do I need precise control over rows AND columns?** → Use Grid
3. **Is this a component or page layout?** → Component: Flexbox, Page: Grid
4. **Do the items need to wrap naturally?** → Flexbox
5. **Do I need items to align to a strict grid?** → Grid

## Common Mistakes to Avoid

### Flexbox Mistakes
1. Using flexbox for two-dimensional layouts
2. Forgetting about flex-shrink causing content overflow
3. Not using gap property (use margins instead in older browsers)

### Grid Mistakes
1. Overcomplicating simple one-dimensional layouts
2. Not providing fallbacks for older browsers
3. Creating too many grid lines for simple layouts

## Conclusion

Both CSS Grid and Flexbox are essential tools in modern web development. They're not competitors – they're complementary! 

**Use Flexbox for:**
- Navigation bars
- Button groups
- Centering content
- One-dimensional layouts
- Component-level design

**Use Grid for:**
- Page layouts
- Image galleries
- Dashboards
- Two-dimensional layouts
- Complex positioning

**Pro tip:** Start with the content and see how it wants to flow. If it's naturally one-dimensional, reach for Flexbox. If you need to control both dimensions, Grid is your friend.

Master both, and you'll be able to create any layout with confidence and ease. Happy coding! 🎨`;

  return (
    <div>
      <Header />
      <ArticlePage
        title="CSS Grid vs Flexbox: When to Use What"
        author="@chicanacodes"
        date="Jun 2, 2025"
        category="CSS"
        readTime="10 min"
        content={content}
      />
      <Footer />
    </div>
  );
};

export default CSSGridVsFlexbox;
