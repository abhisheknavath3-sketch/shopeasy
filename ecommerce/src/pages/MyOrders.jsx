import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";


const MyOrders = () => {
const [orders, setOrders] = useState([]);

useEffect(() => {
const token = localStorage.getItem("token");

fetch(" https://shopeasy-kghk.onrender.com/api/orders/my-orders", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then((res) => res.json())
  .then((data) => setOrders(data))
  .catch((err) => console.log(err));

}, []);

const getStatusColor = (status) => {
switch (status) {
case "Delivered":
return "bg-green-100 text-green-700";

  case "Shipped":
    return "bg-blue-100 text-blue-700";

  case "Cancelled":
    return "bg-red-100 text-red-700";

  default:
    return "bg-yellow-100 text-yellow-700";
}

};

return (
<>
<Navbar />

  <div className="min-h-screen bg-gray-100">
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">

      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
        My Orders
      </h1>

      {orders.length === 0 ? (
        <div className="bg-white rounded-3xl shadow-lg p-12 text-center">

          <div className="text-7xl mb-4">
            📦
          </div>

          <h2 className="text-3xl font-bold">
            No Orders Found
          </h2>

          <p className="text-gray-500 mt-3">
            Your placed orders will appear here
          </p>

        </div>
      ) : (
        <div className="space-y-6">

          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition p-6"
            >

              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    Order #{order._id.slice(-8)}
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">
                    {new Date(
                      order.createdAt
                    ).toLocaleDateString()}
                  </p>
                </div>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold w-fit ${getStatusColor(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>

              </div>

              <div className="border-t my-5"></div>

              <div className="flex justify-between items-center">

                <div>
                  <p className="text-gray-500">
                    Total Amount
                  </p>

                  <h2 className="text-2xl font-bold text-green-600">
                    ₹ {order.totalAmount}
                  </h2>
                </div>

                <div className="text-right">
                  <p className="text-gray-500">
                    Payment
                  </p>

                  <p className="font-semibold text-green-600">
                    Paid
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  </div>
</>
  );
};

export default MyOrders;