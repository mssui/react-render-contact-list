import React from "react"
import {ContactDetails} from "./ContactDetails"

export const ContactListItem = ({contact, isActive, index, handleClick}) =>{ 
  
    return (
    <li 
    style={{cursor: 'pointer'}}
    onClick={()=>{handleClick(index)}}
    >
    {contact.name} -  {isActive ?<ContactDetails detail={contact.detail}/> : null} 
    </li>
)}



