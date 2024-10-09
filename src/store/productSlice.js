import axios from "axios";
import { STATUSES } from "./authSlice";
import { createSlice } from "@reduxjs/toolkit";

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
        },
        removeProduct(state,action) {
            const index = state.products.findIndex((product) => product._id === action.payload.id);
            if(index !== 1) {
                state.products.splice(index,1)
            } 
        },
        updateProductStatus(state,action) {
            const index = state.products.findIndex((product) => product._id === action.payload.id);
            if(index !== 1) {
                state.products[index] = action.payload.data
            }
        },
        addNewProduct(state,action) {
            state.products.push(action.payload)
        }
    }
})

export const {setStatus , setProduct , removeProduct , updateProductStatus , addNewProduct} = productSlice.actions;
export default productSlice.reducer;

export function fetchProduct() {
    return async function fetchProductThunk(dispatch) {
        try {
            dispatch(setStatus(STATUSES.LOADING));
            const response = await axios.get("https://food-management-system-backend.onrender.com/createProduct");
            if(response.status === 200) {
                dispatch(setStatus(STATUSES.SUCCESS));
                dispatch(setProduct(response.data.data.reverse()));
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export function deleteProduct(id) {
    return async function deleteProductThunk(dispatch) {
        try {
            dispatch(setStatus(STATUSES.LOADING));
            const response = await axios.delete(`https://food-management-system-backend.onrender.com/deleteProduct/${id}`,{
                headers : {
                    Authorization : localStorage.getItem("token")
                }
            });
            if(response.status === 200) {
                dispatch(setStatus(STATUSES.SUCCESS));
                dispatch(removeProduct({id}))
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
} 

export function updateProduct(id,status) {
    return async function updateProductThunk(dispatch) {
        try {
            dispatch(setStatus(STATUSES.LOADING));
            const response = await axios.patch(`https://food-management-system-backend.onrender.com/updateProductStatus/${id}`,{productStatus : status},{
                headers : {
                    Authorization : localStorage.getItem("token")
                }
            });
            if(response.status === 200) {
                dispatch(setStatus(STATUSES.SUCCESS));
                dispatch(updateProductStatus({id , data : response.data.data}))
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export function createProduct(data) {
    return async function createProductThunk(dispatch) {
        try {
            dispatch(setStatus(STATUSES.LOADING))
            const response = await axios.post("https://food-management-system-backend.onrender.com/createProduct",data,{
                headers : {
                    Authorization : localStorage.getItem('token'),
                    "Content-Type" : "multipart/form-data"
                }
            });
            if(response.status === 200) {
                dispatch(setStatus(STATUSES.SUCCESS));
                dispatch(addNewProduct(response.data.data))
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}