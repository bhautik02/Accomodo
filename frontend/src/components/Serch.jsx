// import axios from "axios";
// import { getAllPlacesAsync } from "../store/place";
// import { useDispatch } from "react-redux";
// import React, { useEffect, useRef, useState } from "react";

// import { useLocation } from "react-router-dom";

// const Search = () => {
//   const dispatch = useDispatch();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sort, setSort] = useState("sales");
//   const [open, setOpen] = useState(false);

//   const { search } = useLocation();

//   const reSort = (type) => {
//     setSort(type);
//     setOpen(false);
//   };

//   //   useEffect(() => {
//   //     refetch();
//   //   }, [sort]);

//   const apply = () => {
//     //     refetch();

//     dispatch(getAllPlacesAsync({ min, max }));
//   };

//   //   const handleChange = (e) => {
//   //     setSearchTerm(e.target.value);
//   //   };

//   //   const handleSubmit = (e) => {
//   //     e.preventDefault();
//   //     dispatch(getAllPlacesAsync());
//   //     console.log("Search term:", searchTerm);
//   //   };

//   return (
//     // <div>
//     //   <form onSubmit={handleSubmit}>
//     //     <input
//     //       type="text"
//     //       placeholder="Search..."
//     //       value={searchTerm}
//     //       onChange={handleChange}
//     //     />
//     //     <button type="submit">Search</button>
//     //   </form>
//     // </div>

//   );
// };

// export default Search;
