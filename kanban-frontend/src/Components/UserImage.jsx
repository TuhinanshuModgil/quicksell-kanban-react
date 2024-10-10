import React from 'react'
import { charToNumber, pastelColors } from '../Utils/helper'

function UserImage({userData}) {
    console.log("this is data", userData)
  const nameInitials = userData?.name.slice(0,2)
    const backgroundColor = pastelColors[charToNumber(userData?.name?.[0]?? "a") ??0]
    console.log("this is bg", backgroundColor)
    return (
    <div className='w-8 h-8 rounded-full flex justify-center items-center ' style={{backgroundColor : `${backgroundColor}`}} title={userData?.name??""}> 
      <h3>{nameInitials}</h3>
    </div>
  )
}

export default UserImage
