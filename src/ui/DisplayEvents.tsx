import React, { useState, useEffect } from "react";
import SingleEvent from "./SingleEvent";
import Navbar from "./Navbar";
import { data } from "../models/data";
import { classNames } from "../mocks/constants";

interface props {
  mockData: data[];
}

const setPriority = (type: string): number => {
  switch (type) {
    case "Staff Assist":
      return 1;
    case "Fall":
      return 1;
    case "Assistance":
      return 3;
    case "Presence":
      return 4;
    default:
      return 5; // optional
  }
};

const DisplayEvents: React.FC<props> = ({ mockData }) => {
  const [inactiveId, setInactiveId] = useState<Number>(0);
  const [activeData, setActiveData] = useState<Array<data>>(mockData);

  const sortedData = () => {
    const sortedActiveData = [...mockData]
      .sort((a, b) => {
        const priorityA = setPriority(a.type);
        const priorityB = setPriority(b.type);

        return priorityA - priorityB;
      })
      .filter((data) => data.status === "active");

    return sortedActiveData;
  };

  const onClickHandler = () => {
    const filteredData = sortedData();
    setActiveData(filteredData);
  };

  useEffect(() => {
    const data = sortedData();
    setActiveData(data);
  }, []);

  useEffect(() => {
    if (inactiveId !== 0) {
      setActiveData((prevActiveData) => {
        const updatedData = prevActiveData.filter(
          (data) => data.Id !== inactiveId
        );
        return updatedData;
      });
    }
  }, [inactiveId]);

  return (
    <>
      <Navbar></Navbar>
      <div>
        {activeData.map((value, index) => {
          return (
            <SingleEvent
              key={index}
              setInactiveId={setInactiveId}
              Id={value.Id}
              type={value.type}
              datetime={value.datetime}
              status={value.status}
              roomId={value.roomId}
              residentId={value.residentId}
            />
          );
        })}

        <div className={classNames.resetButtonContainer}>
          <button
            onClick={() => {
              onClickHandler();
            }}
            className={classNames.reset}
          >
            Reset Data
          </button>
        </div>
      </div>
    </>
  );
};

export default DisplayEvents;
