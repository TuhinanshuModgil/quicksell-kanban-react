import React from "react";
import {dotMenu, backlog, todo, inProgress} from "../Assets/icons_FEtask";
import UserImage from "./UserImage";

// Icon Map for Status
const iconMap = {
  dotMenu: dotMenu,
  Backlog: backlog,
  "In progress": inProgress,
  Todo: todo,
};

function Cards({ cardData, userData }) {
   
  return (
    <div className="border p-4 rounded-md shadow flex flex-col gap-2 min-h-40 justify-between bg-white">
      <div className="flex gap-2 flex-col">
        <div className="flex justify-between">
          <h3 className="text-gray-600">{cardData.id}</h3>
            <UserImage userData={userData}/>
        </div>
        <h2 className="font-semibold line-clamp-2 text-gray-800" title={cardData.title}>
          <img
            src={iconMap[cardData?.status]}
            alt="task status"
            className="inline"
          />{" "}
          {cardData.title}
        </h2>
      </div>

      <div className="flex gap-2 w-full overflow-hidden">
        <div className="p-1 border flex items-center rounded">
          <img src={dotMenu} alt="3 dot menu" />
        </div>
        {cardData?.tag?.map((tagText, index) => {
          return (
            <div className="p-1 border rounded text-gray-600" key={index}>
              {tagText}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
