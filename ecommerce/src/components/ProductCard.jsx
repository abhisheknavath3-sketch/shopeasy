// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import { WishlistContext } from "../context/WishlistContext";
// import { Link } from "react-router-dom";

// const ProductCard = ({ product }) => {
//   const { addToCart } = useContext(CartContext);

//   const { addToWishlist } =
//     useContext(WishlistContext);

//   return (
//     <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">

//       {/* Product Image */}
//       <div className="overflow-hidden">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="h-56 w-full object-cover hover:scale-110 transition duration-500"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-4">

//         <h2 className="font-bold text-lg truncate">
//           {product.name}
//         </h2>

//         <p className="text-green-600 font-semibold mt-2">
//           ₹ {product.price}
//         </p>

//         {/* Buttons */}
//         <div className="flex gap-2 mt-4">

//           <Link
//             to={`/product/${product._id}`}
//             className="flex-1"
//           >
//             <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
//               View
//             </button>
//           </Link>

//           <button
//             onClick={() =>
//               addToWishlist(product)
//             }
//             className="bg-pink-500 hover:bg-pink-600 text-white px-4 rounded-lg transition"
//           >
//             ❤️
//           </button>

//         </div>

//         <button
//           onClick={() =>
//             addToCart(product)
//           }
//           className="w-full mt-3 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
//         >
//           Add To Cart
//         </button>

//       </div>
//     </div>
//   );
// };

// export default ProductCard;


import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } =
    useContext(WishlistContext);

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-100">

        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
        />

        <button
          onClick={() => addToWishlist(product)}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:scale-110 transition"
        >
          ❤️
        </button>

        <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
          New
        </span>
      </div>

      {/* Product Details */}
      <div className="p-5">

        <h2 className="font-bold text-xl text-gray-800 mb-2 truncate">
          {product.name}
        </h2>

        <p className="text-sm text-gray-500 mb-3">
          {product.category}
        </p>

        <div className="flex items-center justify-between mb-5">
          <p className="text-2xl font-bold text-green-600">
            ₹{product.price}
          </p>

          <div className="text-yellow-500 text-sm">
            ⭐⭐⭐⭐⭐
          </div>
        </div>

        <div className="flex gap-3">

          <Link
            to={`/product/${product._id}`}
            className="flex-1"
          >
            <button className="w-full py-3 rounded-xl border border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition">
              View Details
            </button>
          </Link>

          <button
            onClick={() => addToCart(product)}
            className="flex-1 py-3 rounded-xl bg-linear-to-r from-green-500 to-emerald-600 text-white font-semibold hover:scale-105 transition"
          >
            Add Cart
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;