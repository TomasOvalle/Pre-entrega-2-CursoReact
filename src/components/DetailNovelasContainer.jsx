import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrayProductos2 from './json/productos2.json'
import ItemDetail2 from "./NovelasDetail";


const DetailNovelasContainer = () =>{
    const [producto, setProducto] = useState([]);
    const {id} = useParams();

    useEffect (() => {
        const Promesa = new Promise(resolve => {
            setTimeout(() => {
                let novelas = arrayProductos2.find(item => item.id === parseFloat(id));
                resolve(novelas);
            })
        })
        Promesa.then(data => {
            setProducto(data);
        })
    }, [id])
    return(
        <ItemDetail2 producto={producto} />
    )
}

export default DetailNovelasContainer;