
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ArticlePage from '../../components/ArticlePage';

const PythonWebDevelopment = () => {
  const content = `Python has become one of the most popular programming languages for web development, and for good reason! Its simplicity, readability, and powerful frameworks make it an excellent choice for building robust web applications.

## Why Python for Web Development?

### 1. Readable and Clean Syntax
Python's syntax is intuitive and close to natural language, making it perfect for beginners and efficient for experienced developers.

\`\`\`python
# Python is clean and readable
def greet_user(name):
    return f"¡Hola, {name}! Welcome to Python web development!"

# Compare to other languages - Python wins in readability
\`\`\`

### 2. Rapid Development
Python's "batteries included" philosophy means you can build applications quickly with minimal boilerplate code.

### 3. Strong Community and Ecosystem
- Extensive libraries and packages via PyPI
- Active community support
- Excellent documentation
- Lots of learning resources

### 4. Versatility
Python isn't just for web development:
- Data science and AI/ML
- Automation and scripting
- Desktop applications
- Scientific computing

## Popular Python Web Frameworks

### Django: The "Batteries Included" Framework

Django is a high-level framework that follows the "don't repeat yourself" (DRY) principle.

**Best for:**
- Large, complex applications
- Projects that need rapid development
- Applications requiring built-in admin interface
- E-commerce sites, content management systems

**Key Features:**
- Object-Relational Mapping (ORM)
- Built-in admin interface
- User authentication system
- Security features (CSRF protection, SQL injection prevention)
- Internationalization support

**Example Django Project Structure:**
\`\`\`
myproject/
    manage.py
    myproject/
        __init__.py
        settings.py
        urls.py
        wsgi.py
    myapp/
        __init__.py
        models.py
        views.py
        urls.py
        templates/
\`\`\`

### Flask: The Lightweight Microframework

Flask is minimal and flexible, giving you more control over your application's structure.

**Best for:**
- Small to medium applications
- APIs and microservices
- When you want full control over components
- Learning web development concepts

**Key Features:**
- Lightweight and minimal
- Flexible and extensible
- Built-in development server and debugger
- RESTful request dispatching
- Jinja2 templating

**Simple Flask Application:**
\`\`\`python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(debug=True)
\`\`\`

### FastAPI: The Modern, Fast Framework

FastAPI is a modern framework that's gaining popularity for its performance and automatic API documentation.

**Best for:**
- APIs and microservices
- High-performance applications
- Applications requiring automatic documentation
- Modern Python features (type hints)

## Getting Started: Your First Python Web Application

Let's build a simple blog application using Flask:

### 1. Setup Your Environment

\`\`\`bash
# Create a virtual environment
python -m venv blog_env

# Activate it
# Windows:
blog_env\\Scripts\\activate
# macOS/Linux:
source blog_env/bin/activate

# Install Flask
pip install Flask
\`\`\`

### 2. Create the Basic Structure

\`\`\`
blog/
    app.py
    templates/
        base.html
        home.html
        post.html
    static/
        style.css
\`\`\`

### 3. Build the Application

**app.py:**
\`\`\`python
from flask import Flask, render_template
from datetime import datetime

app = Flask(__name__)

# Sample blog posts
posts = [
    {
        'title': 'My Journey into Python',
        'author': 'Isabella Santos',
        'date': datetime(2024, 11, 20),
        'content': 'Python has changed my life as a developer...'
    },
    {
        'title': 'Building My First Web App',
        'author': 'Isabella Santos', 
        'date': datetime(2024, 11, 15),
        'content': 'Today I built my first web application...'
    }
]

@app.route('/')
def home():
    return render_template('home.html', posts=posts)

@app.route('/post/<int:post_id>')
def post(post_id):
    if post_id < len(posts):
        return render_template('post.html', post=posts[post_id])
    return "Post not found", 404

if __name__ == '__main__':
    app.run(debug=True)
\`\`\`

### 4. Create Templates

**templates/base.html:**
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{% block title %}My Blog{% endblock %}</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
</head>
<body>
    <nav>
        <h1><a href="{{ url_for('home') }}">Mi Blog</a></h1>
    </nav>
    
    <main>
        {% block content %}{% endblock %}
    </main>
</body>
</html>
\`\`\`

**templates/home.html:**
\`\`\`html
{% extends "base.html" %}

{% block content %}
<h2>Recent Posts</h2>
{% for post in posts %}
    <article>
        <h3><a href="{{ url_for('post', post_id=loop.index0) }}">{{ post.title }}</a></h3>
        <p>By {{ post.author }} on {{ post.date.strftime('%B %d, %Y') }}</p>
        <p>{{ post.content[:100] }}...</p>
    </article>
{% endfor %}
{% endblock %}
\`\`\`

## Working with Databases

### Using SQLAlchemy with Flask

\`\`\`python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blog.db'
db = SQLAlchemy(app)

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    author = db.Column(db.String(50), nullable=False)
    date_posted = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"Post('{self.title}', '{self.date_posted}')"

# Create tables
with app.app_context():
    db.create_all()
\`\`\`

### Django Models Example

\`\`\`python
from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    date_posted = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-date_posted']
    
    def __str__(self):
        return self.title
\`\`\`

## Building APIs with Python

### Flask REST API Example

\`\`\`python
from flask import Flask, jsonify, request

app = Flask(__name__)

# Sample data
articles = [
    {'id': 1, 'title': 'Python Basics', 'author': 'Maria'},
    {'id': 2, 'title': 'Web Development', 'author': 'Sofia'}
]

@app.route('/api/articles', methods=['GET'])
def get_articles():
    return jsonify(articles)

@app.route('/api/articles', methods=['POST'])
def create_article():
    new_article = {
        'id': len(articles) + 1,
        'title': request.json['title'],
        'author': request.json['author']
    }
    articles.append(new_article)
    return jsonify(new_article), 201

@app.route('/api/articles/<int:article_id>', methods=['GET'])
def get_article(article_id):
    article = next((a for a in articles if a['id'] == article_id), None)
    if article:
        return jsonify(article)
    return jsonify({'error': 'Article not found'}), 404
\`\`\`

### FastAPI Example

\`\`\`python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Article(BaseModel):
    id: int
    title: str
    author: str

articles = [
    Article(id=1, title="Python Basics", author="Maria"),
    Article(id=2, title="Web Development", author="Sofia")
]

@app.get("/articles", response_model=List[Article])
async def get_articles():
    return articles

@app.get("/articles/{article_id}", response_model=Article)
async def get_article(article_id: int):
    article = next((a for a in articles if a.id == article_id), None)
    if article:
        return article
    raise HTTPException(status_code=404, detail="Article not found")
\`\`\`

## Python Web Development Best Practices

### 1. Virtual Environments
Always use virtual environments to manage dependencies:

\`\`\`bash
python -m venv myproject_env
source myproject_env/bin/activate  # macOS/Linux
pip install -r requirements.txt
\`\`\`

### 2. Environment Variables
Keep sensitive data in environment variables:

\`\`\`python
import os
from dotenv import load_dotenv

load_dotenv()

SECRET_KEY = os.getenv('SECRET_KEY')
DATABASE_URL = os.getenv('DATABASE_URL')
\`\`\`

### 3. Project Structure
Organize your code properly:

\`\`\`
myproject/
    app/
        __init__.py
        models.py
        views.py
        templates/
        static/
    tests/
        test_models.py
        test_views.py
    requirements.txt
    config.py
    run.py
\`\`\`

### 4. Testing
Write tests for your applications:

\`\`\`python
import unittest
from app import app

class BlogTestCase(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        
    def test_home_page(self):
        response = self.app.get('/')
        self.assertEqual(response.status_code, 200)
\`\`\`

## Deployment Options

### 1. Heroku
Easy deployment for beginners:
- Git-based deployment
- Free tier available
- Automatic scaling

### 2. DigitalOcean
More control over your server:
- Droplets (virtual servers)
- App Platform for easy deployment
- Good documentation

### 3. AWS/Google Cloud
Enterprise-level deployment:
- Elastic Beanstalk (AWS)
- App Engine (Google Cloud)
- Serverless options

## Common Python Web Development Tools

### Development Tools
- **IDEs**: PyCharm, VS Code, Sublime Text
- **Virtual Environments**: venv, virtualenv, conda
- **Package Management**: pip, pipenv, poetry

### Testing Tools
- **Unit Testing**: unittest, pytest
- **Coverage**: coverage.py
- **API Testing**: requests, httpx

### Database Tools
- **ORMs**: SQLAlchemy, Django ORM, Peewee
- **Migrations**: Alembic, Django migrations
- **Database Browsers**: pgAdmin, SQLite Browser

## Learning Path Recommendations

### 1. Start with Basics
- Learn Python fundamentals
- Understand web concepts (HTTP, REST)
- Practice with small projects

### 2. Choose a Framework
- **Beginners**: Start with Flask for simplicity
- **Rapid Development**: Learn Django
- **Modern APIs**: Explore FastAPI

### 3. Build Projects
- Personal blog
- Todo application
- API for a mobile app
- E-commerce site

### 4. Learn Deployment
- Start with Heroku
- Learn about databases in production
- Understand environment configuration

## Resources for Learning

### Documentation
- [Python.org Official Docs](https://docs.python.org/)
- [Flask Documentation](https://flask.palletsprojects.com/)
- [Django Documentation](https://docs.djangoproject.com/)

### Tutorials
- Django Girls Tutorial
- Real Python
- Full Stack Python
- Mozilla Django Tutorial

### Communities
- r/Python and r/django on Reddit
- Python Discord servers
- Stack Overflow
- PythonistaCafe

## Conclusion

Python web development offers an excellent balance of simplicity and power. Whether you're building a simple blog or a complex enterprise application, Python has the tools and frameworks to help you succeed.

The key is to start small, practice regularly, and gradually take on more complex projects. Don't be afraid to make mistakes – they're part of the learning process!

Remember: Every expert was once a beginner. With Python's supportive community and excellent resources, you have everything you need to become a successful web developer.

¡Vamos a programar! (Let's code!) Your journey in Python web development starts now! 🐍✨`;

  return (
    <div>
      <Header />
      <ArticlePage
        title="Introduction to Python for Web Development"
        author="@chicanacodes"
        date="Jun 2, 2025"
        category="Python"
        readTime="14 min"
        content={content}
      />
      <Footer />
    </div>
  );
};

export default PythonWebDevelopment;
