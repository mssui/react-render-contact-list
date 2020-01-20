import React from "react"
import "./index.css"

export const ContactDetails = ({ contacts, index }) => {
    return (
        <>
            {contacts.map((contact, i) => (
                (i === index) ? <div className={"contact-details"} key={i}>
                    <ul>
                        <li>ID: {index + 1}</li>
                        <li>Name :{contact.name}</li>
                        <li>Username: {contact.userName}</li>
                        <li>Email: <a href={"mailto:" + contact.email}>{contact.email}</a></li>
                        <li>Phone: <a href={"tel:" + contact.phone}> {contact.phone}</a></li>
                        <li>Website: {contact.website}</li></ul>
                    <img width="200px" height="200px" src={process.env.PUBLIC_URL + `/${index}.png`} />
                </div> : null
            ))}
        </>
    )
}
