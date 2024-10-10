import React from "react";
// import icons from assets
import {
  dotMenu,
  add,
  imgLowPriority,
  noPriority,
  imgHighPriority,
  imgMediumPriority,
  urgentPriorityColour,
} from "../../Assets/icons_FEtask";

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
