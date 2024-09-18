import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./orderSlice";
import  authSlice  from "./authSlice";
import userSlice from "./userSlice";


const store = configureStore({
    reducer : {
        auth : authSlice,
        order : orderSlice,
        user : userSlice
    }
})

export default store;