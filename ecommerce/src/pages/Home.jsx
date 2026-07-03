import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const Home = () => {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");


    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            selectedCategory === "All" ||
            product.category?.trim().toLowerCase() ===
            selectedCategory.trim().toLowerCase();

        return matchesSearch && matchesCategory;
    });

    useEffect(() => {
        fetch("http://localhost:5000/api/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <Navbar />

                <section className="relative overflow-hidden bg-linear-to-r from-slate-900 via-indigo-900 to-purple-900 text-white">

                    <div className="absolute inset-0 bg-black/20"></div>

                    <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">

                        <div className="text-center">

                            <span className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm">
                                🔥 New Collection Available
                            </span>

                            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight">
                                Shop Smarter <br />
                                <span className="text-yellow-400">
                                    Live Better
                                </span>
                            </h1>

                            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                                Discover premium electronics, mobiles,
                                fashion and accessories at unbeatable
                                prices with fast delivery and secure
                                shopping.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

                                <button
                                    onClick={() =>
                                        document
                                            .getElementById("categories")
                                            ?.scrollIntoView({
                                                behavior: "smooth",
                                                block: "start",
                                            })
                                    }
                                    className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
                                >
                                    Shop Now
                                </button>

                                <button
                                    onClick={() =>
                                        document
                                            .getElementById("products")
                                            ?.scrollIntoView({
                                                behavior: "smooth",
                                                block: "start",
                                            })
                                    }
                                    className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition"
                                >
                                    Explore Products
                                </button>

                            </div>

                            <div className="flex justify-center gap-10 mt-14 flex-wrap">

                                <div>
                                    <h3 className="text-3xl font-bold">
                                        1000+
                                    </h3>
                                    <p className="text-gray-400">
                                        Products
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold">
                                        500+
                                    </h3>
                                    <p className="text-gray-400">
                                        Customers
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold">
                                        24/7
                                    </h3>
                                    <p className="text-gray-400">
                                        Support
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                <SearchBar
                    search={search}
                    setSearch={setSearch}
                />

                <div id="categories">
                    <Category
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                </div>
                <div
                    id="products"
                    className="text-center mt-12"
                >
                    <h2 className="text-4xl font-bold text-gray-800">
                        Featured Products
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Explore our latest collection
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8 lg:px-10 py-8">

                    {
                        filteredProducts.length === 0 ? (
                            <h2 className="text-center text-xl md:text-2xl col-span-full">
                                No Products Found
                            </h2>
                        ) : (
                            filteredProducts.map((product) => (
                                <ProductCard
                                    key={product._id}
                                    product={product}
                                />
                            ))
                        )}
                </div>

                <Footer />
            </div>
        </>
    );
};

export default Home;