// src/redux/slices/contactSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contacts: [], // Array to store objects of { name, number }
};

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        addContact(state, action) {
            state.contacts.push(action.payload); // Add a new contact
        },
        removeContact(state, action) {
            state.contacts = state.contacts.filter(
                (_, index) => index !== action.payload
            ); // Remove contact by index
        },
        updateContact(state, action) {
            const { index, updatedContact } = action.payload;
            state.contacts[index] = updatedContact; // Update contact at index
        },
        resetContacts(state) {
            state.contacts = []; // Reset all contacts
        },
    },
});

export const { addContact, removeContact, updateContact, resetContacts } =
    contactSlice.actions;

export default contactSlice.reducer;
