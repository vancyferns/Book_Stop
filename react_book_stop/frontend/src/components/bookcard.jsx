import React from "react";

function BookCard({ book, onFavourite, isFavouritePage = false }) {
  const isInFavourites = () => {
    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    return favs.some((b) => b.key === book.key);
  };

  const toggleFavourite = () => {
    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    const index = favs.findIndex((b) => b.key === book.key);

    let updatedFavs;
    if (index === -1) {
      updatedFavs = [...favs, book];
      onFavourite && onFavourite(`"${book.title}" added to favourites`);
    } else {
      updatedFavs = favs.filter((b) => b.key !== book.key);
      onFavourite && onFavourite(`"${book.title}" removed from favourites`);
    }

    localStorage.setItem("favourites", JSON.stringify(updatedFavs));

    if (isFavouritePage) {
      // Notify parent to refresh
      onFavourite && onFavourite("refresh");
    }
  };

  const coverImage =
    book.url ||
    (book.cover_i && `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`) ||
    "https://via.placeholder.com/200x300?text=No+Cover";

  return (
    <div className="book-card">
      <div className="book-cover">
        <img src={coverImage} alt={book.title || "Book Cover"} />
        <div>
          <button
            className="favorite-btn"
            onClick={toggleFavourite}
            title="Toggle Favourite"
          >
            {isInFavourites() ? "💔" : "❤️"}
          </button>
        </div>
      </div>
      <div className="book-info">
        <h3>{book.title || "Untitled"}</h3>
        <p>{book.published_date || book.first_publish_year || "Unknown Year"}</p>
      </div>
    </div>
  );
}

export default BookCard;
