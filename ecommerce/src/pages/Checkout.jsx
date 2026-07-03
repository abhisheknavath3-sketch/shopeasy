import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    const navigate = useNavigate();

    const { cartItems, setCartItems } = useContext(CartContext);

    const totalPrice = cartItems.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );


    const handleOrder = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await fetch(
                " https://shopeasy-kghk.onrender.com/api/orders",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        products: cartItems,
                        totalAmount: totalPrice,
                    }),
                }
            );
            const data = await response.json();

            console.log(data);

            if (response.ok) {
                setCartItems([]);
                alert("Order Placed Successfully ✅");
                navigate("/OrderSuccess");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">

                    <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
                        Checkout
                    </h1>

                    <div className="grid lg:grid-cols-3 gap-8">

                        
                        <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8">

                            <h2 className="text-2xl font-bold mb-6">
                                Shipping Details
                            </h2>

                            <div className="grid md:grid-cols-2 gap-5">

                                <div>
                                    <label className="text-gray-600 text-sm">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        defaultValue={user?.username}
                                        placeholder="Enter Full Name"
                                        className="w-full mt-2 border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="text-gray-600 text-sm">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        defaultValue={user?.email}
                                        placeholder="Enter Email"
                                        className="w-full mt-2 border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                                    />
                                </div>

                            </div>

                            <div className="mt-5">

                                <label className="text-gray-600 text-sm">
                                    Address
                                </label>

                                <textarea
                                    rows="4"
                                    placeholder="Enter Delivery Address"
                                    className="w-full mt-2 border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                                ></textarea>

                            </div>

                            <div className="mt-5">

                                <label className="text-gray-600 text-sm">
                                    Phone Number
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter Phone Number"
                                    className="w-full mt-2 border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                                />

                            </div>

                        </div>

                       
                        <div className="bg-white rounded-3xl shadow-lg p-8 h-fit sticky top-24">

                            <h2 className="text-2xl font-bold mb-6">
                                Order Summary
                            </h2>

                            <div className="space-y-4 max-h-80 overflow-y-auto">

                                {cartItems.map((item) => (
                                    <div
                                        key={item._id || item.id}
                                        className="flex justify-between items-center border-b pb-3"
                                    >
                                        <div>
                                            <h3 className="font-semibold">
                                                {item.name}
                                            </h3>

                                            <p className="text-sm text-gray-500">
                                                Qty: {item.quantity}
                                            </p>
                                        </div>

                                        <span className="font-bold">
                                            ₹ {item.price * item.quantity}
                                        </span>
                                    </div>
                                ))}

                            </div>

                            <div className="mt-6 space-y-3">

                                <div className="flex justify-between text-gray-600">
                                    <span>Products</span>
                                    <span>{cartItems.length}</span>
                                </div>

                                <div className="flex justify-between text-gray-600">
                                    <span>Delivery</span>
                                    <span className="text-green-600">
                                        Free
                                    </span>
                                </div>

                                <hr />

                                <div className="flex justify-between text-2xl font-bold">
                                    <span>Total</span>
                                    <span className="text-green-600">
                                        ₹ {totalPrice}
                                    </span>
                                </div>

                            </div>

                            <button
                                onClick={handleOrder}
                                className="w-full mt-8 bg-linear-to-r from-green-500 to-emerald-600 text-white py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition"
                            >
                                Place Order 🚀
                            </button>

                        </div>

                    </div>

                </div>
            </div>

        </>
    );
};

export default Checkout;