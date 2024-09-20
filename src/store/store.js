import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./orderSlice";
import  authSlice  from "./authSlice";
import userSlice from "./userSlice";
import productSlice from "./productSlice";


const store = configureStore({
    reducer : {
        auth : authSlice,
        order : orderSlice,
        user : userSlice,
        product : productSlice
    }
})

export default store;