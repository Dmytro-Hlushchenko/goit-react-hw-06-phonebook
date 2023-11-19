import { nanoid } from "nanoid";

export const addContact = contact => {
    return {
      type: "contacts/addContacts",
      payload: {
        id: nanoid(),
        name: contact.name,
        number: contact.number
      },
    };
  };

export const deleteContact = contactId => {
  return {
    type: "contacts/deleteContacts",
    payload: contactId,
  };
};

export const filterContacts = filter => { 
  return {
    type: "filter/filterContacts",
    payload: filter,
  }
}