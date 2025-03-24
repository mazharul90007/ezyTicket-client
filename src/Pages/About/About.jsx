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
      <div className="grid md:grid-cols-3 gap-10 mt-16 max-w-6xl mx-auto">
        {/** Feature Card */}
        {[
          { icon: "✈️", title: "Travel", desc: "Book your bus and flight tickets with ease. Enjoy real-time seat selection and instant confirmation." },
          { icon: "🎭", title: "Events", desc: "Discover and book concerts, conferences, and sports events effortlessly with our secure platform." },
          { icon: "🎬", title: "Entertainment", desc: "Get tickets for movies, theme parks, and more, all from one convenient place." }
        ].map((feature, index) => (
          <div key={index} className="bg-white text-gray-900 p-8 rounded-xl shadow-xl text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-green-100 flex items-center justify-center rounded-full text-3xl">
              {feature.icon}
            </div>
            <h2 className="text-2xl font-semibold mt-4">{feature.title}</h2>
            <p className="text-gray-600 mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>
npm i
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