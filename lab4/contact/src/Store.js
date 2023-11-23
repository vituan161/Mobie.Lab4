import { createSlice, configureStore } from "@reduxjs/toolkit";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
export const mapContacts = (contact) => {
    const { name, picture, phone, cell, email } = contact;
    return {
        id: uuidv4(),
        name: name.first + " " + name.last,
        picture: picture.large,
        phone,
        cell,
        email,
        favorite: Math.random() < 0.1 ? true : false,
    };
};
const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: [],
    },
    reducers: {
        fetchContactsSuccess: (state, action) => {
            state.contacts = action.payload;
        },
    },
});
export const { fetchContactsSuccess } = contactsSlice.actions;
const store = configureStore({
    reducer: contactsSlice.reducer,
});

export default store;