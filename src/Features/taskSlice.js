import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload) 
        },
        editTask: (state, action) => {
            const { id, name, text } = action.payload
            const existingTask = state.find(todo => todo.id === id)
            if(existingTask) {
                existingTask.name = name
                existingTask.text = text
            }
        },
        deleteTask: (state, action) => {
            const { id } = action.payload
            const existingTask = state.find(todo => todo.id === id)
            if(existingTask) {
                return state.filter(todo => todo.id !== id)
            }
        }
    }
})

export const { addTask, editTask, deleteTask } = taskSlice.actions
export default taskSlice.reducer;