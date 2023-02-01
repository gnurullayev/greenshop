import { configureStore } from "@reduxjs/toolkit";
import Products from "../reduser/Reduser";

export const store = configureStore({
    reducer: Products,
})

