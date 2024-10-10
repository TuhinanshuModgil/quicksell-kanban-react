import React from "react";
import dotMenu from "../../Assets/icons_FEtask/3 dot menu.svg";
import add from "../../Assets/icons_FEtask/add.svg";
import imgLowPriority from "../../Assets/icons_FEtask/Img - Low Priority.svg";
import noPriority from "../../Assets/icons_FEtask/No-priority.svg";
import imgHighPriority from "../../Assets/icons_FEtask/Img - High Priority.svg";
import imgMediumPriority from "../../Assets/icons_FEtask/Img - Medium Priority.svg";
import urgentPriorityColour from "../../Assets/icons_FEtask/SVG - Urgent Priority colour.svg";
import urgentPriorityGrey from "../../Assets/icons_FEtask/SVG - Urgent Priority grey.svg";

// map of priority level and data associated with it
const priorityMap = {
  0: {
    level: 1,
    text: "No Priority",
    icon: noPriority,
  },
  1: {
    level: 1,
    text: "Low",
    icon: imgLowPriority,
  },
  2: {
    level: 2,
    text: "Medium",
    icon: imgMediumPriority,
  },

  3: {
    level: 3,
    text: "High",
    icon: imgHighPriority,
  },
  4: {
    level: 4,
    text: "urgent",
    icon: urgentPriorityColour,
  },
};
function PriorityGroupHeader({ element }) {
  
  return (
    <div className="flex justify-between mb-2">
      <div className="flex gap-2 text-nowrap">
        <img src={priorityMap[element]?.icon ?? ""} alt="" />{" "}
        <h3 className="">
          {priorityMap[element]?.text ?? ""} {priorityMap[element]?.level ?? ""}
        </h3>
      </div>
      <div className="flex gap-2">
        <img src={add} alt="dot menu" />
        <img src={dotMenu} alt="dot menu" />
      </div>
    </div>
  );
}

export default PriorityGroupHeader;
