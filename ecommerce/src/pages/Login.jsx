// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { FaEnvelope, FaLock } from "react-icons/fa";


// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(
//         "http://localhost:5000/api/users/login",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             email: formData.email,
//             password: formData.password,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("user", JSON.stringify(data.user));

//         alert("Login Successful ✅");

//         if (data.user.role === "admin") {
//           navigate("/admin");
//         } else {
//           navigate("/");
//         }
//       }
//       else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 px-4">

//         <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-md">

//           <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
//             Welcome Back 👋
//           </h1>

//           <p className="text-center text-gray-500 mb-6">
//             Login to your account
//           </p>

//           <form className="space-y-5" onSubmit={handleSubmit}>

//             <div className="relative">
//               <FaEnvelope className="absolute left-3 top-4 text-gray-400" />

//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email"
//                 className="w-full border pl-10 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="relative">
//               <FaLock className="absolute left-3 top-4 text-gray-400" />

//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Password"
//                 className="w-full border pl-10 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="text-right">
//               <Link
//                 to="/forgot-password"
//                 className="text-sm text-blue-600 hover:underline"
//               >
//                 Forgot Password?
//               </Link>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-300"
//             >
//               Login
//             </button>

//           </form>

//           <p className="text-center mt-5">
//             Don't have an account?{" "}
//             <Link
//               to="/register"
//               className="text-blue-600 font-semibold"
//             >
//               Register
//             </Link>
//           </p>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Login;

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";

import {
  FaEnvelope,
  FaLock,
  FaShoppingBag,
} from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("LOGIN USER:", data.user);


        localStorage.setItem("token", data.token);
        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        alert("Login Successful ✅");

        if (data.user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center px-4 py-10">

        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

          
          <div className="hidden md:flex flex-col justify-center bg-linear-to-br from-blue-700 to-purple-700 text-white p-10">

            <div className="mb-6">
              <FaShoppingBag size={60} />
            </div>

            <h1 className="text-4xl font-bold mb-4">
              Welcome Back!
            </h1>

            <p className="text-lg text-gray-200 leading-relaxed">
              Login to access your orders,
              wishlist and shopping cart.
              Continue shopping with ShopEasy.
            </p>

            <div className="mt-8">
              <div className="bg-white/10 p-4 rounded-xl mb-3">
                ✓ Secure Login
              </div>

              <div className="bg-white/10 p-4 rounded-xl mb-3">
                ✓ Fast Checkout
              </div>

              <div className="bg-white/10 p-4 rounded-xl">
                ✓ Track Orders Easily
              </div>
            </div>
          </div>

          
          <div className="p-8 md:p-12">

            <h2 className="text-3xl font-bold text-gray-800 text-center">
              Sign In
            </h2>

            <p className="text-center text-gray-500 mt-2 mb-8">
              Login to your account
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <div className="relative">
                <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="relative">
                <FaLock className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="text-right">
                <Link
                  to="/forgot-password"
                  className="text-sm text-indigo-600 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition duration-300 shadow-lg"
              >
                Login
              </button>

            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  Register
                </Link>
              </p>
            </div>

          </div>
        </div>
      </div>

      
    </>
  );
};

export default Login;