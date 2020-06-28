import React, { Component } from "react";

class NumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://api.airtable.com/v0/appUnP45WjGNkbufP/Contacts?api_key=key8txJ4DSHAMTJyD"
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        this.setState({ contacts: data.records });
      })
      .catch((err) => {
        // Error
      });
  }

  render() {
    return (
      <div className="card-deck">
        {this.state.contacts.map((phone) => (
          <PhoneList {...phone.fields} />
        ))}
      </div>
    );
  }
}
export default NumList;

const PhoneList = ({ Num, Name }) => (
  <div className="phonebook">
    <p className="phoneName">{Name}</p>
    <p className="phoneNum">{Num}</p>
  </div>
);
