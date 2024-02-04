import React,{useState} from "react";



function Addcontact({addContact}){
    const [contactData,setcontactData]=useState({name:"", email:""})

    const handleChange=(e)=>{
        if(e.target.name==="name"){
            setcontactData({...contactData, name:e.target.value})
        }else{
            setcontactData({...contactData, email:e.target.value})
        }
    }

     const handleAdd=(e)=>{
        e.preventDefault();
        if(contactData.name==="" || contactData.email===""){
            alert("Please fill the all data")
            return
        }
       addContact(contactData)
       setcontactData({name:"",email:""})

        
     }
   return(
    <div className="formheader" >
      <div className="addcontact">Add Contact</div>
      <form>
         <label>Name</label> <input type="text" placeholder="Enter Name" name="name" value={contactData.name} onChange={handleChange}/><br/><br/>
         <label>Email</label> <input type="text" placeholder="Enter email" name="email" value={contactData.email} onChange={handleChange}/><br/><br/>
         <button type="submit" onClick={handleAdd}>Add contact</button>
      </form>

    </div>
   )
}
export default Addcontact;