import React from "react";
import Groups from "./Groups";
import UserGroupHeader from "./GroupHeaders/UserGroupHeader";
import PriorityGroupHeader from "./GroupHeaders/PriorityGroupHeader";
import StatusGroupHeader from "./GroupHeaders/StatusGroupHeader";


function GroupContainer({ groupsData, ordering, usersData, grouping }) {
  // extract all keys of grouped data
//   console.log('These are groups', groupsData, " user data: ", usersData)
  const groupNames = Object.keys(groupsData) || [];

  return (
    <div className="grid grid-flow-col auto-cols-[minmax(min(360px,100%),360px)] gap-8">
      {groupNames.map((element, index) => {
        return (
          <div key={index}>       
                
                {grouping == "users" ? <> <UserGroupHeader element={element} userData={usersData[element]}/>  </> : ""} 
                {grouping == "status" ? <><StatusGroupHeader element={element} /> </> : ""}
                {grouping == "priority" ? <><PriorityGroupHeader element={element} /></> : ""}
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
