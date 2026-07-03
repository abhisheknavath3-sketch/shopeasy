// const Category = ({
//   selectedCategory,
//   setSelectedCategory,
// }) => {
//   const categories = [
//     "All",
//     "Mobiles",
//     "Electronics",
//     "Shoes",
//     "Fashion",
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 mt-8">
//       <div className="flex flex-wrap justify-center gap-3">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() =>
//               setSelectedCategory(category)
//             }
//             className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
//               selectedCategory === category
//                 ? "bg-blue-600 text-white shadow-lg scale-105"
//                 : "bg-white border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-500"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Category;

import {
  FaThLarge,
  FaMobileAlt,
  FaLaptop,
  FaShoePrints,
  FaTshirt,
} from "react-icons/fa";

const Category = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const categories = [
    {
      name: "All",
      icon: <FaThLarge />,
    },
    {
      name: "Mobiles",
      icon: <FaMobileAlt />,
    },
    {
      name: "Electronics",
      icon: <FaLaptop />,
    },
    {
      name: "Shoes",
      icon: <FaShoePrints />,
    },
    {
      name: "Fashion",
      icon: <FaTshirt />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 mt-8">

      {/* Section Title */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Shop By Category
        </h2>

        <p className="text-gray-500 mt-2">
          Explore products by category
        </p>
      </div>

      {/* Categories */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 justify-start md:justify-center">

        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() =>
              setSelectedCategory(category.name)
            }
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold transition-all duration-300 border whitespace-nowrap ${selectedCategory === category.name
                ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-lg"
                : "bg-white text-gray-700 border-gray-200 hover:border-blue-400 hover:shadow-md"
              }`}
          >
            <span className="text-lg">
              {category.icon}
            </span>

            <span>
              {category.name}
            </span>
          </button>
        ))}

      </div>
    </div>
  );
};

export default Category;