import React from 'react'

function Groups({groupList, ordering}) {
    
  return (
    <div>
      {groupList?.map((data, index)=>(
                <div key={index}>
                {data.title}
                </div>
            ))?? "no data"}
    </div>
  )
}

export default Groups
