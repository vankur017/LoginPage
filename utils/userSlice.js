import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState:{user:{
        userName: null,
        passWord: null
    }},
    reducers:{
        addUser:(state,action)=>{
            state.user = action.payload;
        },
        removeUser:(state,action)=>{
            return null;
        }
    }
})

export const {addUser, removeUser} = userSlice.actions
export default userSlice.reducer