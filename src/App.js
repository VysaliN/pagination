import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import "./Pagination.css";

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setData(response.data);
      setPage(response.data.slice(0, 10));
    });
  }, []);
  const pageHandler = (pageNumber) => {
    setPage(data.slice(pageNumber * 10 - 10, pageNumber * 10));
  };
  return (
    <div className="pagination">
      <center>
        <h1>Pagination</h1>
        <div>
          {data.length >= 1 ? (
            <div className="pagination1">
              {page.map((post) => (
                <div className="title">{post.title}</div>
              ))}
              <br></br>
              <Pagination data={data} pageHandler={pageHandler} />
            </div>
          ) : (
            <div className="nodata">No Data Loaded</div>
          )}
        </div>
      </center>
    </div>
  );
};

export default App;
