const ProductModal = ({
  show,
  onClose,
  formData,
  handleChange,
  handleAddProduct,
  editingProduct,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md">

        <h2 className="text-2xl font-bold mb-4">
          {editingProduct
            ? "Edit Product"
            : "Add Product"}
        </h2>

        <form onSubmit={handleAddProduct}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 w-full mb-3 rounded"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="border p-3 w-full mb-3 rounded"
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="border p-3 w-full mb-3 rounded"
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="border p-3 w-full mb-4 rounded"
          />

          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              {editingProduct
                ? "Update"
                : "Add"}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default ProductModal;