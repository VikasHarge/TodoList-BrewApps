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
        
    }
})

export const {addTodo} = todoSlice.actions;

export default todoSlice.reducer;