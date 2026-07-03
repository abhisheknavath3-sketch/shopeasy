import AddProductsForm from "./AddProductsForm";
import ProductsTable from "./ProductsTable";
import { FaPlus } from "react-icons/fa";

const ProductsPage = ({
  formData,
  handleChange,
  handleAddProduct,
  products,
  handleDelete,
  handleEditProduct,
  editingProduct,
  showProductModal,
  setShowProductModal,
  setEditingProduct,
  setFormData,
}) => {
  return (
    <>
      <div className=" flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Products Management
          </h2>

          <p className="text-gray-500 mt-1">
            Manage your store products
          </p>
        </div>

        <button
          onClick={() => {
            setEditingProduct(null);
            setShowProductModal(true);
          }}
          className="flex items-center gap-2 bg-linear-to-r from-green-500 to-emerald-600 text-white px-5 py-3 rounded-2xl shadow-lg hover:scale-105 transition"
        >
          <FaPlus />
          Add Product
        </button>
      </div>

      {showProductModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl relative overflow-hidden">

            <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white p-5">
              <h3 className="text-xl font-bold">
                {editingProduct
                  ? "Edit Product"
                  : "Add New Product"}
              </h3>
            </div>

            <button
              onClick={() => setShowProductModal(false)}
              className="absolute top-4 right-5 text-white text-2xl"
            >
              ×
            </button>

            <div className="p-6">
              <AddProductsForm
                formData={formData}
                handleChange={handleChange}
                handleAddProduct={handleAddProduct}
                editingProduct={editingProduct}
                setFormData={setFormData}
              />
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-5">
        <ProductsTable
          products={products}
          handleDelete={handleDelete}
          handleEditProduct={handleEditProduct}
        />
      </div>
    </>
  );
};

export default ProductsPage;