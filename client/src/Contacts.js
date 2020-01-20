import React from "react"
import { ContactListItem } from "./ContactListItem"
import { ContactDetails } from "./ContactDetails"
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
    selectedIndex: 1
  }

  handleClick = (index) => {
    this.setState({ selectedIndex: index })
    console.log("state index", this.state.selectedIndex)

  }
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
          <ContactDetails contacts={this.state.contacts} index={this.state.selectedIndex} />
        </div>
      </>
    )
  }
}

export default Contacts

