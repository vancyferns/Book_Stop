import React, { useEffect, useState } from "react";
import BookCard from "../components/bookcard";

function Favourites() {
  const [favouriteBooks, setFavouriteBooks] = useState([]);
  const [feedback, setFeedback] = useState("");

  const loadFavourites = () => {
    const saved = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavouriteBooks(saved);
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  const handleFavourite = (message) => {
    if (message === "refresh") {
      loadFavourites();
    } else {
      setFeedback(message);
      setTimeout(() => setFeedback(""), 3000);
    }
  };

  return (
    <div className="favourites-page">
      {feedback && (
        <div style={{ textAlign: "center", color: "#e50914", marginBottom: "1rem" }}>
          {feedback}
        </div>
      )}

      {favouriteBooks.length === 0 ? (
        <div className="empty-favourites">
          <h2>No Favourite Books</h2>
          <p>Start adding books to your favourites and they will appear here.</p>
          <span style={{ fontSize: "3rem" }}>📚</span>
        </div>
      ) : (
        <>
          <h2 className="section-heading">Your Favourite Books</h2>
          <div className="book-grid">
            {favouriteBooks.map((book) => (
              <BookCard
                book={book}
                key={book.key || book.id || book._id}
                onFavourite={handleFavourite}
                isFavouritePage={true}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Favourites;
