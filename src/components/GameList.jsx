import React, { useEffect, useState } from "react";
import axios from "axios";

import Loader from "../common/Loader";

const GameList = ({ filters }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(
          "https://spa.api.logicloop.io/api/games"
        );
        setGames(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the games:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const filteredGames = games
    .filter((game) => {
      const { name, minScore, orderBy } = filters;
      let isMatch = true;

      if (name) {
        isMatch = game.attributes.name
          .toLowerCase()
          .includes(name.toLowerCase());
      }

      if (isMatch && minScore) {
        isMatch = game.attributes.rating >= minScore;
      }

      return isMatch;
    })
    .sort((a, b) => {
      const { orderBy } = filters;

      if (orderBy === "releaseDate") {
        return (
          new Date(parseInt(b.attributes.firstReleaseDate)) -
          new Date(parseInt(a.attributes.firstReleaseDate))
        );
      } else if (orderBy === "score") {
        return b.attributes.rating - a.attributes.rating;
      } else {
        return a.attributes.name.localeCompare(b.attributes.name);
      }
    });

  if (loading) {
    return (
      <div className="lg:w-3/4 w-full flex items-center justify-center min-h-[200px]">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-3/4 flex items-center justify-center min-h-[200px]">
        <p>Failed to load games: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="lg:w-3/4 w-full">
      {filteredGames.length === 0 ? (
        <div className="flex items-center justify-center min-h-[200px]">
          <h1 className="text-2xl font-bold">No results found.</h1>
        </div>
      ) : (
        filteredGames.map((game) => (
          <div key={game.id} className="md:flex md:items-stretch mb-4">
            <div className="bg-black md:w-[150px] w-full flex-shrink-0 flex items-center justify-center md:h-auto">
              <div className="md:hidden text-white text-3xl font-bold px-4 py-2 rounded-full bg-black flex items-center justify-center h-full">
                {game.attributes.rating}
              </div>
            </div>
            <div className="flex-grow p-4 bg-gray-800 flex flex-row justify-between md:h-auto">
              <div>
                <h3 className="text-2xl font-bold">{game.attributes.name}</h3>
                <p className="text-gray-400">
                  <strong>Release Date:</strong>{" "}
                  {new Date(parseInt(game.attributes.firstReleaseDate))
                  .toLocaleDateString('en-GB')}
                </p>
                <p className="mt-2 text-gray-400 truncate-summary">
                  {game.attributes.summary}
                </p>
              </div>
              <div className="hidden md:flex text-3xl font-bold rounded-full py-2 items-center justify-center h-full">
                <div className="bg-[#5692e8] rounded-full px-4 py-2">
                  {game.attributes.rating}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
  
};

export default GameList;
