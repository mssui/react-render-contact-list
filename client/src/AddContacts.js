import React from "react"
import "./index.css"

export const AddContacts = ({ handleClose, show, handleForm, handleChange }) => {
    return (
        <div className={show ? "modal display-block" : "modal display-none"}>
            <section className="modal-main">

                <input
                    type="text"
                    id="name"
                    onChange={event => handleChange(event)}
                    placeholder="Enter New Contact Name"
                    required
                />
                <input
                    type="text"
                    id="username"
                    onChange={event => handleChange(event)}
                    placeholder="Username"
                    required
                />
                <input
                    type="text"
                    id="email"
                    onChange={event => handleChange(event)}
                    placeholder="Email"
                    required
                />
                <input
                    type="text"
                    id="phone"
                    onChange={event => handleChange(event)}
                    placeholder="Phone"
                    required
                />
                <input
                    type="text"
                    id="website"
                    onChange={event => handleChange(event)}
                    placeholder="Website"
                    required
                />
                <div>
                    <button onClick={handleForm}>Save</button>
                    <button onClick={handleClose}>Close</button></div>
            </section>
        </div >
    );
};