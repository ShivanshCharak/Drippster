import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../context/productInfoContext'
import {useState} from 'react'
import style from './Details.module.css'
import { useParams } from 'react-router-dom'
function Details() {

  const [buttonClicked,setButtonClicked] = useState(null)
    const {productData} =useContext(ProductContext)

    const data  = useParams()
    function review(){
     Array.from(4,(index,value)=>{
      console.log(value)
      })
    }

    function handleClick(size){
      setButtonClicked(size)
    }
  return (

    <>
    {
      productData && (
        
        <div className={style.gridContainer}>
    {  console.log(productData)}
      <div className={style.leftContainer}>
        <div>
          <img src={productData && productData.images[0]} alt="" />
          <img src={productData.images[1]} alt="" />
          <img src={productData.images[2]} alt="" />
        </div>
      </div>
      <div className={style.middleContainer}>
          <div className={style.masterImage}>
              <img src={productData.images[0]} alt="" />
          </div>
      </div>
      <div className={style.rightContainer}>
        <div className={style.heading}>
          <h1>{productData.title}</h1>
        </div>
        <div className={style.category}>
          <p>{productData.category.name}</p>
        </div>
        <div className={style.price}>
          <h1>${productData.price}</h1>
        </div>
        <div className={style.size}>
          <p>Select Size</p>
          <button onClick={()=>handleClick("xs")} className={buttonClicked==='xs'?style.addedToCart:""} >XS</button>
          <button onClick={()=>handleClick("s")} className={buttonClicked==='s'?style.addedToCart:""}>S</button>
          <button onClick={()=>handleClick('m')} className={buttonClicked==='m'?style.addedToCart:""}>M</button>

          <button onClick={()=>handleClick("l")} className={buttonClicked==='l'?style.addedToCart:""}>L</button>
          <button onClick={()=>handleClick("xl")} className={buttonClicked==='xl'?style.addedToCart:""}>XL</button>
          
        </div>
        <div className={style.options}>
          <div className={style.addToCart}>
            <button><i class="fa-solid fa-cart-shopping" style={{marginRight:"10px"}}></i>Add to cart</button>
          </div>
          <div>
            
           
          </div>
        </div>
        <div className={style.freeDelivery}>
         <i class="fa-solid fa-truck-fast"></i> 
         <p>Free delivery on order over $20.00</p>
        </div>
      </div>
    </div>
     )
    }
  
    </>
  )
}

export default Details