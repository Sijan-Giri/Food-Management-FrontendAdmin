import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "./authSlice";
import axios from "axios";

const orderSlice = createSlice({
    name : 'order',
    initialState : {
        data : [],
        status : null,
        singleOrder : [],
    },
    reducers : {
        setData(state,action) {
            state.data = action.payload
        },
        setStatus(state,action) {
            state.status = action.payload
        },
        setSingleOrder(state,action) {
            state.singleOrder = action.payload
        },
        removeOrder(state,action) {
            const index = state.orders.findIndex((order) => order._id === action.payload.orderId);
            if(index !== 1) {
                state.orders.splice(index,1)
            } 
        },
        updateOrder(state,action) {
            const index = state.orders.findIndex((order) => order._id === action.payload.id);
            if(index !== 1) {
                state.orders[index] = action.payload.data
            }
        },
        updatePayment(state,action) {
            const index = state.orders.findIndex((order) => order._id === action.payload.id);
            if(index !== 1) {
                state.orders[index] = action.payload.data
            }
        }
    }
})

export const {setData , setStatus , setSingleOrder , removeOrder , updateOrder , updatePayment} = orderSlice.actions;
export default orderSlice.reducer;

export function fetchOrder() {
    return async function fetchOrderThunk(dispatch) {
        try {
            dispatch(setStatus(STATUSES.LOADING));
            const response = await axios.get("http://localhost:2000/getOrders",{
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

export function fetchSingleOrder(id) {
    return async function fetchSingleOrderThunk(dispatch) {
        try {
            dispatch(setStatus(STATUSES.LOADING));
            const response = await axios.get(`http://localhost:2000/getSingleOrder/${id}`,{
                headers : {
                    Authorization : localStorage.getItem("token")
                }
            });
            if(response.status == 200) {
                dispatch(setStatus(STATUSES.SUCCESS));
                dispatch(setSingleOrder(response.data.data))
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export function deleteOrder(id) {
    return async function deleteOrderThunk(dispatch) {
        try {
            dispatch(setStatus(STATUSES.LOADING))
            const response = await axios.delete(`http://localhost:2000/deleteOrder/${id}`,{
              headers : {
                "Content-Type" : "application/json",
                Accept : "application/json",
                "Authorization" : `${localStorage.getItem("token")}`
             }
            });
            if(response.status === 200) {
                dispatch(setStatus(STATUSES.SUCCESS))
                dispatch(removeOrder({orderId : id}))
                dispatch(fetchOrder())
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
          } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
          }
    }
}

export function updateOrderStatus(id,orderStatus) {
    return async function updateOrderStatus(dispatch) {
        try {
            dispatch(setStatus(STATUSES.LOADING));
            const response = await axios.patch(`http://localhost:2000/updateOrderStatus/${id}`,{orderStatus},{
                headers : {
                    "Content-Type" : "application/json",
                Accept : "application/json",
                "Authorization" : `${localStorage.getItem("token")}`
                }
            })
            if(response.status === 200) {
                dispatch(setStatus(STATUSES.SUCCESS));
                dispatch(updateOrder({id , data : response.data.data}))
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export function updatePaymentStatus(id,paymentStatus) {
    return async function updatePaymentStatusThunk(dispatch) {
        try {
            dispatch(setStatus(STATUSES.LOADING))
            const response = await axios.patch(`http://localhost:2000/updatePaymentStatus/${id}`,{paymentStatus},{
                headers : {
                 "Content-Type" : "application/json",
                Accept : "application/json",
                "Authorization" : `${localStorage.getItem("token")}`
                }
            });
            if(response.status === 200) {
                dispatch(setStatus(STATUSES.SUCCESS))
                dispatch(updateOrder({id,data : response.data.data}))
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}