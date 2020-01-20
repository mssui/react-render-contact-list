import React from "react"
import "./index.css"

export const ContactDetails = ({ contacts, index }) => {
    return (
        <>
            {contacts.map((contact, i) => (
                (i === index) ? <div className={"contact-details"}>{contact.detail}</div> : null
            ))}
        </>
    )
}