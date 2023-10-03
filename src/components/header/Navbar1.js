import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState } from 'react';

// const Navbar = () => {
//   const [searchInput, setSearchInput] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearchChange = (event) => {
//     const searchTerm = event.target.value;
//     setSearchInput(searchTerm);
//     // Here, you can implement your own logic to fetch search results
//     // For demonstration purposes, I'm just setting an array of results directly
//     setSearchResults(['Result 1', 'Result 2', 'Result 3']);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="#">
//         <img src="your-logo.png" alt="Logo" width="50" />
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-target="#navbarNav"
//         aria-controls="#navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <form className="form-inline my-2 my-lg-0">
//         <input
//           className="form-control mr-sm-2"
//           type="search"
//           placeholder="Search"
//           aria-label="Search"
//           value={searchInput}
//           onChange={handleSearchChange}
//         />
//         {searchResults.length > 0 && (
//           <div className="search-results">
//             <ul className="list-group">
//               {searchResults.map((result, index) => (
//                 <li className="list-group-item" key={index}>{result}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </form>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <a className="nav-link" href="#">Music</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Lists</a>
//           </li>
//           <li className="nav-item dropdown">
//             <a className="nav-link dropdown-toggle" href="#" id="meatballsMenu" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//               Menu
//             </a>
//             <div className="dropdown-menu" aria-labelledby="meatballsMenu">
//               <a className="dropdown-item" href="#">About</a>
//               <a className="dropdown-item" href="#">Contact</a>
//               <a className="dropdown-item" href="#">FAQ</a>
//               <a className="dropdown-item" href="#">Terms of Use</a>
//               <a className="dropdown-item" href="#">Privacy Policy</a>
//             </div>
//           </li>
//         </ul>
//       </div>

//       <ul className="navbar-nav ml-auto">
//         <li className="nav-item">
//           <a className="nav-link" href="#">Login</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Sign Up</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
