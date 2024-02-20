import { useState } from "react";
import { useEffect } from "react";
//import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {getFirestore, collection, addDoc, query, where, getDocs} from "firebase/firestore";
import Loading from "./Loading";





const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true); 
    const {id} = useParams();

/*useEffect (() => {
        const promesa = new Promise(resolve => {
            setTimeout(() =>{
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            }, );
        })
        promesa.then(data => {
            setItems(data);
        })
    }, [id]);
    */

useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const q = id ? query(itemsCollection , where("categoria", "==", id)) : itemsCollection;
    getDocs(q).then(resultado => {
        setLoading(false);
        setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
    })
}, [id]);



    return(
        <>
            {loading ? <Loading /> : <ItemList items={items} /> }
        </>
    )
}

export default ItemListContainer