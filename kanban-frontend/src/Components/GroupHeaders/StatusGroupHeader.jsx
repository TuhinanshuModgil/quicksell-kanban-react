import React from "react";
import {dotMenu, add, backlog, inProgress, todo} from "../../Assets/icons_FEtask";


// map of status with associated data
const statusMap = {
  Todo: {
    text: "Todo",
    icon: todo,
  },
  Backlog: {
    text: "Backlog",
    icon: backlog,
  },
  "In progress": {
    text: "In progress",
    icon: inProgress,
  },
};

function StatusGroupHeader({ element }) {
  return (
    <div className="flex justify-between mb-2">
      <div className="flex gap-2 text-nowrap">
        <img
          src={statusMap[element]?.icon ?? ""}
          alt={statusMap[element]?.text ?? "status icon"}
        />{" "}
        <h3 className="">{statusMap[element]?.text ?? ""}</h3>
      </div>
      <div className="flex gap-2">
        <img src={add} alt="add" className="w-4"/>
        <img src={dotMenu} alt="dot menu" className="w-4"/>
      </div>
    </div>
  );
}

export default StatusGroupHeader;
