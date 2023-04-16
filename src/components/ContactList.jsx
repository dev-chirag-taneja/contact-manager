import React from "react";
import ContactCard from "./ContactCard";

function ContactList({ contacts, getContactId }) {
  // delete contact handler
  const deleteContactHandler = (id) => {
    getContactId(id);
  };

  // passing array to child component
  return (
    <div className="container mx-auto">
      {contacts.map((contact) => {
        return (
          <ContactCard
            contact={contact}
            key={contact.id}
            clickHandler={deleteContactHandler}
          />
        );
      })}
    </div>
  );
}

export default ContactList;
