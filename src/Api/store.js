import {configureStore} from "@reduxjs/toolkit";
import playerReducer from './features'
import shazamCoreApi from '/ShazamCore.'
import {specialCharMap} from "@testing-library/user-event/dist/keyboard";
export  const store = configureStore({
    reducer:{
        [shazamCoreApi.reducerPath]:shazamCoreApi.reducer,
        player:playerReducer()
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(shazamCoreApi.middleware),
})
