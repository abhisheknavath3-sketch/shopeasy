import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">

          <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
            Shopping Cart
          </h1>

          {cartItems.length === 0 ? (
            <div className="bg-white rounded-3xl shadow-lg p-12 text-center mt-16">

              <div className="text-7xl mb-4">
                🛒
              </div>

              <h2 className="text-3xl font-bold">
                Your Cart Is Empty
              </h2>

              <p className="text-gray-500 mt-3">
                Add some products to continue shopping
              </p>

              <Link to="/">
                <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
                  Continue Shopping
                </button>
              </Link>

            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">

              
              <div className="lg:col-span-2">

                {cartItems.map((item) => (

                  <div
                    key={item._id || item.id}
                    className="bg-white flex flex-col md:flex-row items-center gap-6 p-5 mb-5 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300"
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full md:w-36 h-36 object-cover rounded-2xl"
                    />

                    <div className="flex-1 text-center md:text-left">

                      <h2 className="text-2xl font-bold text-gray-800">
                        {item.name}
                      </h2>

                      <p className="text-green-600 font-bold text-lg mt-2">
                        ₹ {item.price}
                      </p>

                    </div>

                    <div className="flex flex-col items-center gap-4">

                      <div className="flex items-center gap-3">

                        <button
                          onClick={() =>
                            decreaseQuantity(item._id || item.id)
                          }
                          className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition"
                        >
                          -
                        </button>

                        <span className="font-bold text-lg w-8 text-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(item._id || item.id)
                          }
                          className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition"
                        >
                          +
                        </button>

                      </div>

                      <button
                        onClick={() =>
                          removeFromCart(item._id || item.id)
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl font-medium transition"
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                ))}

              </div>

              
              <div className="bg-white rounded-3xl p-8 h-fit shadow-xl sticky top-24">

                <h2 className="text-3xl font-bold mb-6">
                  Order Summary
                </h2>

                <div className="flex justify-between mb-4 text-gray-600">
                  <span>Items</span>
                  <span>{cartItems.length}</span>
                </div>

                <div className="flex justify-between mb-4 text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-semibold">
                    Free
                  </span>
                </div>

                <div className="flex justify-between text-2xl font-bold border-t pt-4">
                  <span>Total</span>
                  <span className="text-blue-600">
                    ₹ {totalPrice}
                  </span>
                </div>

                <Link to="/checkout">
                  <button className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl mt-6 font-semibold hover:scale-105 transition">
                    Proceed To Checkout
                  </button>
                </Link>

              </div>

            </div>
          )}

        </div>
      </div>


    </>
  );
};

export default Cart;