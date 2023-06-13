import React from "react";
import DisplayEvents from "./ui/DisplayEvents";
import { mockData } from "./mocks/data";

const WebComponents: React.FC = () => {
  return (
    <>
      <div className="container shadow-md bg-slate-50 w-1/2 px-5">
        <DisplayEvents mockData={mockData} />
      </div>
    </>
  );
};

export default WebComponents;
