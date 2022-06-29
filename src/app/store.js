import { configureStore } from '@reduxjs/toolkit'
import movieReducer from '../features/movie/movieSlice';
import userReducer from '../features/user/userSlice';

export const store =configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
});

