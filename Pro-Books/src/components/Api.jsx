import React,{useEffect,useState} from 'react'
import axios from "axios"

const Api = () => {
  const[ApiData,setApiData]=useState([]);
 
  useEffect(()=>{
    axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
    .then((response)=>{
      const data=response.data.books;
      setApiData(data)
      console.log(data);
    }).catch((err)=>{console.log(err)})
    
  },[])
  
 
  return (
    <div>
      {ApiData.map((item)=>(

        <div style={{height:"400px",textAlign:"left",border:"1px solid white",display:"flex"}}>
          <div style={{flexDirection:"column",display:"flex",justifyContent:"space-evenly",paddingLeft:"20px"}}>
          <h3>{item.title}</h3>
          <img src={item.imageLinks.smallThumbnail} alt="" />

          <div>{item.authors}</div>
          </div>
      
        
          <div style={{display:"flex",alignItems:"center",paddingLeft:"30px"}}>{item.description}</div>
        </div>
        
        
        ))}
    </div>
  )
}

export default Api