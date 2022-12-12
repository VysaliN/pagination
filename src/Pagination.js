import React, { useState } from "react";

const Pagination = ({ data, pageHandler }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick =()=>{
    setIsActive((page)=>page);
  }
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(data.length / 10) + 1; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="numbers">
      <center>
        {pageNumbers.map((page) => (
          <button
            
            className="btn"
            onClick={() => {
              pageHandler(page);
              handleClick();
            }}
          >
            {page}
          </button>
        ))}
      </center>
    </div>
  );
};

export default Pagination;
