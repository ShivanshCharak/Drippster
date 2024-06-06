import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './cartSlice';
const store = configureStore({
    reducer:{
        cart:cartSlice
    }
})

export default store;
//  created a store configuteStore with reeux tool kit
// provide my store to app by using provider react-redux
// created a slice createSlice rtk
// 