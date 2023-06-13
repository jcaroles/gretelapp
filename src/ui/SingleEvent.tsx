import React from "react";
import { classNames } from "../mocks/constants";

interface props {
  setInactiveId: React.Dispatch<React.SetStateAction<Number>>;
  Id: number;
  type: string;
  datetime: number;
  status: string;
  roomId: number;
  residentId: number;
}

const SingleEvent: React.FC<props> = ({
  setInactiveId,
  Id,
  type,
  datetime,
  status,
  roomId,
  residentId,
}) => {
  const onClickHandler = (id: Number) => {
    setInactiveId(id);
  };
  return (
    <>
      <div
        className={
          type === "Staff Assist" || type === "Fall"
            ? classNames.priority
            : classNames.nonPriority
        }
      >
        <div>
          <div className={classNames.gretelTypeFont}>Type: {type}</div>
          <div>Date & Time: {datetime}</div>
          <div>Status: {status}</div>
          <div>Room ID: {roomId}</div>
          <div>Resident ID: {residentId}</div>
        </div>

        <button
          onClick={() => {
            onClickHandler(Id);
          }}
          className={classNames.button}
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default SingleEvent;
