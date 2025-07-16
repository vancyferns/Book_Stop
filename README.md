<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f9f9f9; padding: 2rem; color: #333;">

  <h1>📚 Book Stop – Beginner Friendly React.js Book Search App</h1>

  <p><strong>Book Stop</strong> is a beginner-friendly React project that allows users to search for books and mark favourites. It uses the <strong>Open Library API</strong> to fetch book data.</p>

  <hr />

  <h2>💡 Tech Stack</h2>
  <ul>
    <li><strong>React.js</strong> – Frontend library for UI</li>
    <li><strong>Vite</strong> – Build tool for fast development</li>
    <li><strong>React Router</strong> – Client-side routing</li>
    <li><strong>Open Library API</strong> – Free API for book data</li>
    <li><strong>LocalStorage</strong> – For saving favourite books</li>
    <li><strong>HTML5 + CSS3</strong> – Styling and layout</li>
  </ul>

  <hr />

  <h2>🔗 How Open Library API is Used</h2>
  <p>
    This project uses the <a href="https://openlibrary.org/developers/api" target="_blank">Open Library Search API</a> to get book data:
  </p>
  <pre><code>https://openlibrary.org/search.json?title=harry+potter</code></pre>
  <p>API is called in <code>src/services/api.jsx</code>:</p>
  <pre><code>
export const searchBooksByTitle = async (title) => {
  const response = await fetch(
    `https://openlibrary.org/search.json?title=${title}`
  );
  const data = await response.json();
  return data.docs;
};
  </code></pre>

  <p>Only books with cover images are shown, using:</p>
  <pre><code>https://covers.openlibrary.org/b/id/{cover_i}-L.jpg</code></pre>

  <hr />

  <h2>📁 Folder Structure</h2>
  <pre>
frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── bookcard.jsx
│   │   └── navbar.jsx
│   ├── pages/
│   │   ├── home.jsx
│   │   └── favourites.jsx
│   ├── services/
│   │   └── api.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
  </pre>

  <hr />

  <h2>🚀 How to Run</h2>
  <ol>
    <li>Clone the repo:
      <pre><code>git clone https://github.com/your-username/book-stop.git</code></pre>
    </li>
    <li>Navigate to the frontend folder:
      <pre><code>cd book-stop/frontend</code></pre>
    </li>
    <li>Install dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>Start the development server:
      <pre><code>npm run dev</code></pre>
    </li>
    <li>Open browser at: <code>http://localhost:5173</code></li>
  </ol>

  <hr />

  <h2>📦 Feature Overview</h2>
  <ul>
    <li>🔍 Search for books by title</li>
    <li>📕 Only display books that have cover images</li>
    <li>❤️ Add/remove favourites using the heart icon</li>
    <li>📌 View favourites on a separate page</li>
    <li>💾 Data saved in <code>localStorage</code> for persistence</li>
  </ul>

  <hr />

  <h2>🧠 Learnings</h2>
  <ul>
    <li>React basics: components, props, and state</li>
    <li>React hooks: <code>useState</code> and <code>useEffect</code></li>
    <li>API integration and async/await</li>
    <li>Routing using React Router</li>
    <li>Working with localStorage</li>
    <li>CSS Flexbox/Grid for responsiveness</li>
  </ul>

  <hr />
    <h2>Deployment</h2>
  <p>The Project is Deployed on Vercel : <a href="https://book-stop-4szn.vercel.app/">https://book-stop-4szn.vercel.app/
</a></p>

  <h2>🛠️ Future Improvements</h2>
  <ul>
    <li>🔄 Pagination for long search results</li>
    <li>🎨 Filter by year, author, subject</li>
    <li>👤 Add user login system with Firebase</li>
  </ul>

  <hr />

  <h2>📃 License</h2>
  <p>MIT License</p>

  <h2>👨‍💻 Created by Vancy Fernandes</h2>

  <p>Feel free to fork, improve, and share this project as part of your React learning journey!</p>

</body>
</html>
