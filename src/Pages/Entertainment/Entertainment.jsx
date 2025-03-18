import FeaturedTrailers from "./FeaturedTrailers";
import MovieHero from "./MovieHero";
import TrendingMovies from "./TrendingMovies";

const Entertainment = () => {
  return (
    <div className="pt-16">
      <MovieHero></MovieHero>
      <TrendingMovies></TrendingMovies>
      <FeaturedTrailers></FeaturedTrailers>
    </div>
  );
};

export default Entertainment;
