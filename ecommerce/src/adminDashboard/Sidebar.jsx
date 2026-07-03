
// import {
//   FaTachometerAlt,
//   FaUsers,
//   FaBoxOpen,
//   FaShoppingCart,
//   FaCrown,
// } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Sidebar = ({
//   activeTab,
//   setActiveTab,
// }) => {
//   const menuItems = [
//     {
//       id: "dashboard",
//       label: "Dashboard",
//       icon: <FaTachometerAlt />,
//     },
//     {
//       id: "users",
//       label: "Users",
//       icon: <FaUsers />,
//     },
//     {
//       id: "products",
//       label: "Products",
//       icon: <FaBoxOpen />,
//     },
//     {
//       id: "orders",
//       label: "Orders",
//       icon: <FaShoppingCart />,
//     },
//   ];
// const navigate = useNavigate();
//   const handleLogout = () => {
//   localStorage.removeItem("token");
//   localStorage.removeItem("user");
//   localStorage.removeItem("cart");
//   localStorage.removeItem("wishlist");

//   navigate("/login");
// };

//   return (
//     <div className="w-72 min-h-screen bg-slate-900 text-white flex flex-col shadow-2xl fixed top-0 left-0">

//       {/* Logo */}
//       <div className="p-6 border-b border-slate-800">

//         <div className="flex items-center gap-3">

//           <div className="w-12 h-12 rounded-xl bg-linear-to-r from-blue-500 to-purple-600 flex items-center justify-center">
//             <FaCrown className="text-xl" />
//           </div>

//           <div>
//             <h1 className="text-2xl font-bold">
//               ShopEasy
//             </h1>

//             <p className="text-slate-400 text-sm">
//               Admin Panel
//             </p>
//           </div>

//         </div>

//       </div>

//       {/* Navigation */}
//       <div className="flex-1 p-4">

//         <p className="text-slate-500 text-xs uppercase tracking-widest mb-4 px-3">
//           Main Menu
//         </p>

//         {menuItems.map((item) => (
//           <button
//             key={item.id}
//             onClick={() =>
//               setActiveTab(item.id)
//             }
//             className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl mb-3 transition-all duration-300 ${activeTab === item.id
//                 ? "bg-linear-to-r from-blue-600 to-indigo-600 shadow-lg"
//                 : "hover:bg-slate-800"
//               }`}
//           >
//             <span className="text-lg">
//               {item.icon}
//             </span>

//             <span className="font-medium">
//               {item.label}
//             </span>
//           </button>
//         ))}

//       </div>

//       {/* Bottom Profile */}
//       <div className="p-5 border-t border-slate-800">

//         <div className="flex items-center gap-3">

//           <button
//             onClick={handleLogout}
//             className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-xl font-medium transition"
//           >
//             Logout
//           </button>

//         </div>

//       </div>

//     </div>

//   );
// };

// export default Sidebar;

import {
  FaTachometerAlt,
  FaUsers,
  FaBoxOpen,
  FaShoppingCart,
  FaCrown,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = ({
  activeTab,
  setActiveTab,
}) => {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      id: "users",
      label: "Users",
      icon: <FaUsers />,
    },
    {
      id: "products",
      label: "Products",
      icon: <FaBoxOpen />,
    },
    {
      id: "orders",
      label: "Orders",
      icon: <FaShoppingCart />,
    },
  ];

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    localStorage.removeItem("wishlist");

    navigate("/login");
  };

  return (
    <aside className="fixed top-0 left-0 w-72 h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex flex-col shadow-2xl border-r border-slate-800">

      {/* Logo */}
      <div className="p-6 border-b border-slate-800">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
            <FaCrown className="text-2xl text-white" />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              ShopEasy
            </h1>

            <p className="text-slate-400 text-sm">
              Admin Dashboard
            </p>
          </div>

        </div>

      </div>

      {/* Menu */}
      <div className="flex-1 px-5 py-6">

        <p className="text-xs uppercase tracking-[3px] text-slate-500 mb-5">
          Navigation
        </p>

        <div className="space-y-3">

          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`group w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
                activeTab === item.id
                  ? "bg-linear-to-r from-indigo-600 to-purple-600 shadow-xl scale-[1.02]"
                  : "hover:bg-slate-800 hover:translate-x-1"
              }`}
            >
              <div
                className={`text-xl ${
                  activeTab === item.id
                    ? "text-white"
                    : "text-slate-400 group-hover:text-white"
                }`}
              >
                {item.icon}
              </div>

              <span className="font-medium text-[15px]">
                {item.label}
              </span>

            </button>
          ))}

        </div>

      </div>

      {/* Bottom */}
      <div className="p-5 border-t border-slate-800">


        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 py-3 rounded-2xl font-semibold transition duration-300 shadow-lg"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </aside>
  );
};

export default Sidebar;