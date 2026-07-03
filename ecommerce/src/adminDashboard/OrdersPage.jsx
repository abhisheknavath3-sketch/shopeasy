// import { useEffect, useState } from "react";

// const OrdersPage = () => {
//   const [orders, setOrders] = useState([]);

//   const updateStatus = async (id, status) => {
//     const token = localStorage.getItem("token");

//     try {
//       const response = await fetch(
//         ` https://shopeasy-kghk.onrender.com/api/admin/orders/${id}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ status }),
//         }
//       );

//       if (response.ok) {
//         setOrders(
//           orders.map((order) =>
//             order._id === id
//               ? { ...order, status }
//               : order
//           )
//         );
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     fetch(" https://shopeasy-kghk.onrender.com/api/admin/orders", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => setOrders(data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="bg-white p-5 rounded-xl shadow">
//       <h2 className="text-2xl font-bold mb-4">
//         Orders
//       </h2>

//       <div className="overflow-x-auto">
//         <table className="w-full border">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-2">
//                 Customer
//               </th>

//               <th className="border p-2">
//                 Total
//               </th>

//               <th className="border p-2">
//                 Status
//               </th>

//               <th className="border p-2">
//                 Date
//               </th>
//             </tr>
//           </thead>

//           <tbody>
//             {orders.map((order) => (
//               <tr key={order._id}>
//                 <td className="border p-2">
//                   {order.user?.username || "User"}
//                 </td>

//                 <td className="border p-2">
//                   ₹ {order.totalAmount}
//                 </td>

//                 <td className="border p-2">
//                   <select
//                     value={order.status}
//                     onChange={(e) =>
//                       updateStatus(
//                         order._id,
//                         e.target.value
//                       )
//                     }
//                     className="border p-1 rounded"
//                   >
//                     <option value="Pending">
//                       Pending
//                     </option>

//                     <option value="Shipped">
//                       Shipped
//                     </option>

//                     <option value="Delivered">
//                       Delivered
//                     </option>

//                     <option value="Cancelled">
//                       Cancelled
//                     </option>
//                   </select>
//                 </td>

//                 <td className="border p-2">
//                   {new Date(
//                     order.createdAt
//                   ).toLocaleDateString()}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {orders.length === 0 && (
//           <p className="text-gray-500 mt-4">
//             No Orders Found
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OrdersPage;


import { useEffect, useState } from "react";
import {
  FaShoppingBag,
  FaUser,
} from "react-icons/fa";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  const updateStatus = async (id, status) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        ` https://shopeasy-kghk.onrender.com/api/admin/orders/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status }),
        }
      );

      if (response.ok) {
        setOrders(
          orders.map((order) =>
            order._id === id
              ? { ...order, status }
              : order
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(" https://shopeasy-kghk.onrender.com/api/admin/orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Orders
          </h2>

          <p className="text-gray-500">
            Manage customer orders
          </p>
        </div>

        <div className="bg-purple-50 text-purple-600 px-5 py-3 rounded-2xl font-semibold shadow">
          {orders.length} Orders
        </div>
      </div>

      {/* Empty State */}
      {orders.length === 0 ? (
        <div className="bg-white rounded-3xl shadow-lg p-16 text-center">
          <FaShoppingBag
            size={60}
            className="mx-auto text-gray-300"
          />

          <h3 className="text-xl font-semibold mt-4 text-gray-600">
            No Orders Found
          </h3>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100"
            >
              <div className="flex justify-between items-start mb-5">
                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    {order.user?.username || "User"}
                  </h3>

                  <p className="text-sm text-gray-400">
                    #{order._id.slice(-8)}
                  </p>
                </div>

                <div className="bg-green-50 text-green-600 px-4 py-2 rounded-xl font-bold">
                  ₹ {order.totalAmount}
                </div>
              </div>

              <div className="space-y-3 mb-5">
                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Date
                  </span>

                  <span className="font-medium">
                    {new Date(
                      order.createdAt
                    ).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Status
                  </span>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold
            ${order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : order.status === "Shipped"
                          ? "bg-blue-100 text-blue-700"
                          : order.status === "Delivered"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                      }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>

              <select
                value={order.status}
                onChange={(e) =>
                  updateStatus(
                    order._id,
                    e.target.value
                  )
                }
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="Pending">
                  Pending
                </option>

                <option value="Shipped">
                  Shipped
                </option>

                <option value="Delivered">
                  Delivered
                </option>

                <option value="Cancelled">
                  Cancelled
                </option>
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;