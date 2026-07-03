// import { useState, useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import { WishlistContext } from "../context/WishlistContext";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   FaShoppingCart,
//   FaHeart,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";

// const Navbar = () => {
//   const { cartItems } =
//     useContext(CartContext);

//   const { wishlistItems } =
//     useContext(WishlistContext);

//   const [menuOpen, setMenuOpen] = useState(false);

//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <nav className="sticky top-0 z-50 bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">

//         <Link
//           to="/"
//           className="text-2xl md:text-3xl font-bold text-blue-600"
//         >
//           ShopEasy
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-6">

//           <Link to="/" className="hover:text-blue-600">
//             Home
//           </Link>

//           <Link
//             to="/wishlist"
//             className="relative"
//           >
//             <FaHeart size={22} />

//             {wishlistItems.length > 0 && (
//               <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
//                 {wishlistItems.length}
//               </span>
//             )}
//           </Link>

//           <Link
//             to="/cart"
//             className="relative"
//           >
//             <FaShoppingCart size={22} />

//             {cartItems.length > 0 && (
//               <span className="absolute -top-2 -right-3 bg-blue-500 text-white text-xs px-2 rounded-full">
//                 {cartItems.length}
//               </span>
//             )}
//           </Link>

//           <Link
//             to="/my-orders"
//             className="hover:text-blue-600"
//           >
//             My Orders
//           </Link>

//           {
//             token ? (
//               <button
//                 onClick={handleLogout}
//                 className="px-4 py-2 bg-red-500 text-white rounded-lg"
//               >
//                 Logout
//               </button>
//             ) : (
//               <>
//                 <Link
//                   to="/login"
//                   className="px-4 py-2 border rounded-lg"
//                 >
//                   Login
//                 </Link>

//                 <Link
//                   to="/register"
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg"
//                 >
//                   Register
//                 </Link>
//               </>
//             )
//           }

//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden"
//           onClick={() =>
//             setMenuOpen(!menuOpen)
//           }
//         >
//           {menuOpen ? (
//             <FaTimes size={24} />
//           ) : (
//             <FaBars size={24} />
//           )}
//         </button>

//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-white">

//           <Link to="/">Home</Link>

//           <Link to="/wishlist">
//             Wishlist ({wishlistItems.length})
//           </Link>

//           <Link to="/cart">
//             Cart ({cartItems.length})
//           </Link>

//           <Link to="/my-orders">
//             My Orders
//           </Link>

//           {
//             token ? (
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-500 text-white p-2 rounded"
//               >
//                 Logout
//               </button>
//             ) : (
//               <>
//                 <Link to="/login">Login</Link>
//                 <Link to="/register">Register</Link>
//               </>
//             )
//           }

//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { Link, useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaHeart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const { wishlistItems } =
    useContext(WishlistContext);

  const [menuOpen, setMenuOpen] =
    useState(false);

  const token =
    localStorage.getItem("token");

  const navigate = useNavigate();

 const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("cart");
  localStorage.removeItem("wishlist");

  navigate("/login");
};

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          ShopEasy
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className="font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/my-orders"
            className="font-medium text-gray-700 hover:text-blue-600 transition"
          >
            My Orders
          </Link>

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="relative p-2 rounded-full hover:bg-pink-50 transition"
          >
            <FaHeart
              size={22}
              className="text-pink-500"
            />

            {wishlistItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {wishlistItems.length}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative p-2 rounded-full hover:bg-blue-50 transition"
          >
            <FaShoppingCart
              size={22}
              className="text-blue-600"
            />

            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>

          {token ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl font-medium transition"
            >
              Logout
            </button>
          ) : (
            <div className="flex gap-3">
              <Link
                to="/login"
                className="border border-gray-300 px-5 py-2 rounded-xl hover:bg-gray-100 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-xl hover:scale-105 transition"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          {menuOpen ? (
            <FaTimes size={24} />
          ) : (
            <FaBars size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-5 space-y-4 shadow-lg">

          <Link
            to="/"
            className="block font-medium"
          >
            Home
          </Link>

          <Link
            to="/wishlist"
            className="block font-medium"
          >
            Wishlist ({wishlistItems.length})
          </Link>

          <Link
            to="/cart"
            className="block font-medium"
          >
            Cart ({cartItems.length})
          </Link>

          <Link
            to="/my-orders"
            className="block font-medium"
          >
            My Orders
          </Link>

          {token ? (
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white py-2 rounded-xl"
            >
              Logout
            </button>
          ) : (
            <div className="flex flex-col gap-3">
              <Link
                to="/login"
                className="border text-center py-2 rounded-xl"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-blue-600 text-white text-center py-2 rounded-xl"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;