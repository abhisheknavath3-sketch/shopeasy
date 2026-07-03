// // const ProductsTable = ({
// //   products,
// //   handleDelete,
// // }) => {
// //   return (
// //     <>
// //       <h2 className="text-2xl font-bold mb-4">
// //   Products
// // </h2>

// // <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
// //       {products.map((product) => (
// //         <div
// //           key={product._id}
// //           className="border rounded-xl shadow p-4"
// //         >
// //           <h3>{product.name}</h3>

// //           <p>₹ {product.price}</p>

// //           <button
// //             onClick={() =>
// //               handleDelete(product._id)
// //             }
// //             className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mt-3"
// //           >
// //             Delete
// //           </button>
// //         </div>
// //       ))}
// //     </>
// //   );
// // };

// // export default ProductsTable;






// const ProductsTable = ({
//   products,
//   handleDelete,
//   handleEditProduct,
// }) => {

//   return (
//     <>
//       <h2 className="text-2xl font-bold mb-4">
//         Products
//       </h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="border rounded-xl shadow p-4"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="h-40 w-full object-cover rounded"
//             />

//             <h3 className="text-lg font-bold mt-3">
//               {product.name}
//             </h3>

//             <p>₹ {product.price}</p>

//             <button
//               onClick={() => handleEditProduct(product)}
//               className="bg-blue-500 text-white px-3 py-1 rounded"
//             >
//               Edit
//             </button>

//             <button
//               onClick={() => handleDelete(product._id)}
//               className="bg-red-500 text-white px-3 py-1 rounded"
//             >
//               Delete
//             </button>
//           </div>

//         ))}
//       </div>
//     </>
//   );
// };

// export default ProductsTable;


import {
  FaEdit,
  FaTrash,
  FaBoxOpen,
} from "react-icons/fa";

const ProductsTable = ({
  products,
  handleDelete,
  handleEditProduct,
}) => {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Products
          </h2>

          <p className="text-gray-500">
            Manage all store products
          </p>
        </div>

        <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl font-semibold">
          {products.length} Products
        </div>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-20">
          <FaBoxOpen
            size={60}
            className="mx-auto text-gray-300"
          />

          <h3 className="text-xl font-semibold mt-4 text-gray-600">
            No Products Found
          </h3>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-56 w-full object-cover"
                />

                <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {product.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 truncate">
                  {product.name}
                </h3>

                <p className="text-2xl font-bold text-green-600 mt-2">
                  ₹ {product.price}
                </p>

                <div className="flex gap-3 mt-5">
                  <button
                    onClick={() =>
                      handleEditProduct(product)
                    }
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl transition"
                  >
                    <FaEdit />
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(product._id)
                    }
                    className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition"
                  >
                    <FaTrash />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsTable;