import React from "react";
import {dotMenu, add} from "../../Assets/icons_FEtask";
import UserImage from "../UserImage";

function UserGroupHeader({ element, userData }) {
  return (
    <div className="flex justify-between mb-2">
      <div className="flex gap-2 text-nowrap">
        <UserImage userData={userData} />
      </div>
      <div className="flex gap-2">
        <img src={add} alt="add" className="w-4" />
        <img src={dotMenu} alt="dot menu" className="w-4"/>
      </div>
    </div>
  );
}

export default UserGroupHeader;
