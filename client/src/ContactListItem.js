import React from "react"
import { ContactDetails } from "./ContactDetails"
import "./index.css"

export const ContactListItem = ({ contact, index, handleClick }) => {

  return (
    <div className="contact-list">
      <li
        style={{ cursor: 'pointer' }}
        onClick={() => { handleClick(index) }}
      >
        {contact.name}
      </li>
    </div>
  )
}



