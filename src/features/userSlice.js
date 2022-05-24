import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    email: '',
    photo: '',
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducer: {
        setUserLoginDetails: (state, action) => {
          state.name = action.payload;
          state.email = action.payload;
          state.photo = action.payload;  
        },

        setSignOutState: state => {
            state.name = null;
            state.email = null;
            state.photo = null;
        }
    },

});