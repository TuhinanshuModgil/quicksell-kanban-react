import React from "react";
import dotMenu from "../../Assets/icons_FEtask/3 dot menu.svg";
import add from "../../Assets/icons_FEtask/add.svg";
import backlog from "../../Assets/icons_FEtask/Backlog.svg";
import inProgress from "../../Assets/icons_FEtask/in-progress.svg";
import todo from "../../Assets/icons_FEtask/To-do.svg";

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
        <img src={add} alt="dot menu" />
        <img src={dotMenu} alt="dot menu" />
      </div>
    </div>
  );
}

export default StatusGroupHeader;
