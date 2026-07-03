// const SearchBar = ({
//   search,
//   setSearch
// }) => {
//   return (
//     <div className="flex justify-center my-8">
//       <input
//         type="text"
//         value={search}
//         onChange={(e) =>
//           setSearch(e.target.value)
//         }
//         placeholder="Search Products..."
//         className="border w-100 p-3 rounded-lg outline-none"
//       />
//     </div>
//   );
// };

// export default SearchBar;

import {
FaSearch,
} from "react-icons/fa";

const SearchBar = ({
search,
setSearch,
}) => {
return ( <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10"> <div className="relative max-w-2xl mx-auto">

    <FaSearch
      className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
    />

    <input
      type="text"
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      placeholder="Search for products..."
      className="
        w-full
        pl-12
        pr-4
        py-4
        bg-white
        border
        border-gray-200
        rounded-2xl
        shadow-sm
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:border-blue-500
        text-gray-700
        transition
      "
    />
  </div>
</div>


);
};

export default SearchBar;
