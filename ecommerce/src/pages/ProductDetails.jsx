import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
    const { id } = useParams();

    const { addToCart } = useContext(CartContext);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(" https://shopeasy-kghk.onrender.com/api/products")
            .then((res) => res.json())
            .then((data) => {
                const foundProduct = data.find(
                    (item) => item._id === id
                );

                setProduct(foundProduct);
            });
    }, [id]);

    if (!product) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
  <Navbar />

  <div className="bg-gray-100 min-h-screen py-10">

    <div className="max-w-6xl mx-auto px-4">

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <div className="grid md:grid-cols-2 gap-10 p-8">

          {/* Image */}
          <div className="bg-gray-100 rounded-2xl p-6 flex items-center justify-center">

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-contain hover:scale-105 transition duration-500"
            />

          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">

            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full w-fit text-sm font-semibold">
              {product.category}
            </span>

            <h1 className="text-4xl font-bold mt-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <span className="text-yellow-500">
                ⭐⭐⭐⭐⭐
              </span>

              <span className="text-gray-500">
                4.8 Rating
              </span>
            </div>

            <p className="text-4xl font-bold text-green-600 mt-5">
              ₹ {product.price}
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              High quality product with amazing
              features. Perfect for everyday use.
              Premium quality and long lasting
              performance.
            </p>

            <div className="mt-6 space-y-2">

              <p className="text-green-600">
                ✅ In Stock
              </p>

              <p className="text-gray-500">
                🚚 Free Delivery Available
              </p>

              <p className="text-gray-500">
                🔒 Secure Payment
              </p>

            </div>

            <div className="flex gap-4 mt-8">

              <button
                onClick={() => addToCart(product)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition"
              >
                Add To Cart
              </button>

             
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</>
    );
};

export default ProductDetails;