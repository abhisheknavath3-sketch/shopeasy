
import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";


const Wishlist = () => {
  const {
    wishlistItems,
    removeFromWishlist,
  } = useContext(WishlistContext);

  const { addToCart } =
    useContext(CartContext);

  return (
   <>
<Navbar />

  <div className="min-h-screen bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">

      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
        My Wishlist ❤️
      </h1>

      {wishlistItems.length === 0 ? (
        <div className="bg-white rounded-3xl shadow-lg p-12 text-center mt-16">

          <div className="text-7xl mb-4">
            ❤️
          </div>

          <h2 className="text-3xl font-bold">
            Your Wishlist Is Empty
          </h2>

          <p className="text-gray-500 mt-3">
            Save your favorite products here
          </p>

        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {wishlistItems.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >

              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">

                <h2 className="text-xl font-bold text-gray-800 truncate">
                  {item.name}
                </h2>

                <p className="text-green-600 font-bold text-2xl mt-3">
                  ₹ {item.price}
                </p>

                <div className="flex flex-col gap-3 mt-5">

                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-2xl font-semibold hover:scale-105 transition"
                  >
                    Add To Cart 🛒
                  </button>

                  <button
                    onClick={() =>
                      removeFromWishlist(item._id)
                    }
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-2xl font-semibold transition"
                  >
                    Remove ❤️
                  </button>

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

export default Wishlist;