// import {
//     FaFacebook,
//     FaInstagram,
//     FaTwitter,
// } from "react-icons/fa";


// const Footer = () => {
//     return (
//         <footer className="bg-gray-900 text-white">
//             <div className="max-w-7xl mx-auto px-6 py-8">

//                 <div className="grid md:grid-cols-3 gap-8">

//                     <div className="flex gap-4 mt-4 text-2xl">
//                         <FaFacebook />
//                         <FaInstagram />
//                         <FaTwitter />
//                     </div>

//                     {/* Logo Section */}
//                     <div>
//                         <h2 className="text-2xl font-bold">
//                             ShopEasy
//                         </h2>

//                         <p className="text-gray-400 mt-2">
//                             Your one-stop destination for
//                             shopping online.
//                         </p>
//                     </div>

//                     {/* Quick Links */}
//                     <div>
//                         <h3 className="text-lg font-semibold mb-3">
//                             Quick Links
//                         </h3>

//                         <ul className="space-y-2 text-gray-400">
//                             <li>Home</li>
//                             <li>Cart</li>
//                             <li>Wishlist</li>
//                             <li>Products</li>
//                         </ul>
//                     </div>

//                     {/* Contact */}
//                     <div>
//                         <h3 className="text-lg font-semibold mb-3">
//                             Contact
//                         </h3>

//                         <p className="text-gray-400">
//                             📧 support@shopeasy.com
//                         </p>

//                         <p className="text-gray-400">
//                             📞 +91 9876543210
//                         </p>
//                     </div>

//                 </div>

//                 <hr className="my-6 border-gray-700" />

//                 <div className="text-center text-gray-400">
//                     © 2026 ShopEasy. All Rights Reserved.
//                 </div>

//             </div>
//         </footer>
//     );
// };

// export default Footer;


import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-blue-500">
              ShopEasy
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Discover premium products at
              affordable prices. Fast delivery,
              secure payments, and trusted
              shopping experience.
            </p>

            <div className="flex gap-4 mt-6">

              <div className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 cursor-pointer transition">
                <FaFacebookF />
              </div>

              <div className="bg-slate-800 p-3 rounded-full hover:bg-pink-600 cursor-pointer transition">
                <FaInstagram />
              </div>

              <div className="bg-slate-800 p-3 rounded-full hover:bg-sky-500 cursor-pointer transition">
                <FaTwitter />
              </div>

              <div className="bg-slate-800 p-3 rounded-full hover:bg-blue-700 cursor-pointer transition">
                <FaLinkedinIn />
              </div>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer">
                Home
              </li>

              <li className="hover:text-white cursor-pointer">
                Products
              </li>

              <li className="hover:text-white cursor-pointer">
                Cart
              </li>

              <li className="hover:text-white cursor-pointer">
                Wishlist
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Customer Service
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Help Center</li>
              <li>Returns & Refunds</li>
              <li>Shipping Info</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact Us
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>📧 support@shopeasy.com</p>
              <p>📞 +91 9876543210</p>
              <p>📍 Kerala, India</p>
            </div>
          </div>

        </div>

        <hr className="border-slate-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">

          <p>
            © 2026 ShopEasy. All Rights Reserved.
          </p>

          <p className="mt-3 md:mt-0">
            Made with ❤️ by ShopEasy
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;