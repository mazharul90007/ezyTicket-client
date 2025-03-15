import PricingBanner from "./PricingComponents/PricingBanner";
import bangladesh from "../../assets/Pricing_image/bangladesh-icon.png"
import PricingCalculator from "./PricingComponents/PricingCalculator";
const Pricing = () => {
    return (
        <div className="pt-16">
            <PricingBanner></PricingBanner>
            <div className="my-16 md:py-12 w-11/12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 text-gray-800 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-main">EzyTicket is Completely Free to Use</h2>

                    <h2 className="text-3xl md:text-4xl font-bold"> We Only Charge When You Sell Tickets for Your Event</h2>

                    <p className="text-xl text-gray-600">With EzyTicket, you can create, manage, and promote your events without any upfront costs. Our platform is designed to support your success, and we only take a small fee when you sell tickets. All ticket prices are displayed in Bangladeshi Taka (BDT), making it easy for you and your attendees to plan and budget effectively.</p>

                    <div className="flex items-center text-xl text-gray-600">Displaying ticket price for 
                        <span className="mx-2">
                            <img src={bangladesh} alt="Bangladesh flag" className="w-8 h-auto" />
                        </span>
                         Bangladesh
                         </div>
                </div>
                <div className="md:col-span-1">
                    <div className="bg-main text-white text-center p-20 space-y-4 rounded-2xl">
                        <h3 className="text-7xl font-bold">5%</h3>
                        <p className="text-2xl font-semibold">Per ticket sold</p>
                    </div>
                </div>

                </div>
            </div>
            <PricingCalculator></PricingCalculator>
        </div>
    );
};

export default Pricing;