import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, sub: "Default todo", body: 'This is a Default Todo'}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                sub: action.payload.sub,
                body: action.payload.body,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        editTodo: (state, action) => {
            const { id, sub, body } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.sub = sub;
                todo.body = body;
            }
        },
    }
})

export const {addTodo, removeTodo, editTodo} = todoSlice.actions

export default todoSlice.reducer