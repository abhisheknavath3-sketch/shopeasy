import { useEffect, useState } from "react";
import Sidebar from "../adminDashboard/Sidebar";
import DashboardContent from "../adminDashboard/DashboardContent";
import UsersPage from "../adminDashboard/UsersPage";
import ProductsPage from "../adminDashboard/ProductsPage";
import OrdersPage from "../adminDashboard/OrdersPage";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  const [activeTab, setActiveTab] =
    useState("dashboard");

  const [showProductModal, setShowProductModal] =
    useState(false);

  const [editingProduct, setEditingProduct] =
    useState(null);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
  });

  const [stats, setStats] = useState({
    users: 0,
    products: 0,
    orders: 0,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));

    fetch("http://localhost:5000/api/admin/stats", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setStats(data));

    fetch("http://localhost:5000/api/admin/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(
      `http://localhost:5000/api/products/${id}`,
      {
        method: "DELETE",
      }
    );

    setProducts(
      products.filter(
        (product) => product._id !== id
      )
    );
  };

  const handleDeleteUser = async (id) => {
    try {
      const token =
        localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:5000/api/admin/user/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await response.json();

      setUsers(
        users.filter(
          (user) => user._id !== id
        )
      );

      alert("User Deleted ✅");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();

    try {
      let response;

      if (editingProduct) {
        response = await fetch(
          `http://localhost:5000/api/products/${editingProduct._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        const updatedProduct = await response.json();

        setProducts(
          products.map((p) =>
            p._id === updatedProduct._id
              ? updatedProduct
              : p
          )
        );

        setEditingProduct(null);

        alert("Product Updated ✅");
      }

      else {
        response = await fetch(
          "http://localhost:5000/api/products",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        const newProduct = await response.json();

        setProducts([
          ...products,
          newProduct,
        ]);

        alert("Product Added ✅");
      }

      setFormData({
        name: "",
        price: "",
        image: "",
        category: "",
      });

      setShowProductModal(false);

    } catch (error) {
      console.log(error);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);

    setFormData({
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });

    setShowProductModal(true);
  };

  return (
    <div className=" min-h-screen bg-slate-50">

      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="ml-69 p-8">

        <div className="sticky top-0 z-10 mb-8 backdrop-blur-xl bg-white/80 border border-white/50 shadow-lg rounded-3xl px-8 py-6">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            {/* Left */}
            <div className="flex items-center gap-3">

              <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                <span className="text-2xl">📊</span>
              </div>

              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  Admin Dashboard
                </h1>

                <p className="text-gray-500 text-sm mt-1">
                  Manage users, products and orders efficiently.
                </p>
              </div>

            </div>

            {/* Right */}
            <div className="flex items-center gap-4">

              <div className="hidden md:flex items-center gap-3 bg-linear-to-r from-indigo-50 to-purple-50 px-5 py-3 rounded-2xl border border-indigo-100">

                <div className="w-10 h-10 rounded-full bg-linear-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
                  A
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Welcome Back
                  </p>

                  <h3 className="font-semibold text-gray-800">
                    Administrator
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {activeTab === "dashboard" && (
          <DashboardContent
            stats={stats}
            users={users}
            products={products}
          />
        )}

        {activeTab === "users" && (
          <UsersPage
            users={users}
            handleDeleteUser={
              handleDeleteUser
            }
          />
        )}

        {activeTab === "products" && (
          <ProductsPage
            formData={formData}
            handleChange={handleChange}
            handleAddProduct={handleAddProduct}
            products={products}
            handleDelete={handleDelete}
            handleEditProduct={handleEditProduct}
            editingProduct={editingProduct}
            showProductModal={showProductModal}
            setShowProductModal={setShowProductModal}
            setEditingProduct={setEditingProduct}
            setFormData={setFormData}
          />
        )}

        {activeTab === "orders" && (
          <OrdersPage />
        )}
      </div>
    </div>
  );
};

export default Admin;