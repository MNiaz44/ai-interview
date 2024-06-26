// import React from "react";

// const SearchBar = () => {
//   return (
//     <div className="w-full flex">
//       <input
//         type="text"
//         className="border-[1px] border-[#CBD5E1] p-2 rounded-[12px] bg-[#F8FAFC] w-full"
//         placeholder="Search here..."
//       />
//     </div>
//   );
// };

// export default SearchBar;

import React from "react";
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="relative w-full flex">
      <input
        type="text"
        className="border-[1px] border-[#CBD5E1] p-2 pl-10 rounded-[12px] bg-[#F8FAFC] w-full"
        placeholder="Search here..."
      />
      <IoMdSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 h-6 w-6 text-Search-icon-color" />
    </div>
  );
};

export default SearchBar;
