import React from "react";
import Button from "./Button";

const Slab = ({ element }) => {
  return (
    <div className="m-2 rounded-md p-4 bg-zinc-600">
      <div className="flex flex-col">
        <div className="font-bold text-white">
          <p>{element.title}</p>
        </div>
        <div>
          <p className="opacity-50 text-white">{element.description}</p>
        </div>
        <div className="absolute mt-3 mr-5 right-6">
          <div className="flex gap-4">
            <Button title="Add to cart" />
            <Button title="Buy Now and Pay Later" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slab;
