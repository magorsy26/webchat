import { configureStore, createSlice } from "@reduxjs/toolkit";

const tabMessage=createSlice({
    name:"message",
    initialState:[],
    reducers:{
        addMessage:(state,action)=>{
            const newMessage={
                id:action.payload.id,
                isMymessage:action.payload.isMymessage,
                message: action.payload.message,
                name: action.payload.name
            }
            for(let i=0;i<state.length;i++){
                if(state[i].id===action.payload.id){
                    return;
                }
            }
            state.push(newMessage);
        }
    }
})

export const store =configureStore({
    reducer: {
        message: tabMessage.reducer
    }
})