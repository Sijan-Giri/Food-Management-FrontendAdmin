import axios from "axios";
import { STATUSES } from "./authSlice";

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : {
        status : null,
        user : []
    },
    reducers : {
        setStatus(state,action) {
            state.status = action.payload
        },
        setUser(state,action) {
            state.user = action.payload
        },
        removeUser(state,action) {
            const index = state.user.findIndex((user) => user._id === action.payload.id);
            if(index !== 1) {
                state.user.splice(index,1)
            } 
        }
    }
})

export const {setStatus , setUser , removeUser} = userSlice.actions;
export default userSlice.reducer;

export function fetchUser() {
    return async function fetchUserThunk(dispatch) {
        try {
            dispatch(setStatus(STATUSES.LOADING));
            const response = await axios.get("https://food-management-system-backend.onrender.com/getUser",{
                headers : {
                    Authorization : localStorage.getItem("token")
                }
            });
            if(response.status === 200) {
                dispatch(setStatus(STATUSES.SUCCESS));
                dispatch(setUser(response.data.data.reverse()))
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export function deleteUser(id) {
    return async function deleteUserThunk(dispatch) {
        try {
            dispatch(setStatus(STATUSES.LOADING));
            const response = await axios.delete(`https://food-management-system-backend.onrender.com/deleteUser/${id}`,{
                headers : {
                    Authorization : localStorage.getItem("token")
                }
            });
            if(response.status == 200) {
                dispatch(setStatus(STATUSES.SUCCESS))
                dispatch(removeUser({id}))
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}