import React, { useState, useEffect } from "react";
import BookCard from "../components/bookcard";
import { searchBooksByTitle, getTopRatedBooks } from "../services/api.jsx";

function Home() {
  const [SearchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState(""); // ✅ Feedback message

  // Load default top books
  useEffect(() => {
    const loadTopBooks = async () => {
      try {
        const data = await getTopRatedBooks();
        const withImages = data.filter((book) => book.cover_i);
        setBooks(withImages);
      } catch (err) {
        console.error(err);
        setError("Failed to load top books.");
      } finally {
        setLoading(false);
      }
    };

    loadTopBooks();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!SearchQuery.trim()) return;

    setLoading(true);
    try {
      const data = await searchBooksByTitle(SearchQuery);
      const withImages = data.filter((book) => book.cover_i);
      setBooks(withImages);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Search failed.");
    } finally {
      setLoading(false);
    }
  };

  const showFeedback = (message) => {
    setFeedback(message);
    setTimeout(() => setFeedback(""), 3000);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for books..."
          className="search-input"
          value={SearchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* ✅ Feedback message */}
      {feedback && (
        <div style={{ textAlign: "center", color: "#e50914", marginBottom: "1rem" }}>
          {feedback}
        </div>
      )}

      {loading && <p style={{ textAlign: "center" }}>Loading books...</p>}
      {error && <p className="error" style={{ color: "red", textAlign: "center" }}>{error}</p>}

      {!loading && !SearchQuery && books.length > 0 && (
        <h2 className="section-heading">Top Picks for You</h2>
      )}

      {!loading && SearchQuery && books.length > 0 && (
        <h2 className="section-heading">Search results for: "{SearchQuery}"</h2>
      )}

      <div className="book-grid">
        {!loading && books.length > 0 ? (
          books.map((book) => (
            <BookCard
              book={book}
              key={book.key || book.id || book._id}
              onFavourite={showFeedback} // ✅ Pass feedback handler
            />
          ))
        ) : (
          !loading && <p style={{ textAlign: "center" }}>No books found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
