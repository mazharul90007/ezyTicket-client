import React from "react";

const movieNewsData = [
  {
    id: 1,
    title: "Dune: Part Two Breaks Box Office Records",
    description:
      "Denis Villeneuve's sequel smashes opening weekend expectations, setting a new sci-fi benchmark.",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*SvqveyU-E2RAHPwHykl5YQ.jpeg",
  },
  {
    id: 2,
    title: "Avengers 5 Teaser Released",
    description:
      "Marvel surprises fans with a first look at Avengers: Secret Wars, promising multiversal chaos.",
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/61639050-e6c2-4959-ac6d-f38add8ae742/dix5v8i-7afd8420-6a46-441a-a1cf-ef833236cdca.jpg/v1/fill/w_1054,h_758,q_70,strp/avengers_doomsday_by_yourmast3r321_dix5v8i-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODI5IiwicGF0aCI6IlwvZlwvNjE2MzkwNTAtZTZjMi00OTU5LWFjNmQtZjM4YWRkOGFlNzQyXC9kaXg1djhpLTdhZmQ4NDIwLTZhNDYtNDQxYS1hMWNmLWVmODMzMjM2Y2RjYS5qcGciLCJ3aWR0aCI6Ijw9MTE1MiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5q2ws7UFEf4BqbltFmTAOVYlxK0dReUHO22PC9T7rpI",
  },
  {
    id: 3,
    title: "Christopher Nolan Confirms Next Project",
    description:
      "Following Oppenheimer's success, Nolan teases a mind-bending thriller set in the 1980s.",
    image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/08/what-is-christopher-nolan-next-movie.jpg",
  },
  {
    id: 4,
    title: "John Wick 5 Officially In Development",
    description:
      "Keanu Reeves returns as the legendary assassin in the fifth installment of the hit franchise.",
    image: "https://m.media-amazon.com/images/M/MV5BN2Q5NjMxMGYtMTBiMy00NDkzLTlkZTItMWVjMGZlM2NhMGM4XkEyXkFqcGdeQWFsZWxvZw@@._V1_.jpg",
  },
  {
    id: 5,
    title: "A24 Announces Horror Cinematic Universe",
    description:
      "The indie studio plans an interconnected world of psychological horror films starting next year.",
    image: "https://editorial.rottentomatoes.com/wp-content/uploads/2025/01/p.png",
  },
  {
    id: 6,
    title: "The Batman 2: Robert Pattinson Returns",
    description:
      "Matt Reeves and Robert Pattinson reunite for the much-anticipated sequel, set for 2026.",
    image: "https://images.moneycontrol.com/static-mcnews/2024/03/Robert-Pattinsons-The-Batman-2-1.png?impolicy=website&width=1600&height=900",
  },
  {
    id: 7,
    title: "Deadpool & Wolverine: First Look Revealed",
    description:
      "Ryan Reynolds and Hugh Jackman tease their chaotic MCU debut in a new trailer.",
    image: "https://i.ytimg.com/vi/cUKoJ7eM0Uo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCGHi5uihug5Im1Pv-FX39iyohWmg",
  },
];

const MovieNews = () => {
  return (
   <div>
      <h2 className="text-3xl md:text-4xl font-bold text-center ">
        Latest News
      </h2>
     <div className="grid grid-cols-4 gap-6 p-6 max-w-7xl text-black mx-auto">
      
      {/* First Column - Largest (Takes 50%) */}
      <div className="col-span-2 bg-white shadow-lg rounded-xl overflow-hidden">
        <img
          src={movieNewsData[0].image}
          alt={movieNewsData[0].title}
          className="w-full h-80 object-cover"
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold hover:text-blue-600 transition duration-200 cursor-pointer">
            {movieNewsData[0].title}
          </h2>
          <p className="mt-2 ">{movieNewsData[0].description}</p>
        </div>
      </div>

      {/* Second Column - Medium (Takes 25%) */}
      <div className="col-span-1 flex flex-col gap-6">
        {movieNewsData.slice(1, 3).map((news) => (
          <div
            key={news.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h2 className="text-lg font-semibold hover:text-blue-600 transition duration-200 cursor-pointer">
                {news.title}
              </h2>
              <p className=" text-sm">{news.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Third Column - Smallest (Takes 25%) */}
      <div className="col-span-1 flex flex-col gap-4">
        {movieNewsData.slice(3, 7).map((news) => (
          <div
            key={news.id}
            className="bg-white shadow-lg rounded-lg p-3 flex items-center  hover:bg-gray-100 transition duration-200 cursor-pointer"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-1/2 h-full bg-cover object-cover rounded-lg"
            />
            <div>
              <h2 className="text-md font-medium">{news.title}</h2>
              <p className="text-sm ">{news.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default MovieNews;
