import React from "react";
import dotMenu from "../Assets/icons_FEtask/3 dot menu.svg";
import add from "../Assets/icons_FEtask/add.svg";
import backlog from "../Assets/icons_FEtask/Backlog.svg";
import cancelled from "../Assets/icons_FEtask/Cancelled.svg";
import display from "../Assets/icons_FEtask/Display.svg";
import done from "../Assets/icons_FEtask/Done.svg";
import down from "../Assets/icons_FEtask/down.svg";
import imgHighPriority from "../Assets/icons_FEtask/Img - High Priority.svg";
import imgMediumPriority from "../Assets/icons_FEtask/Img - Medium Priority.svg";
import imgLowPriority from "../Assets/icons_FEtask/Img - Low Priority.svg";
import inProgress from "../Assets/icons_FEtask/in-progress.svg";
import noPriority from "../Assets/icons_FEtask/No-priority.svg";
import urgentPriorityColour from "../Assets/icons_FEtask/SVG - Urgent Priority colour.svg";
import urgentPriorityGrey from "../Assets/icons_FEtask/SVG - Urgent Priority grey.svg";
import todo from "../Assets/icons_FEtask/To-do.svg";
import UserImage from "./UserImage";

const iconMap = {
  dotMenu: dotMenu,
  Backlog: backlog,
  "In progress": inProgress,
  Todo: todo,
};

function Cards({ cardData, userData }) {
    console.log("This is data1", userData)
  return (
    <div className="border p-4 rounded-md shadow flex flex-col gap-2 min-h-40 justify-between">
      <div className="flex gap-2 flex-col">
        <div className="flex justify-between">
          <h3 className="text-gray-600">{cardData.id}</h3>
            <UserImage userData={userData}/>
        </div>
        <h2 className="font-semibold line-clamp-2">
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
            <div className="p-1 border rounded" key={index}>
              {tagText}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
