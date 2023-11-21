import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContacts");
export const deleteContact = createAction("contacts/deleteContacts");
export const filterContacts = createAction("filter/filterContacts");
