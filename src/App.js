import React,{useState} from "react"
import Header from './components/Header'
import Addcontact from './components/Addcontact'
import Contactlist from "./components/Contactlist";
import uuid4 from 'uuid4';
import './App.css';
function App() {
     const [contact,setContact]=useState([])
     const addContact = (data)=>{
      // console.log(data,"from App.js")
      setContact([...contact,{id:uuid4(),data}])
     }
     const removeContact=(id)=>{
      const updatlist= contact.filter((val)=>{
          return val.id !== id;
      })
      setContact(updatlist)
     }
  return (
    <div className="App">
        <Header/>
        <Addcontact addContact={addContact}/>
        <Contactlist contact={contact} removeContact={removeContact}/>
    </div>
  );
}

export default App;
