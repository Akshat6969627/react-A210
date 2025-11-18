import React, { useState } from 'react'

function A() {
const [count,setcount]= useState(0)

if (count==4){
    throw new Error ("count is invalid")
}

  return (
    <div>
        <h1 onClick={()=> setcount(count+1)}>count is {count}</h1>
    </div>
  )
}

export default A