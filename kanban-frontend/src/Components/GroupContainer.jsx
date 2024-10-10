import React from "react";
import Groups from "./Groups";
import UserGroupHeader from "./GroupHeaders/UserGroupHeader";
import PriorityGroupHeader from "./GroupHeaders/PriorityGroupHeader";
import StatusGroupHeader from "./GroupHeaders/StatusGroupHeader";


function GroupContainer({ groupsData, ordering, usersData, grouping }) {
  // extract all keys of grouped data (what all the groups are)
  const groupNames = Object.keys(groupsData) || [];

  return (
    <div className="sm:grid sm:grid-flow-col sm:auto-cols-sizing sm:gap-8 flex flex-col gap-4">
        {/* Create groups for all the groups  */}
      {groupNames.map((element, index) => {
        return (
          <div key={index}>       
                {/* Select the grouping header based on grouping */}
                <div className="w-full">

                {grouping == "users" ? <><UserGroupHeader element={element} userData={usersData[element]}/></> : ""} 
                {grouping == "status" ? <><StatusGroupHeader element={element} /> </> : ""}
                {grouping == "priority" ? <><PriorityGroupHeader element={element} /></> : ""}
                </div>
            <Groups
              groupList={groupsData[element]}
              ordering={ordering}
              usersData={usersData}
              grouping={grouping}
            />
          </div>
        );
      })}
    </div>
  );
}

export default GroupContainer;
