import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
    },
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
        },
        removeContact(state, action) {
            return {
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                ),
            };
        },
    },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;