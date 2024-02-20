import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";


const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true); 
    const {id} = useParams();

/*    useEffect (() => {
        const Promesa = new Promise(resolve => {
            setTimeout(() =>{
                let producto = arrayProductos.find(item => item.id === parseFloat(id));
                resolve(producto);
            }, );
        })
        Promesa.then(data =>{
            setItem(data);
        })
    }, [id]);*/

useEffect(() => {
    const db = getFirestore();
    const producto = doc(db, "items", id);
    getDoc(producto).then(resultado => {
        setLoading(false);
        setItem({id:resultado.id, ...resultado.data()});
    });
}, [id]);



    return(
    <>
        {loading ? <Loading /> : <ItemDetail item={item} /> }
    </>
    )
} 

export default ItemDetailContainer;