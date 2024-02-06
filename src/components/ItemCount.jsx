import { useEffect, useState } from "react"

const ItemCount = ({stock}) => {
    const[counter, setcounter] = useState(1);
    const[itemStock, setItemStock] = useState(stock);

    const incrementar = () => {
        if (counter < itemStock){
            setcounter(counter + 1);
        }
    }

    const decrementar = () => {
        if (counter > 1){
            setcounter(counter - 1);
        }
    }

    const onAdd = () => {
        if (counter < itemStock){
            setItemStock(itemStock - counter);
            setcounter(1);
        }
    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock]);

    return (
        <>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn" onClick={decrementar}>-</button>
                <button type="button" className="btn">{counter}</button>
                <button type="button" className="btn" onClick={incrementar}>+</button>
                <button type="button" className="btn" onClick={onAdd}>Añadir al carrito</button>
            </div>
        </>
    )
}

export default ItemCount