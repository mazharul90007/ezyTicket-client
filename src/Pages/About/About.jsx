const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl text-main font-bold text-center mb-6">
          About Us
        </h1>
        <p className="text-bg-main text-lg text-center mb-4">
          Welcome to our digital ticketing platform, your one-stop solution for booking tickets to events, travel, and entertainment with ease. Our system ensures seamless seat selection, real-time availability, and QR-based check-in for a smooth experience.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-200">
              🎟️
            </div>
            <h2 className="text-xl font-semibold text-[bg-main] mt-4">Easy Booking</h2>
            <p className="text-gray-600 text-sm">Book tickets quickly and securely with our user-friendly interface.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-200">
              📍
            </div>
            <h2 className="text-xl font-semibold text-[bg-main] mt-4">Real-Time Updates</h2>
            <p className="text-gray-600 text-sm">Get live seat availability and instant ticket confirmation.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-200">
              🔐
            </div>
            <h2 className="text-xl font-semibold text-[bg-main] mt-4">Secure & Reliable</h2>
            <p className="text-gray-600 text-sm">Enjoy a secure payment process with encrypted transactions.</p>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-[bg-main] text-white font-semibold rounded-lg shadow-md hover:opacity-90">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;