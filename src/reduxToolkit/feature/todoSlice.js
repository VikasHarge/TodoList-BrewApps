import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


const todoSlice = createSlice({
    name : 'todos',
    initialState : [],
    reducers : {
        addTodo : (state, action)=>{
            state.push(action.payload);
            toast.success("Todo Added to your list")
        },
        deleteTodo : (state, action)=>{
            toast.error("Task Deleted")
            return state.filter((todo)=> todo.id !== action.payload)
        }
        
    }
})

export const {addTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;