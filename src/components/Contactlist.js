import React from "react"
import DeleteIcon from '@mui/icons-material/Delete';

function Contactlist(props){
  const{contact,removeContact}=props
  // console.log(contact,"from contact list")
      const contactlist =contact.map((val)=>{
           return(
            <div className="contacts">
               <div>{val.data.name}</div>
               <div>{val.data.email}</div>
               <span onClick={()=>removeContact(val.id)}><DeleteIcon/></span>
            </div>
           )
      })
    return(
        <>
          <div className="Contactsheader">Contactlist</div>
          <div>{contactlist}</div>
        </>
    )
}
export default Contactlist;