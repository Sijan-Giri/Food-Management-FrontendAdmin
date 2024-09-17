import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./orderSlice";
import  authSlice  from "./authSlice";


const store = configureStore({
    reducer : {
        auth : authSlice,
        order : orderSlice
    }
})

export default store;