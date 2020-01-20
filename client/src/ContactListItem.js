import React from "react"
import "./index.css"

export const ContactListItem = ({ contact, index, handleClick }) => {

  return (
    <div className="contact-list">
      <ul> <li
        style={{ cursor: 'pointer' }}
        onClick={() => { handleClick(index) }}
      >
        Name: {contact.name}
      </li></ul>
    </div>
  )
}



