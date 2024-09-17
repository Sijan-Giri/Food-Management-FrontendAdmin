import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "./authSlice";
import axios from "axios";

const orderSlice = createSlice({
    name : 'order',
    initialState : {
        data : [],
        status : null
    },
    reducers : {
        setData(state,action) {
            state.data = action.payload
        },
        setStatus(state,action) {
            state.status = action.payload
        }
    }
})

export const {setData , setStatus} = orderSlice.actions;
export default orderSlice.reducer;

export function fetchOrder() {
    return async function fetchOrderThunk(dispatch) {
        try {
            dispatch(setStatus(STATUSES.LOADING));
            const response = await axios.get("http://localhost:2000/getMyOrder",{
                headers : {
                    Authorization : localStorage.getItem("token")
                }
            });
            if(response.status === 200) {
                dispatch(setStatus(STATUSES.SUCCESS));
                dispatch(setData(response.data.data))
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}
