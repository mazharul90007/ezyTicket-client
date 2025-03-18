import React from "react";

const marqueeMovies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    image: "https://i.ytimg.com/vi/U3D2vmWD88w/maxresdefault.jpg",
    description:
      "The Avengers work to reverse the damage caused by Thanos in Avengers: Infinity War.",
  },
  {
    id: 2,
    title: "Inception",
    image: "https://i.ytimg.com/vi/U3D2vmWD88w/maxresdefault.jpg",
    description:
      "A thief who enters the dreams of others to steal secrets from their subconscious is given the task of planting an idea into the mind of a CEO.",
  },
  {
    id: 3,
    title: "The Dark Knight",
    image: "https://i.ytimg.com/vi/U3D2vmWD88w/maxresdefault.jpg",
    description:
      "Batman faces the Joker, a criminal mastermind who seeks to create chaos in Gotham City.",
  },
  {
    id: 4,
    title: "Titanic",
    image: "https://i.ytimg.com/vi/U3D2vmWD88w/maxresdefault.jpg",
    description:
      "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
  },
  {
    id: 5,
    title: "Interstellar",
    image: "https://i.ytimg.com/vi/U3D2vmWD88w/maxresdefault.jpg",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
];

const MovieMarquee = () => {
  return (
    <section className="py-16 px-4 bg-black text-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400-500 to-green-600">
        <span>🎬</span> Movie Marquee Showcase
      </h2>

      <div className="relative overflow-hidden">
        <div className="flex space-x-8 animate-marquee">
          {marqueeMovies.map((movie) => (
            <div
              key={movie.id}
              className="relative group rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-64 h-96 object-cover transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-2xl font-semibold">{movie.title}</h3>
                <p className="mt-2 text-sm">{movie.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieMarquee;
