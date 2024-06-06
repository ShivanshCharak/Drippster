import React from 'react'
import {useState,createContext} from 'react'

const ProductContext = createContext(null)
function ProductInfoContextProvider({children}) {
    const [productData,setProductData]= useState(null)
    return(<>
    <ProductContext.Provider value={{productData,setProductData}}>
        {children}
    </ProductContext.Provider>
    </>)
}

export { ProductContext,ProductInfoContextProvider}