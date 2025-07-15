const BASE_URL = "https://openlibrary.org";

// 🔍 Search books by title (Open Library)
export const searchBooksByTitle = async (title) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search.json?title=${encodeURIComponent(title)}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch books from Open Library");
    }

    const data = await response.json();
    return data.docs?.slice(0, 20) || []; // ✅ Always return an array
  } catch (error) {
    console.error("Error fetching books by title:", error);
    return [];
  }
};

// 🌟 Get top-rated books (simulated using published date)
export const getTopRatedBooks = async () => {
  try {
    const response = await fetch(`https://openlibrary.org/search.json?q=bestseller+fiction&limit=20`);
    const data = await response.json();
    return data.docs;
  } catch (error) {
    console.error("Error fetching top picks:", error);
    return [];
  }
};