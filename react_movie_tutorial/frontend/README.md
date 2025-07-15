<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Book Stop – Project Documentation</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f9f9f9; padding: 2rem; color: #333;">

  <h1>📚 Book Stop – Beginner Friendly React JS Project Documentation</h1>

  <p>Welcome to <strong>Book Stop</strong>, a beginner-friendly web application built using <strong>React.js</strong>. This app helps users search for books and mark their favorite ones using the <strong>Open Library API</strong>.</p>

  <hr />

  <h2>🧠 What You'll Learn From This Project</h2>
  <ul>
    <li>How to build a full React app from scratch</li>
    <li>How to use components, props, state, and hooks (<code>useState</code>, <code>useEffect</code>)</li>
    <li>How to fetch data from an external API (Open Library)</li>
    <li>How to use <code>localStorage</code> for persisting data</li>
    <li>Routing using <code>react-router-dom</code></li>
    <li>Basic responsive CSS and layout design</li>
  </ul>

  <hr />

  <h2>🏗️ Project Structure</h2>
  <pre>
book-stop/
├── public/
├── src/
│   ├── components/
│   │   └── BookCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Favourites.jsx
│   ├── services/
│   │   └── api.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
└── package.json
  </pre>

  <hr />

  <h2>🚀 How to Run</h2>
  <ol>
    <li><strong>Clone the repo:</strong>
      <pre><code>git clone https://github.com/your-username/book-stop.git
cd book-stop</code></pre>
    </li>
    <li><strong>Install dependencies:</strong>
      <pre><code>npm install</code></pre>
    </li>
    <li><strong>Start the development server:</strong>
      <pre><code>npm run dev</code></pre>
    </li>
    <li><strong>Visit:</strong> <code>http://localhost:5173</code> in your browser</li>
  </ol>

  <hr />

  <h2>🧱 Code Explanation</h2>

  <h3>App.jsx</h3>
  <ul>
    <li>Main component that defines the layout.</li>
    <li>Uses <code>Routes</code> and <code>Route</code> from <code>react-router-dom</code>.</li>
    <li>Renders the <code>NavBar</code>, main content, and footer.</li>
  </ul>

  <h3>NavBar.jsx</h3>
  <ul>
    <li>Navigation bar with links to Home and Favourites.</li>
    <li>Highlights the active link using <code>useLocation()</code>.</li>
  </ul>

  <h3>Home.jsx</h3>
  <ul>
    <li>Displays a search form and book results.</li>
    <li>Uses Open Library API to fetch book data.</li>
    <li>Initial load shows default books.</li>
  </ul>

  <h3>BookCard.jsx</h3>
  <ul>
    <li>Reusable component to display each book.</li>
    <li>Includes title, cover image, and year.</li>
    <li>❤️ button adds/removes from favourites (uses localStorage).</li>
  </ul>

  <h3>Favourites.jsx</h3>
  <ul>
    <li>Loads and displays books saved to favourites.</li>
    <li>Uses <code>useEffect</code> and <code>localStorage</code>.</li>
  </ul>

  <h3>api.jsx</h3>
  <ul>
    <li>Fetches data using Open Library API.</li>
    <li>searchBooksByTitle – finds books by title.</li>
    <li>getTopRatedBooks – fetches sample default books.</li>
  </ul>

  <pre><code>
export const searchBooksByTitle = async (title) => {
  const response = await fetch(`https://openlibrary.org/search.json?title=${title}`);
  const data = await response.json();
  return data.docs;
};
  </code></pre>

  <hr />

  <h2>💡 Key Concepts</h2>

  <h4>React Components</h4>
  <pre><code>
function BookCard({ book }) {
  return &lt;div&gt;{book.title}&lt;/div&gt;;
}
  </code></pre>

  <h4>useState</h4>
  <pre><code>const [books, setBooks] = useState([]);</code></pre>

  <h4>useEffect</h4>
  <pre><code>
useEffect(() =&gt; {
  loadBooks();
}, []);
  </code></pre>

  <h4>localStorage</h4>
  <pre><code>
localStorage.setItem("favourites", JSON.stringify(bookList));
  </code></pre>

  <h4>React Router</h4>
  <pre><code>&lt;Route path="/favourites" element={&lt;Favourites /&gt;} /&gt;</code></pre>

  <hr />

  <h2>📱 Responsive Design</h2>
  <ul>
    <li>Flexbox & CSS Grid for layout</li>
    <li>Books shown in grid on desktop, stacked on mobile</li>
    <li>Sticky navbar and footer</li>
  </ul>

  <hr />

  <h2>🧪 Sample Search Queries</h2>
  <ul>
    <li>Harry Potter</li>
    <li>Lord of the Rings</li>
    <li>Sherlock Holmes</li>
  </ul>

  <hr />

  <h2>🛠️ Future Enhancements</h2>
  <ul>
    <li>Pagination</li>
    <li>Author/year filters</li>
    <li>Global state with Context API</li>
    <li>Login/signup system</li>
  </ul>

  <hr />

  <h2>📃 License</h2>
  <p>MIT</p>

  <h2>👨‍💻 Made with ❤️ by Vancy Fernandes</h2>

  <p>Feel free to fork or improve this project for your own learning journey!</p>

</body>
</html>
