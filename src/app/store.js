import { configureStore, applyMiddleware } from '@reduxjs/toolkit'


export const store =configureStore({
    reducer: {},
    middleware: applyMiddleware({
        serializableCheck: false,
    }),
});

