import axios from "axios";

import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    LOADING : 'loading',
    SUCCESS : 'success',
    ERROR : "error"
})

const authSlice = createSlice({
    name : "auth",
    initialState : {
        data : [],
        status : null,
        token : []
     },
     reducers : {
        setData(state,action) {
            state.data = action.payload
        },
        setStatus(state,action) {
            state.status = action.payload
        },
        setToken(state,action) {
            state.token = action.payload
        }
     }
})

export const {setData , setStatus , setToken} = authSlice.actions;
export default authSlice.reducer;

export  function adminLogin(data) {
    return async function adminLoginThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await axios.post("http://localhost:2000/login",data);
            if(response.status === 200) {
                dispatch(setStatus(STATUSES.SUCCESS))
                dispatch(setData(response.data.data));
                dispatch(setToken(response.data.token))
            }
            else {
                dispatch(setStatus(STATUSES.SUCCESS))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}