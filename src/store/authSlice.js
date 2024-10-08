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
        token : [],
        profile : {}
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
        },
        setProfile(state,action ) {
            state.profile = action.payload
        }
     }
})

export const {setData , setStatus , setToken , setProfile} = authSlice.actions;
export default authSlice.reducer;

export  function adminLogin(data) {
    return async function adminLoginThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await axios.post("https://food-management-system-backend.onrender.com/login",data);
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

export function fetchProfile() {
    return async function fetchProfileThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const response = await axios.get("https://food-management-system-backend.onrender.com/getProfile",{
                headers : {
                    Authorization : localStorage.getItem("token")
                }
            });
            if(response.status === 200) {
                dispatch(setStatus(STATUSES.SUCCESS));
                dispatch(setProfile(response.data.data))
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}