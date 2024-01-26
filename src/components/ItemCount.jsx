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
                <button type="button" className="btn btn-primary" onClick={decrementar}>-</button>
                <button type="button" className="btn btn-primary">{counter}</button>
                <button type="button" className="btn btn-primary" onClick={incrementar}>+</button>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <button type="button" className="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount