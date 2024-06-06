import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/operation.js';

export const store = configureStore({
    reducer: todoReducer
})