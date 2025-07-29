import React from "react";

function Nav() {
  return (
    <nav className="max-w-xl mx-auto p-4 space-y-4 flex justify-center flex-col">
      <h1 className="text-6xl">SpotiStat</h1>
      <p className="text-left">
        Spotify provides users with their listening history in JSON format upon
        request. However, the raw JSON files are not user-friendly or
        interactive, making it difficult for users to explore or analyze their
        music habits. This project addresses that problem by building a
        web-based interface that loads Spotify's exported JSON files directly
        into the app's data structure, allowing users to search, filter by date,
        and explore their listening history in a clean and intuitive format. It
        focuses on client-side interactivity without requiring file uploads,
        making it fast, simple, and secure for users who already have their data
        embedded in the app.
      </p>
    </nav>
  );
}

export default Nav;
