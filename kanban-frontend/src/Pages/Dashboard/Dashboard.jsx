import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import GroupContainer from '../../Components/GroupContainer';

// ---SHIFT TO ENV AFTER IN REAL PRODUCTION DEVELOPEMNT---
const API_URL = import.meta.env.VITE_QUICKSELL_API;;


function Dashboard() {
    // the following data is populated using the API
    const [ticketsData, setTicketsData] = useState([]) 
    const [usersData, setUsersData] = useState([]) 

    // get grouping and ordering values stored in local storage or fallback to default
    const initialGrouping = localStorage.getItem("grouping") || 'status';
    const initialOrdering = localStorage.getItem("ordering") || 'priority';

    // Variables to keep track of the current grouping and ordering choices
    const [grouping, setGrouping] = useState(initialGrouping)
    const [ordering, setOrdering] = useState(initialOrdering)

    // Map to keep track of grouping 
    const [groups, setGroups] = useState({})

    // To update local storage on change of grouping and ordering and updating the groups data
    useEffect(()=>{
        localStorage.setItem('grouping', grouping)
        localStorage.setItem('ordering', ordering)

        // regroup according to the new values of the grouping and ordering
        handleGrouping(grouping)
    },[grouping, ordering, ticketsData])

    // Function to run the inital call to API
    useEffect(()=>{
        getApiData()     
    }, [])

    // logic to group the data according selected grouping option
    function handleGrouping(grouping){
        // use the grouping varaible to create a map grouping as key and data as value
        // map will have a structure like { grouping_value : array_of_all_data_having_that_value }
        const groupedData = {} 
        ticketsData.forEach((element)=> {
            // since the key for user in dropdown and API are different check for it 
            // In real development env a map would be used for this
            if(grouping == 'users'){
                grouping = 'userId'
            }

            // key corresponding to that value of selected grouping for that element 
            let key = groupedData[element[grouping]]
            // check if key is alreay present
            if(key){
                groupedData[element[grouping]] = [...key, element]
            }
            else{
                // if not present create new key for that group
                groupedData[element[grouping]] = [element]
            }

        })
        
        setGroups(groupedData)
    }
    
    // Calls the api and populates the usersData and ticketsData 
    async function getApiData(){
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setTicketsData(data.tickets)

            // Create a map of userId to userData to reduce time-complexity of searching in components down the line
            const userDataMap = {} 
            data?.users?.forEach((user)=> {
                userDataMap[user.id] = user
            })
            setUsersData(userDataMap)
            // -- TEST LOG --
            // console.log("this is data", data)
        } catch (error) {
            console.log("Error occured during fetching data for dashboard", error.message)
        }
    }
  return (
    <div>
        {/* ----- TESTING CONSOLE LOG BUTTON ----- */}
        {/* <button onClick={()=>console.log(grouping, " ", usersData)}> consolelog</button> */}
      <Navbar grouping={grouping} ordering={ordering} setGrouping={setGrouping} setOrdering={setOrdering}/>
      <div className='p-6 bg-gray-100 overflow-auto'>
        <GroupContainer groupsData={groups} ordering={ordering} usersData={usersData} grouping={grouping}/>
      </div>
    </div>
  )
}

export default Dashboard
