import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useState} from 'react'
import styles from './cartDiv.module.css'
import { removeItem } from '../redux/cartSlice'
import Button from './Button'
function cartDiv({item}) {
     const dispatch = useDispatch()
     // const [item,setItem] = useState(item)
     const data = useSelector(val => val.cart)
     // console.log(data)

     
     function handleSubmit() {
          if (Array.isArray(data.items)) {
               // console.log(data.items[0].id)
                   const foundItem = data.items.find(itemData => itemData.id === item.id);
               dispatch(removeItem(foundItem))
          //    const finalData= data.items.filter(dataItem => foundItem.id !== dataItem.id)
          //    console.log(finalData)
          } else {
              console.log("Data items is not an array or is undefined/null.");
          }
      }
      
      
      
    // const items = useSelector(state=>state.cart.items)
  return (
    <>
    <div className={styles.content}>
        <div className={styles.productImage}>
             <img src ={item.images[0]} width="100px"/>
        </div>
        <div className={styles.title}>
             <p style={{ color: "wheat" }}>{item.title}</p>
        </div>
        <div className={styles.price}>
             <span>${item.price}</span>
        </div>
        
        <div className="styles remove">
             <span><i  id ={item.id} onClick={(item)=>handleSubmit(item)} class="fa-solid fa-xmark"></i></span>
        </div>
    </div>
    </>
  )
}

export default cartDiv