import React from "react"
import "./index.css"

export const ContactDetails = ({ contacts, index }) => {
    return (
        <>
            {contacts.map((contact, i) => (
                (i === index) ? <div className={"contact-details"} key={i}>
                    <ul>
                        <li>ID: {index}</li>
                        <li>Name :{contact.name}</li>
                        <li>Username: {contact.userName}</li>
                        <li>Email: {contact.email}</li>
                        <li>Phone: {contact.phone}</li>
                        <li>Website: {contact.website}</li></ul>
                </div> : null
            ))}
        </>
    )
}