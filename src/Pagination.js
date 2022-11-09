import React from "react";

const Pagination = ({ data, pageHandler }) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(data.length / 10) + 1; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="numbers">
      <center>
        {pageNumbers.map((page) => (
          <div className="btn" onClick={() => pageHandler(page)}>
            {page}
          </div>
        ))}
      </center>
    </div>
  );
};

export default Pagination;
