const About = () => {
  return (
    <div className="pt-40 text-black bg-gradient-to-br from-[#70fd94f5] via-[#f1fff0] to-[#b0fac2d7] px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <h1 className="text-5xl font-bold mb-6">About Us</h1>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          Welcome to our <strong>all-in-one ticketing platform</strong>, designed to make booking for <strong>Travel, Events, and Entertainment</strong> seamless. Whether you’re planning a trip, attending a concert, or exploring entertainment options, we’ve got you covered with <strong>real-time availability, secure booking, and hassle-free check-ins</strong>.
        </p>
      </div>

      {/* Features Section */}
      <div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src=""
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>

      {/* CTA Section */}
      <div className="flex justify-center mt-16">
        <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default About;