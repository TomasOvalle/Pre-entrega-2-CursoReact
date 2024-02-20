import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import arrayProductos2 from './json/productos2.json'
import ItemDetail2 from "./NovelasDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";
import NovelasDetail from "./NovelasDetail";


const DetailNovelasContainer = () =>{
    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

/*    useEffect (() => {
        const Promesa = new Promise(resolve => {
            setTimeout(() => {
                let novelas = arrayProductos2.find(item => item.id === parseFloat(id));
                resolve(novelas);
            })
        })
        Promesa.then(data => {
            setProducto(data);
        })
    }, [id])*/

useEffect(() => {
    const db = getFirestore();
    const productos = doc(db, "items", id);
    getDoc(productos).then(resultado => {
        setLoading(false);
        setProducto({id:resultado.id, ...resultado.data()})
    });
}, [id]);



    return(
        <>
            { loading ? <Loading /> : <NovelasDetail producto={producto} />}
        </>
    )
}

export default DetailNovelasContainer;