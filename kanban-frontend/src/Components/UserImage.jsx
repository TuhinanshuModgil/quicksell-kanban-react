import React from "react";
import { charToNumber, pastelColors } from "../Utils/helper";

function UserImage({ userData }) {
  // Get the first two characters of the word
  const nameInitials = userData?.name.slice(0, 2);

  // Get consistent background color 
  const backgroundColor =
    pastelColors[charToNumber(userData?.name?.[0] ?? "a") ?? 0];


  return (
    <div className="relative">

    <div
      className="w-8 h-8 rounded-full flex justify-center items-center relative "
      style={{ backgroundColor: `${backgroundColor}` }}
      title={userData?.name ?? ""}
      >
      <h3>{nameInitials}</h3>
    </div>
      <div className={`w-2 h-2 rounded-full absolute border border-black right-0 bottom-0 ${userData?.available?"bg-green-400":"bg-gray-400"}`} ></div>
    </div>
  );
}

export default UserImage;
