import {createSlice} from "@reduxjs/toolkit"
import data from "../../data"

const initialState = {
    products: data,
    filterProduct:[],
    renderProduct: [],
    order: JSON.parse(localStorage.getItem("order")) ? JSON.parse(localStorage.getItem("order")) : []
}

const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers: {
        filteredProduct: (state,{type,payload}) => {
            state.filterProduct = payload
            state.renderProduct = payload
        },
        searchProduct: (state,{type,payload}) => {
            state.renderProduct = payload
        },
        addOrder: (state,{type,payload}) => {
            state.order = payload
            localStorage.setItem("order",JSON.stringify(payload))
        }
    }
})

export const {filteredProduct,searchProduct,addOrder} = productsSlice.actions;
export default productsSlice.reducer

