import { useState } from "react";
import { useEffect } from "react";
import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect (() => {
        const promesa = new Promise(resolve => {
            setTimeout(() =>{
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            }, 2000);
        })
        promesa.then(data => {
            setItems(data);
        })
    }, [id]);


    return(
        <>
            <ItemList items={items} />
            <ItemCount stock={10} />
        </>
    )
}

export default ItemListContainer