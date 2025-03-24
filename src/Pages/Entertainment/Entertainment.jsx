import useAuth from "../../Hooks/useAuth";
import MovieMarquee from "./Components/MovieMarquee";
import FeaturedTrailers from "./FeaturedTrailers";
import MovieHero from "./MovieHero";
import TrendingMovies from "./TrendingMovies";

const Entertainment = () => {

  const {darkMode} =useAuth();


  return ( 
    <div className={` bg-gradient-to-br ${
      darkMode
        ? "from-black via-blue-900 to-purple-900 text-white"
        : "from-green-200 via-green-50 to-green-200 text-black"
    } `}>
      <MovieHero></MovieHero>
      <TrendingMovies></TrendingMovies>
      <FeaturedTrailers></FeaturedTrailers>
      <MovieMarquee></MovieMarquee>
    </div>
  );
};

export default Entertainment;
