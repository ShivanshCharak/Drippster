// const { createSlice } = require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        
        items:[],
        itemCount:0
    },
    reducers:{
        addItem:(state,action)=>{
            const existingProduct = state.items.find(item=>item.id === action.payload.id)
            if(existingProduct){
                // console.log(existingProduct)
                existingProduct.count++
            }else{
                state.items.push({...action.payload,count:1})
                
            }
        },
        updateProductCount:(state)=>{
            const {id} = action.payload
            state.items.count++;
        },
        clearCart:(state)=>{
            state.items=[];
        },
        removeItem(state, action) {
            {console.log("uea")}
            const existingProduct = state.items.find(item=>item.id === action.payload.id)
            if(existingProduct && existingProduct.count >0){
                // console.log(existingProduct)
                existingProduct.count--
            }else{
                state.items = state.items.filter(item => item.id !== action.payload.id);
            }

          }
    }
})
export const {addItem,clearCart,removeItem} = cartSlice.actions
export default cartSlice.reducer;
//  cartSlice={
// actions:{
// addItem,
// removeItem,
// } reducer:reducers
// }