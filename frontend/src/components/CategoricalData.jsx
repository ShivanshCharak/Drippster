import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {toast} from 'react-toastify'
import { useState } from 'react'
import Product from './Product'
import ShimmerHome from './ShimmerHome'
import Store from './Store'
import Shimmer from './shimmer'

function CategoricalData() {
    const {id}  = useParams('id')
    console.log(id)
    const [data,setData] = useState([])
    useEffect(()=>{
        fetchData()
    },[id])
    async function fetchData(){
      try {
        const response =  await fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
        if(response.ok){
          const res = await response.json()
          console.log(res)
            setData(res)

        }else{
            toast.error(`Something went wrong while fetching data for ${id}`)
        }
        
        

      } catch (error) {
        
      }
    }
  return (
    <div>
       {data.length >0 ? <Store data ={data}/>:<>
       <Shimmer/>
       <Shimmer/>
       <Shimmer/>
       <Shimmer/>
       <Shimmer/>
       <Shimmer/>
       <Shimmer/>
       <Shimmer/>
       <Shimmer/>
       </>}
    </div>
  )
}

export default CategoricalData