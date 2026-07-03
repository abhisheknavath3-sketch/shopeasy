// const StatsCards = ({ stats }) => {
//   return (
//     <div className="grid md:grid-cols-3 gap-6">

//       <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
//         <h2>Users</h2>
//         <p className="text-3xl font-bold">{stats.users}</p>
//       </div>

//       <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg">
//         <h2>Products</h2>
//         <p className="text-3xl font-bold">{stats.products}</p>
//       </div>

//      <div className="bg-purple-600 text-white p-6 rounded-xl shadow-lg">
//         <h2>Orders</h2>
//         <p className="text-3xl font-bold">{stats.orders}</p>
//       </div>
//     </div>
//   );
// };

// export default StatsCards;

import {
  FaUsers,
  FaBoxOpen,
  FaShoppingBag,
} from "react-icons/fa";

const StatsCards = ({ stats }) => {
  const cards = [
    {
      title: "Users",
      value: stats.users,
      icon: <FaUsers size={28} />,
      bg: "from-blue-500 to-blue-700",
    },
    {
      title: "Products",
      value: stats.products,
      icon: <FaBoxOpen size={28} />,
      bg: "from-emerald-500 to-green-700",
    },
    {
      title: "Orders",
      value: stats.orders,
      icon: <FaShoppingBag size={28} />,
      bg: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`bg-linear-to-r ${card.bg}
          text-white rounded-3xl p-6 shadow-xl
          hover:scale-105 transition-all duration-300
          cursor-pointer`}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-white/80 text-sm font-medium">
                {card.title}
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {card.value}
              </h2>
            </div>

            <div className="bg-white/20 p-4 rounded-2xl">
              {card.icon}
            </div>
          </div>

          <div className="mt-5 h-1 w-full bg-white/20 rounded-full">
            <div className="h-1 w-3/4 bg-white rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;