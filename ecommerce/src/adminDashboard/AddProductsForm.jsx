// import {
//   FaBoxOpen,
//   FaImage,
//   FaTag,
//   FaRupeeSign,
// } from "react-icons/fa";

// const AddProductsForm = ({
//   formData,
//   handleChange,
//   handleAddProduct,
//   editingProduct,
//   setFormData,
// }) => {

//   const handleImageUpload = async (e) => {
//   const file = e.target.files[0];

//   if (!file) return;

//   try {
//     const data = new FormData();
//     data.append("image", file);

//     const response = await fetch(
//       "http://localhost:5000/api/upload",
//       {
//         method: "POST",
//         body: data,
//       }
//     );

//     const result = await response.json();

//     console.log(result);

//     setFormData((prev) => ({
//       ...prev,
//       image: result.imageUrl,
//     }));
//   } catch (error) {
//     console.log(error);
//   }
// };

//   return (
//     <form
//       onSubmit={handleAddProduct}
//       className="space-y-5"
//     >
//       <div>
//         <h2 className="text-2xl font-bold text-gray-800">
//           {editingProduct
//             ? "Edit Product"
//             : "Add New Product"}
//         </h2>

//         <p className="text-gray-500 mt-1">
//           Fill the product details below
//         </p>
//       </div>

//       {/* Product Name */}
//       <div className="relative">
//         <FaBoxOpen className="absolute left-4 top-4 text-gray-400" />

//         <input
//           type="text"
//           name="name"
//           placeholder="Product Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full border border-gray-300 pl-11 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
//         />
//       </div>

//       {/* Price */}
//       <div className="relative">
//         <FaRupeeSign className="absolute left-4 top-4 text-gray-400" />

//         <input
//           type="number"
//           name="price"
//           placeholder="Product Price"
//           value={formData.price}
//           onChange={handleChange}
//           className="w-full border border-gray-300 pl-11 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
//         />
//       </div>

//       {/* Image URL */}
//       <div className="relative">
//         <FaImage className="absolute left-4 top-4 text-gray-400" />


//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageUpload}
//         />

//       </div>

//       {/* Image Preview */}
//       {formData.image && (
//         <div className="border rounded-2xl overflow-hidden">
//           <img
//             src={formData.image}
//             alt="Preview"
//             className="h-52 w-full object-cover"
//           />
//         </div>
//       )}

//       {/* Category */}
//       <div className="relative">
//         <FaTag className="absolute left-4 top-4 text-gray-400 z-10" />

//         <select
//           name="category"
//           value={formData.category}
//           onChange={handleChange}
//           className="w-full border border-gray-300 pl-11 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none"
//         >
//           <option value="">
//             Select Category
//           </option>

//           <option value="Mobiles">
//             Mobiles
//           </option>

//           <option value="Electronics">
//             Electronics
//           </option>

//           <option value="Shoes">
//             Shoes
//           </option>

//           <option value="Fashion">
//             Fashion
//           </option>
//         </select>
//       </div>

//       {/* Submit Button */}
//       <button
//         type="submit"
//         className="w-full bg-linear-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition duration-300 shadow-lg"
//       >
//         {editingProduct
//           ? "Update Product"
//           : "Add Product"}
//       </button>
//     </form>
//   );
// };

// export default AddProductsForm;

// import {
// FaBoxOpen,
// FaImage,
// FaTag,
// FaRupeeSign,
// } from "react-icons/fa";

// const AddProductsForm = ({
// formData,
// handleChange,
// handleAddProduct,
// editingProduct,
// setFormData,
// }) => {

// const handleImageUpload = async (e) => {
// const file = e.target.files[0];

// if (!file) return;

// try {
//   const data = new FormData();
//   data.append("image", file);

//   const response = await fetch(
//     "http://localhost:5000/api/upload",
//     {
//       method: "POST",
//       body: data,
//     }
//   );

//   const result = await response.json();

//   console.log(result);

//   setFormData((prev) => ({
//     ...prev,
//     image: result.imageUrl,
//   }));
// } catch (error) {
//   console.log(error);
// }

// };

// return (
// <form onSubmit={handleAddProduct} className="space-y-6" >

//   <div className="text-center">
//     <h2 className="text-3xl font-bold text-gray-800">
//       {editingProduct
//         ? "Edit Product"
//         : "Add New Product"}
//     </h2>

//     <p className="text-gray-500 mt-2">
//       Fill the product details below
//     </p>
//   </div>

//   {/* Product Name */}
//   <div className="relative">
//     <FaBoxOpen className="absolute left-4 top-4 text-gray-400" />

//     <input
//       type="text"
//       name="name"
//       placeholder="Product Name"
//       value={formData.name}
//       onChange={handleChange}
//       className="w-full border border-gray-200 bg-gray-50 pl-11 pr-4 py-3 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition outline-none shadow-sm"
//     />
//   </div>

//   {/* Price */}
//   <div className="relative">
//     <FaRupeeSign className="absolute left-4 top-4 text-gray-400" />

//     <input
//       type="number"
//       name="price"
//       placeholder="Product Price"
//       value={formData.price}
//       onChange={handleChange}
//       className="w-full border border-gray-200 bg-gray-50 pl-11 pr-4 py-3 rounded-2xl focus:ring-2 focus:ring-green-500 focus:bg-white transition outline-none shadow-sm"
//     />
//   </div>

//   {/* Image Upload */}
//   <div className="space-y-3">

//     <label className="block text-sm font-semibold text-gray-700">
//       Product Image
//     </label>

//     <label className="cursor-pointer block border-2 border-dashed border-indigo-300 rounded-3xl p-8 text-center bg-indigo-50 hover:bg-indigo-100 transition">

//       <FaImage className="mx-auto text-5xl text-indigo-500 mb-4" />

//       <p className="font-semibold text-gray-700">
//         Click to Upload Image
//       </p>

//       <p className="text-sm text-gray-500 mt-1">
//         JPG, PNG, WEBP Supported
//       </p>

//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleImageUpload}
//         className="hidden"
//       />

//     </label>

//   </div>

//   {/* Image Preview */}
//   {formData.image && (
//     <div className="relative overflow-hidden rounded-3xl border border-gray-200 shadow-lg">

//       <img
//         src={formData.image}
//         alt="Preview"
//         className="h-60 w-full object-cover hover:scale-105 transition duration-500"
//       />

//       <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm px-4 py-2">
//         Image Preview
//       </div>

//     </div>
//   )}

//   {/* Category */}
//   <div className="relative">
//     <FaTag className="absolute left-4 top-4 text-gray-400 z-10" />

//     <select
//       name="category"
//       value={formData.category}
//       onChange={handleChange}
//       className="w-full border border-gray-200 bg-gray-50 pl-11 pr-4 py-3 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition outline-none appearance-none shadow-sm"
//     >
//       <option value="">
//         Select Category
//       </option>

//       <option value="Mobiles">
//         Mobiles
//       </option>

//       <option value="Electronics">
//         Electronics
//       </option>

//       <option value="Shoes">
//         Shoes
//       </option>

//       <option value="Fashion">
//         Fashion
//       </option>
//     </select>
//   </div>

//   {/* Submit Button */}
//   <button
//     type="submit"
//     className="w-full bg-linear-to-r from-green-500 to-emerald-600 text-white py-3 rounded-2xl font-semibold hover:scale-[1.02] transition duration-300 shadow-xl"
//   >
//     {editingProduct
//       ? "Update Product"
//       : "Add Product"}
//   </button>

// </form>

// );
// };

// export default AddProductsForm;

import {
  FaBoxOpen,
  FaImage,
  FaTag,
  FaRupeeSign,
} from "react-icons/fa";

const AddProductsForm = ({
  formData,
  handleChange,
  handleAddProduct,
  editingProduct,
  setFormData,
}) => {

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    try {
      const data = new FormData();
      data.append("image", file);

      const response = await fetch(
        "http://localhost:5000/api/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      setFormData((prev) => ({
        ...prev,
        image: result.imageUrl,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleAddProduct}
      className="space-y-6"
    >

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          {editingProduct
            ? "Edit Product"
            : "Add New Product"}
        </h2>

        <p className="text-gray-500 mt-2">
          Fill the product details below
        </p>
      </div>

      {/* Product Name */}
      <div className="relative">
        <FaBoxOpen className="absolute left-4 top-4 text-gray-400" />

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none transition"
        />
      </div>

      {/* Price */}
      <div className="relative">
        <FaRupeeSign className="absolute left-4 top-4 text-gray-400" />

        <input
          type="number"
          name="price"
          placeholder="Product Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full pl-12 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-green-500 outline-none transition"
        />
      </div>

      {/* Upload */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Product Image
        </label>

        <label className="flex items-center gap-4 border border-gray-300 rounded-2xl px-5 py-4 bg-gray-50 hover:bg-gray-100 cursor-pointer transition">

          <div className="w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center">
            <FaImage className="text-2xl text-indigo-600" />
          </div>

          <div className="flex-1">
            <h3 className="font-semibold text-gray-800">
              Upload Product Image
            </h3>

            <p className="text-sm text-gray-500">
              JPG, PNG or WEBP
            </p>
          </div>

          <span className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-medium">
            Browse
          </span>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />

        </label>
      </div>

      {/* Preview */}
      {formData.image && (
        <div className="flex items-center gap-4 p-3 border rounded-2xl bg-gray-50">

          <img
            src={formData.image}
            alt="Preview"
            className="w-24 h-24 rounded-xl object-cover border"
          />

          <div className="flex-1">
            <h4 className="font-semibold text-gray-800">
              Image Uploaded
            </h4>

            <p className="text-sm text-gray-500">
              Ready to save this product.
            </p>
          </div>

          <div className="text-green-600 text-2xl">
            ✅
          </div>

        </div>
      )}

      {/* Category */}
      <div className="space-y-2">

  <label className="text-sm font-semibold text-gray-700">
    Category
  </label>

  <div className="relative">

    <FaTag className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500" />

    <select
      name="category"
      value={formData.category}
      onChange={handleChange}
      className="w-full appearance-none bg-white border border-gray-200 rounded-2xl pl-12 pr-12 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
    >
      <option value="">Choose Category</option>
      <option value="Mobiles">📱 Mobiles</option>
      <option value="Electronics">💻 Electronics</option>
      <option value="Shoes">👟 Shoes</option>
      <option value="Fashion">👕 Fashion</option>
    </select>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>

  </div>

</div>

      <button
        type="submit"
        className="w-full bg-linear-to-r from-green-500 to-emerald-600 text-white py-3 rounded-2xl font-semibold shadow-xl hover:scale-[1.02] transition"
      >
        {editingProduct
          ? "Update Product"
          : "Add Product"}
      </button>

    </form>
  );
};

export default AddProductsForm;