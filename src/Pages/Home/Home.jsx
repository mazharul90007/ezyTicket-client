import { useLocation } from "react-router-dom";

const Home = () => {
  const location= useLocation()
  console.log(location)
  return (
    <div className="pt-20">
      <h2 className="text-3xl font-semibold text-main">This is Home Page</h2>
      <button className="btn btn-primary bg-supporting">Click Me</button>
    </div>
  );
};

export default Home;
