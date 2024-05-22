import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload;
            // whateva we return is also stored in name_var of this slice ie 'user'
            // we will be passing 'user' obj into action.payload that we got from firebase_api
            // this func will store that obj in 'redux.userSlice.user'
        },
        removeUser: (state, action) => {
            return null; // cuz we want sign out ie remove 'user' from redux memory }
        },
    }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;