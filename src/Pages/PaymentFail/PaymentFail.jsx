import { FaCircleXmark, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FiAlertTriangle } from "react-icons/fi";
import { MdOutlineContactSupport } from "react-icons/md";

const PaymentFail = () => {

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                {/* Error Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center gap-3 mx-auto w-fit">
                        <div className="p-2 rounded-full bg-red-100">
                            <FaCircleXmark className="text-3xl md:text-4xl text-red-600" />
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Payment Failed
                        </h1>
                    </div>
                    <p className="mt-2 text-lg text-gray-600">
                        We couldn't process your payment
                    </p>
                </div>

                {/* Error Details Card */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden border-l-4 border-red-500">
                    <div className="px-6 py-5 bg-red-500 text-white flex items-center">
                        <FiAlertTriangle className="h-6 w-6 mr-2" />
                        <h2 className="text-xl font-semibold">Transaction Details</h2>
                    </div>

                    <div className="border-t border-gray-200 px-6 py-5">
                        <div className="space-y-4">
                            <div className="border-t border-gray-200 my-4"></div>

                            <div className="bg-red-50 rounded-lg p-4">
                                <h3 className="text-lg font-medium text-red-700 mb-2 flex items-center">
                                    <FiAlertTriangle className="mr-2" /> Possible Reasons
                                </h3>
                                <ul className="list-disc pl-5 space-y-1 text-red-600">
                                    <li>Insufficient funds in your account</li>
                                    <li>Incorrect card details entered</li>
                                    <li>Bank declined the transaction</li>
                                    <li>Technical issues with payment gateway</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to={"/"}
                                className="ezy-button-primary flex items-center justify-center gap-2"
                            >
                                <FaArrowRight className="h-4 w-4" />
                                Try Payment Again
                            </Link>

                            <Link
                                to="/contact"
                                className="ezy-button-secondary flex items-center justify-center gap-2"
                            >
                                <MdOutlineContactSupport className="h-5 w-5" />
                                Contact Support
                            </Link>
                        </div>

                        <p className="mt-4 text-center text-sm text-gray-500">
                            Need immediate help? Call us at <span className="font-medium text-main">+880 1938572XXX</span>
                        </p>
                    </div>
                </div>

                {/* Additional Help Section */}
                <div className="mt-8 bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-medium text-blue-800 mb-3">What to do next?</h3>
                    <div className="space-y-3">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                                <div className="h-5 w-5 rounded-full bg-blue-200 flex items-center justify-center">
                                    <span className="text-blue-800 text-sm font-bold">1</span>
                                </div>
                            </div>
                            <p className="ml-3 text-sm text-blue-700">
                                Check your bank account to ensure funds are available
                            </p>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                                <div className="h-5 w-5 rounded-full bg-blue-200 flex items-center justify-center">
                                    <span className="text-blue-800 text-sm font-bold">2</span>
                                </div>
                            </div>
                            <p className="ml-3 text-sm text-blue-700">
                                Verify your card details are correct
                            </p>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                                <div className="h-5 w-5 rounded-full bg-blue-200 flex items-center justify-center">
                                    <span className="text-blue-800 text-sm font-bold">3</span>
                                </div>
                            </div>
                            <p className="ml-3 text-sm text-blue-700">
                                Try again or use a different payment method
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentFail;