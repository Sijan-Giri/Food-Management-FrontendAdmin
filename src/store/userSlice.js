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
        }
    }
})

export const {setStatus , setUser} = userSlice.actions;
export default userSlice.reducer;

export function fetchUser() {
    return async function fetchUserThunk(dispatch) {
        try {
            dispatch(setStatus(STATUSES.LOADING));
            const response = await axios.get("http://localhost:2000/getUser",{
                headers : {
                    Authorization : localStorage.getItem("token")
                }
            });
            if(response.status === 200) {
                dispatch(setStatus(STATUSES.SUCCESS));
                dispatch(setUser(response.data.data))
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}