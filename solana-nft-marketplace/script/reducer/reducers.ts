import { combineReducers } from "@reduxjs/toolkit";
import signerReducer from "./signerReducer";
import marketReducer from "./marketReducer";

const rootReducer = combineReducers({
    signerReducer,
    marketReducer
});

export default rootReducer;