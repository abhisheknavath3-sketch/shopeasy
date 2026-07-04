// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useState } from "react";
// import {
//   FaUser,
//   FaEnvelope,
//   FaLock
// } from "react-icons/fa";


// const Register = () => {

//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });


//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (
//       formData.password !==
//       formData.confirmPassword
//     ) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await fetch(
//         " https://shopeasy-kghk.onrender.com/api/users/register",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type":
//               "application/json",
//           },
//           body: JSON.stringify({
//             username: formData.username,
//             email: formData.email,
//             password: formData.password,
//           }),
//         }
//       );

//       const data =
//         await response.json();

//       alert(data.message);

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen flex justify-center items-center bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 px-4">

//         <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 md:p-8">

//           <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
//             Create Account 🚀
//           </h1>

//           <p className="text-center text-gray-500 mb-6">
//             Join ShopEasy today
//           </p>

//           <form
//             className="space-y-4"
//             onSubmit={handleSubmit}
//           >

//             <div className="relative">
//               <FaEnvelope className="absolute left-3 top-4 text-gray-400" />

//               <input
//                 type="text"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 placeholder="Username"
//                 className="w-full border pl-10 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />

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
//                 className="w-full border pl-10 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="relative">
//               <FaLock className="absolute left-3 top-4 text-gray-400" />

//               <input
//                 type="password"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 placeholder="Confirm Password"
//                 className="w-full border pl-10 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition duration-300"
//             >
//               Register
//             </button>

//           </form>

//           <p className="text-center mt-4">
//             Already have an account?{" "}
//             <Link
//               to="/login"
//               className="text-blue-600 font-semibold hover:underline"
//             >
//               Login
//             </Link>
//           </p>

//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Register;


import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaShoppingBag,
} from "react-icons/fa";



const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        " https://shopeasy-kghk.onrender.com/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert("Registration Successful ✅");

      // Clear Form
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      // Redirect to Login
      navigate("/login");

    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center px-4 py-10">

        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">


          <div className="hidden md:flex flex-col justify-center bg-linear-to-br from-purple-700 to-pink-600 text-white p-10">

            <FaShoppingBag size={60} />

            <h1 className="text-4xl font-bold mt-6 mb-4">
              Join ShopEasy
            </h1>

            <p className="text-lg text-gray-100 leading-relaxed">
              Create your account and start
              shopping from thousands of products.
            </p>

            <div className="mt-8 space-y-3">
              <div className="bg-white/10 p-4 rounded-xl">
                ✓ Fast Registration
              </div>

              <div className="bg-white/10 p-4 rounded-xl">
                ✓ Wishlist & Cart
              </div>

              <div className="bg-white/10 p-4 rounded-xl">
                ✓ Easy Order Tracking
              </div>
            </div>

          </div>


          <div className="p-8 md:p-12">

            <h2 className="text-3xl font-bold text-center text-gray-800">
              Create Account
            </h2>

            <p className="text-center text-gray-500 mt-2 mb-8">
              Join ShopEasy today 🚀
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Username */}
              <div className="relative">
                <FaUser className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Username"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>


              <div className="relative">
                <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>


              <div className="relative">
                <FaLock className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition duration-300 shadow-lg"
              >
                Create Account
              </button>

            </form>

            <p className="text-center mt-6 text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-purple-600 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>

          </div>
        </div>
      </div>


    </>
  );
};

export default Register;