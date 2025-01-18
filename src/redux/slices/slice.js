import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contacts: [],
};

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        addContact(state, action) {
            state.contacts.push(action.payload);
        },
        removeContact(state, action) {
            state.contacts = state.contacts.filter(
                (_, index) => index !== action.payload
            );
        },
        updateContact(state, action) {
            const { index, updatedContact } = action.payload;
            state.contacts[index] = updatedContact;
        },
        resetContacts(state) {
            state.contacts = [];
        },
    },
});

export const { addContact, removeContact, updateContact, resetContacts } =
    contactSlice.actions;

export default contactSlice.reducer;
