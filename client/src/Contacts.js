import React from "react"
import { ContactListItem } from "./ContactListItem"
import { ContactDetails } from "./ContactDetails"
import { AddContacts } from "./AddContacts"
import axios from "axios"

import "./index.css"
class Contacts extends React.Component {
  componentDidMount() {
    axios.get('contacts')
      .then(res => {
        const contacts = res.data;
        this.setState({ contacts });
      })
      .catch(err => {
        console.log(err)
      })
  }
  state = {
    contacts: [],
    selectedIndex: 1,
    show: false,
    person: {
      name: null,
      username: null,
      email: null,
      phone: null,
      website: null
    }
  }

  handleClick = (index) => {
    this.setState({ selectedIndex: index })
  }
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleChange = (e) => {
    let person = Object.assign({}, this.state.person);
    person[e.target.id] = e.target.value.toLowerCase();
    this.setState({ person });
  }

  handleForm = () => {
    this.hideModal();
    axios.post('addcontact', this.state.person)
      .then(res => {
        if (res.status === "200") {
          console.log("success");
        }
      })
      .catch(err => {
        console.log(err)
      })
  };
  render() {
    return (
      <>
        <ul className="column-list">
          {this.state.contacts.map((contact, i) => (
            <ContactListItem handleClick={this.handleClick} key={i} index={i} contact={contact} />
          ))}

        </ul>
        <div className="column-details">
          <h4>Contact Details</h4>
          <AddContacts show={this.state.show} handleClose={this.hideModal} handleChange={this.handleChange} handleForm={this.handleForm} />
          <button data-test="modal-button" className="button" type="button" onClick={this.showModal}>
            Add new contact
        </button>
          <div className="divider" />
          <ContactDetails contacts={this.state.contacts} index={this.state.selectedIndex} />
        </div>
      </>
    )
  }
}

export default Contacts

