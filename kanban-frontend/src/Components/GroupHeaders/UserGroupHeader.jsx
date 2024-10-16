import React from "react";
import {dotMenu, add} from "../../Assets/icons_FEtask";
import UserImage from "../UserImage";

function UserGroupHeader({ element, userData }) {
  return (
    <div className="flex justify-between mb-2">
      <UserImage userData={userData} />
      <div className="flex gap-2">
        <img src={add} alt="dot menu" />
        <img src={dotMenu} alt="dot menu" />
      </div>
    </div>
  );
}

export default UserGroupHeader;
