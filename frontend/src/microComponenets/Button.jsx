import { useSelector } from "react-redux";
import style from './button.module.css';
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";

function Button({ data }) {
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch()
    function handleButtonClick(){
        dispatch(addItem(data))
    }
    function removeFromCart(){
        console.log("ejfnkje")
        dispatch(removeItem(data))
    }
    function addInCart(){
        console.log()
        dispatch(addItem(data))
    }
    function productCount() {
        const filteredItems = items.filter(item => item.id === data.id);
        if (filteredItems.length > 0) {
            return filteredItems[0].count;
        }
        return 0;
    }

    return (
        <>
     <div className={style.buttonContainer}>
        {/* <div className={style.pop}> */}
                 <button className={style.op} onClick={removeFromCart}>-</button>
        {/* </div> */}
    <div className={style.button}>{productCount()}</div>
    <button className={style.add} onClick={addInCart}>+</button>
</div>

        </>
    );
}

export default Button;
