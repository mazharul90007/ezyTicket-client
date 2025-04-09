import useAuth from "../../Hooks/useAuth";
import MovieMarquee from "./Components/MovieMarquee";
import FeaturedTrailers from "./FeaturedTrailers";
import MovieHero from "./MovieHero";
import MovieNews from "./MovieNews";
import TrendingMovies from "./TrendingMovies";

const Entertainment = () => {

  const {darkMode} =useAuth();


  return ( 
    <div className={`pt-20 bg-gradient-to-br ${
      darkMode
        ? "bg-neutral-900"
        : "from-green-200 via-green-50 to-green-200 text-black"
    } `}>
      <MovieHero></MovieHero>
      <TrendingMovies></TrendingMovies>
      <FeaturedTrailers></FeaturedTrailers>
      <MovieNews></MovieNews>
      <MovieMarquee></MovieMarquee>
    </div>
  );
};

export default Entertainment;
