
import { useEffect, useState } from 'react'
import './App.css'
import Grocery from './Grocery'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const[grocery,setGrocery] = useState("");
  const[groceryList,setGroceryList] = useState([]);

 

  useEffect(()=>{
    
      const arr = JSON.parse(localStorage.getItem("list"));
      console.log(arr);
      if(arr===null){
        setGroceryList([])
      }else{
        setGroceryList(arr)
      }
  },[])

  useEffect(()=>{
   if(groceryList.length>0)
      localStorage.setItem("list",JSON.stringify(groceryList));
   
      
  },[groceryList])

  
  function handleItem(){
    if(grocery.length>0){
    let temp = [...groceryList]
    temp.push(
     {
      id:Date.now(),
      grocery:grocery
     }
    );
    setGroceryList(temp);
    setGrocery("")
    toast.success("Item added to List Successfully!!!")
  }
  else{
    toast.error("Please Provide Value!")
  }
    // if(grocery.length>0){

    //   setGroceryList((previous)=>[...previous,{
    //     grocery:grocery
    //   }])
    //   setGrocery("")
    // }
    
    
    
  }
  console.log(groceryList);
  
  function handleDeleteItem(idx){
    
    let temp = groceryList.filter((item,index)=>{
     
      if(idx !== index)
        return item;
    }
    )
    setGroceryList(temp)
    
    localStorage.setItem("list",JSON.stringify(temp))
    toast.success("Item Deleted Successfully!!!")
    }

 

  
 


  return (
    <>
    <div className="main_container">
      
      <h1>Grocery Bud</h1>

      <div className="input_holder">  
      <input className="input_text" type="text" placeholder="Add Items to the list" value={grocery} onChange={(e)=>setGrocery(e.currentTarget.value)} />
      <button className="additem" onClick={handleItem}>Add Item</button>
      </div>
     
      {
        groceryList.map((item,index)=>{
          return(
            <Grocery id={item.id} groceryList={item.grocery} index={index} handleDeleteItem={handleDeleteItem} />
          )
        })
      }
      
      
    </div>
    <ToastContainer position="top-center"/>
    </>
  )
}

export default App
