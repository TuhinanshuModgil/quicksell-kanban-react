import React from "react";
import Cards from "./Cards";

function Groups({ groupList, ordering, usersData, grouping }) {
  
   // Logic to decide the ordeing inside the group 
  if (ordering == "priority") {
    // Sort with priority
    groupList = groupList.sort((a, b) => a.priority - b.priority);
} else if (ordering == "title") {
    // Sort with title
    groupList = groupList.sort((a, b) => {
      const entityA = a.title.toUpperCase(); // ignore upper and lowercase
      const entityB = b.title.toUpperCase(); // ignore upper and lowercase
      if (entityA < entityB) {
        return -1; 
      }
      if (entityA > entityB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  }
  return (

    <div className="flex sm:flex-col w-full overflow-auto gap-2">
        
      {groupList?.map((data, index) => (
        <div key={index} className="flex-shrink-0 w-full">
          <Cards cardData={data} userData={usersData[data.userId]} />
        </div>
      )) ?? "no data"}
    </div>
  );
}

export default Groups;
