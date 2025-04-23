import { motion } from 'framer-motion';
import { FiArrowRight, FiClock, FiCalendar, FiStar } from 'react-icons/fi';
import useTravelContext from '../../../Hooks/TrevalHook/useTravelContext';
import Heading from '../../../components/Heading';

const PopularBusRoutes = () => {
    const {allBusData} = useTravelContext()
  const demoRoutes= [
    {
      _id: "67e12be5f6b8682745586562",
      busName: "Shohagh Paribahan",
      from: "Mohakhali Bus Terminal, Dhaka",
      to: "Kamalapur Bus Stand, Dhaka",
      date: "01/03/2025",
      busTimes: "8:30am",
      type: "AC",
      ticketPrice: 350,
      refund: true,
      bookedSeats: ["A2", "B3", "B4", "A4", "C4", "C3", "J4", "J3", "C1", "D1", "B2", "C2", "E4"]
    },
    {
      _id: "67e12be5f6b8682745586563",
      busName: "Green Line Paribahan",
      from: "Gabtoli Bus Terminal, Dhaka",
      to: "Chittagong Bus Terminal, Chittagong",
      date: "05/04/2025",
      busTimes: "10:00am",
      type: "Non-AC",
      ticketPrice: 550,
      refund: false,
      bookedSeats: ["H2", "G2", "G3", "J2", "J1", "I1", "J3", "D3", "E3", "E4", "D4", "F4", "H3", "I3"]
    },
    {
      _id: "67e12be5f6b8682745586564",
      busName: "Hanif Enterprise",
      from: "Sayedabad Bus Terminal, Dhaka",
      to: "Rajshahi Bus Terminal, Rajshahi",
      date: "10/05/2025",
      busTimes: "9:00pm",
      type: "AC",
      ticketPrice: 750,
      refund: true,
      bookedSeats: ["D2", "E2", "F2"]
    },
    // Add more routes as needed
  ];

  const processedRoutes = allBusData
    .map(route => ({
      ...route,
      // Fix potential typo in bookedSeats property
      bookedSeats: route.bookedSeats || [],
      popularity: (route.bookedSeats?.length || 0) * 2 // Weighted popularity
    }))
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 6); // Show top 6 routes

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 120 }
    }
  };

  return (
    <section className="pb-16 px-4 ">
      <div className="container mx-auto">
        <Heading
        subtitle="Popular Routes"
        title="Popular Bus Routes in Bangladesh"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {processedRoutes.map((route) => (
            <motion.div
              key={route._id}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {route.busName}
                  </h3>
                  <span className={`text-sm ${
                    route.type === 'AC' ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {route.type} Service
                  </span>
                </div>
                {route.popularity > 15 && (
                  <div className="flex items-center bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                    <FiStar className="mr-1" />
                    Hot Route
                  </div>
                )}
              </div>

              <div className="flex items-center text-gray-600 mb-4">
                <span className="font-medium truncate">{route.from}</span>
                <FiArrowRight className="mx-2 flex-shrink-0" />
                <span className="font-medium truncate">{route.to}</span>
              </div>

              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <FiClock className="mr-2" />
                  {route.busTimes}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <FiCalendar className="mr-2" />
                  {route.date}
                </div>
              </div>

              <div className="flex justify-between items-center mt-6">
                <div>
                  <span className="text-3xl font-bold text-green-600">
                    ৳{route.ticketPrice}
                  </span>
                  <span className="text-gray-500 ml-2">/ seat</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  route.refund 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {route.refund ? 'Refundable' : 'Non-refundable'}
                </span>
              </div>

              {route.bookedSeats?.length > 0 && (
                <div className="mt-4 text-sm text-gray-500">
                  <span className="font-medium">
                    {route.bookedSeats.length} seats 
                  </span> booked recently
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PopularBusRoutes;