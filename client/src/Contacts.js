import React from "react"
import {ContactListItem} from "./ContactListItem"
import "./index.css"



class Contacts extends React.Component {
    state={
        contacts:[{id: 1, name: "jhgjg", detail: "about this list item"},{id: 2, name: "David", detail: "David item details"},],
        selectedIndex: 1
    }

    handleClick = (index) => {
        this.setState({selectedIndex: index})
        console.log("state index", this.state.selectedIndex )

    }
    render() {
  return (
    <ul>
        {  this.state.contacts.map((contact, i) =>  {
      return (
        <ContactListItem handleClick={this.handleClick} key={i} index={i} contact={contact} isActive={ i === this.state.selectedIndex} />
     )
    })}
    </ul>
 )
    }
  }

  export default Contacts

 