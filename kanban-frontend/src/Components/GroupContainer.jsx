import React from 'react'
import Groups from './Groups'

function GroupContainer({groupsData, ordering}) {
    // extract all keys of grouped data
    console.log('These are groups', groupsData)
    const groupNames = Object.keys(groupsData) || [] 
    

  return (
    <div className='grid grid-cols-4'>
      {groupNames.map((element, index)=>{
        return (
            <div key={index}> 
            <Groups groupList={groupsData[element]} ordering={ordering}/>
            </div>      
        )
      })}
    </div>
  )
}

export default GroupContainer
