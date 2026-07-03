import Navbar from "../components/Navbar";

import { Link } from "react-router-dom";
import { FaCheckCircle, FaBoxOpen } from "react-icons/fa";

const OrderSuccess = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-blue-50 flex items-center justify-center px-4">

        <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">

          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="bg-green-100 p-6 rounded-full">
              <FaCheckCircle
                size={70}
                className="text-green-600"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-800 mt-8">
            Order Placed Successfully 🎉
          </h1>

          <p className="text-gray-500 mt-4 text-lg">
            Thank you for shopping with ShopEasy.
            Your order has been received and is now being processed.
          </p>

          {/* Order Status Card */}
          <div className="bg-gray-50 border rounded-2xl p-5 mt-8">

            <div className="flex items-center justify-center gap-3 text-green-600">
              <FaBoxOpen size={22} />
              <span className="font-semibold">
                Order Status: Pending
              </span>
            </div>

            <p className="text-gray-500 text-sm mt-3">
              You can track your order anytime from
              the My Orders page.
            </p>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">

            <Link
              to="/my-orders"
              className="flex-1"
            >
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
                View My Orders
              </button>
            </Link>

            <Link
              to="/"
              className="flex-1"
            >
              <button className="w-full border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 py-3 rounded-xl font-semibold transition">
                Continue Shopping
              </button>
            </Link>

          </div>

        </div>

      </div>

      
    </>
  );
};

export default OrderSuccess;