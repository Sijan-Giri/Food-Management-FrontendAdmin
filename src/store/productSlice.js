import axios from "axios";
import { STATUSES } from "./authSlice";

const { createSlice } = require("@reduxjs/toolkit");

const productSlice = createSlice({
    name : "product",
    initialState : {
        status : null,
        products : []
    },
    reducers : {
        setStatus(state,action) {
            state.status = action.payload
        },
        setProduct(state,action) {
            state.products = action.payload
        }
    }
})

export const {setStatus , setProduct} = productSlice.actions;
export default productSlice.reducer;

export function fetchProduct() {
    return async function fetchProductThunk(dispatch) {
        try {
            dispatch(setStatus(STATUSES.LOADING));
            const response = await axios.get("http://localhost:2000/createProduct");
            if(response.status === 200) {
                dispatch(setStatus(STATUSES.SUCCESS));
                dispatch(setProduct(response.data.data));
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}