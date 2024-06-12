import React, { useState } from 'react'

const Grocery = ({groceryList,index,handleDeleteItem,id }) => {
  const[tick,setTick] = useState(false);
    // console.log(tick);
   
  return (
    <div className="gc">
        <ul className='groceryullist' >
            <li key={index} className="time">
             
              <input type='checkbox' onChange={() => setTick(!tick) } />
              <p className={tick ? "strike" : "unstrike"}>{groceryList}</p>
              <button className='btn1' onClick={()=>handleDeleteItem(index)}>delete</button>
            
            </li>
        </ul>
    </div>
  ) 
}

export default Grocery