import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'

function Dashboard() {
    // get grouping and ordering values stored in local storage or fallback to default
    const initialGrouping = localStorage.getItem("grouping") || 'status';
    const initialOrdering = localStorage.getItem("ordering") || 'priority';

    const [grouping, setGrouping] = useState(initialGrouping)
    const [ordering, setOrdering] = useState(initialOrdering)

    useEffect(()=>{
        localStorage.setItem('grouping', grouping)
        localStorage.setItem('ordering', ordering)
    },[grouping, ordering])

  return (
    <div>
        <button onClick={()=>console.log(grouping, " ", ordering)}> consolelog</button>
      <Navbar grouping={grouping} ordering={ordering} setGrouping={setGrouping} setOrdering={setOrdering}/>
      <div>
        
      </div>
    </div>
  )
}

export default Dashboard
