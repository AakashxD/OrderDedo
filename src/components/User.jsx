import React, { useState } from 'react'

const User = ({name}) => {
    const [Count ,setCount]=useState(0);
    const [Count2 ,setCount2]=useState(0);
  return (
      
    <div className='user-card'>
      <h1>
        Count={Count}
        <h1>Count2={Count2}</h1>
      </h1>
        <h1>
         Name: {name}
        </h1>
        <h2>
            hii There are many thing people do
        </h2>
    </div>
  )
}

export default User