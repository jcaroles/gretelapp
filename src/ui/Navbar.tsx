import React from "react";
import { FcAlarmClock } from "react-icons/fc";
import { classNames } from "../mocks/constants";

const Navbar = () => {
  return (
    <>
      <div className={classNames.navBar}>
        <div className={classNames.navBarMargin}>
          <FcAlarmClock />
        </div>
        <div className={classNames.navBarPadding}>Gretel App</div>
      </div>
    </>
  );
};

export default Navbar;
