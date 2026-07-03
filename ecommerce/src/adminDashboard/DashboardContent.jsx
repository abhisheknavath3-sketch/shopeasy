// import StatsCards from "./StatsCards";

// const DashboardContent = ({
//   stats,
//   users,
//   products,
// }) => {
//   return (
//     <>
//       <StatsCards stats={stats} />

//       <div className="grid lg:grid-cols-2 gap-6 mt-8">

//         <div className="bg-white p-5 rounded-xl shadow">
//           <h2 className="text-xl font-bold mb-4">
//             Recent Users
//           </h2>

//           {users.slice(0, 5).map((user) => (
//             <div
//               key={user._id}
//               className="flex justify-between border-b py-2"
//             >
//               <span>{user.username}</span>
//               <span>{user.role}</span>
//             </div>
//           ))}
//         </div>

//         <div className="bg-white p-5 rounded-xl shadow">
//           <h2 className="text-xl font-bold mb-4">
//             Categories
//           </h2>

//           {[...new Set(
//             products.map(
//               (product) => product.category
//             )
//           )].map((category, index) => (
//             <div
//               key={index}
//               className="border-b py-2"
//             >
//               {category}
//             </div>
//           ))}
//         </div>

//       </div>

//       <div className="bg-white p-5 rounded-xl shadow mt-8">
//         <h2 className="text-xl font-bold mb-4">
//           Recent Products
//         </h2>

//         {products.slice(0, 5).map((product) => (
//           <div
//             key={product._id}
//             className="flex justify-between items-center border-b py-3"
//           >
//             <div className="flex items-center gap-3">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-12 h-12 rounded object-cover"
//               />

//               <div>
//                 <h3 className="font-semibold">
//                   {product.name}
//                 </h3>

//                 <p className="text-gray-500">
//                   {product.category}
//                 </p>
//               </div>
//             </div>

//             <span className="font-bold">
//               ₹ {product.price}
//             </span>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default DashboardContent;

import {
  FaUsers,
  FaBoxOpen,
  FaLayerGroup,
} from "react-icons/fa";
import StatsCards from "./StatsCards";

const DashboardContent = ({
  stats,
  users,
  products,
}) => {
  const categories = [
    ...new Set(
      products.map(
        (product) => product.category
      )
    ),
  ];

  return (
    <div className="space-y-8">

      {/* Stats */}
      <StatsCards stats={stats} />

      {/* Users + Categories */}
      <div className="grid lg:grid-cols-1 gap-6">

        {/* Recent Users */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
              <FaUsers className="text-blue-600 text-lg" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Recent Users
              </h2>

              <p className="text-sm text-gray-500">
                Latest registered users
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {users.slice(0, 5).map((user) => (
              <div
                key={user._id}
                className="flex justify-between items-center bg-gray-50 rounded-xl px-4 py-3"
              >
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {user.username}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {user.email}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    user.role === "admin"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {user.role}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Products */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">

        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center">
            <FaBoxOpen className="text-green-600 text-lg" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Recent Products
            </h2>

            <p className="text-sm text-gray-500">
              Latest products added
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {products.reverse().slice(0, 5).map((product) => (
            <div
              key={product._id}
              className="flex items-center justify-between bg-gray-50 rounded-2xl p-4 hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />

                <div>
                  <h3 className="font-semibold text-gray-800">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {product.category}
                  </p>
                </div>

              </div>

              <div className="text-right">
                <p className="font-bold text-green-600 text-lg">
                  ₹ {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default DashboardContent;