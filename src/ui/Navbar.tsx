import React from "react";
import { FcAlarmClock } from "react-icons/fc";
import { classNames } from "../mocks/constants";

const Navbar = () => {
  return (
    <>
      <div className={classNames.navBar}>
        <div className="mt-1.5">
          <FcAlarmClock />
        </div>
        <div className="pl-2">Gretel App</div>
      </div>
    </>
  );
};

export default Navbar;
