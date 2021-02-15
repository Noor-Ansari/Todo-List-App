import { createSlice } from '@reduxjs/toolkit'


const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        saveTodo : {
        	reducer(state, action){
            	state.push(action.payload)
        }},
        removeItem : {
        	reducer(state, action){
        		state.map((item, idx)=>{
        			if(action.payload===item.id){
        				state.splice(idx,1)
        			}
        		})}
        },
        setChecked : {
        	reducer(state, action){
        		state.map(item=>{
        			if (action.payload === item.id){
        				if (item.done){
        					item.done = false
        				}else{
        					item.done = true
        				}
        			}
        		})}
        }
    }
});


export const {saveTodo, setChecked, removeItem} = todoSlice.actions;
export const selectTodoList = state => state.todos
export default todoSlice.reducer;