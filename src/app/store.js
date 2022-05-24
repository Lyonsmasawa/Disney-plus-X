import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice';

export const store =configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: applyMiddleware({
        serializableCheck: false,
    }),
});

