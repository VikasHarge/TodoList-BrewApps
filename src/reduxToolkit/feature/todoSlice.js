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
        },
        editTodoAction : (state, action)=>{
            const todoIndex = state.findIndex((todo)=> todo.id === action.payload.id);

            if(todoIndex !== -1){
                state[todoIndex].todoText = action.payload.todoText
                state[todoIndex].completed = action.payload.completed
            }
        }
        
    }
})

export const {addTodo, deleteTodo, editTodoAction} = todoSlice.actions;

export default todoSlice.reducer;