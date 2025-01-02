import React from "react";
import { useState, useEffect } from "react";
import Slab from "./components/Slab";

const API_URL = "https://dummyjson.com/products";
const App = () => {
  const [data, setData] = useState([]);
  const fetchInfo = () => {
    return fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setData(data.products));
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className="m-auto p-6">
      <h1 className="mb-2 ml-4 font-bold text-xl text-gray-800">
        Snipe Interview Assignment
      </h1>
      {data?.length > 0 ? (
        <div className="flex flex-col">
          {data.map((element) => (
            <Slab element={element} />
          ))}
        </div>
      ) : (
        <div className="mb-2 ml-4 font-bold text-xl text-gray-800">
          <h1>No Data</h1>
        </div>
      )}
    </div>
  );
};

export default App;
