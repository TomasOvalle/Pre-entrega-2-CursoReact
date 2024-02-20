import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
//import arrayNovelas from "./json/novelas.json"
import Loading from "./Loading";
import DetailNovelasContainer from "./DetailNovelasContainer";
import ItemList from "./ItemList";



const NovelasFirebase = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const novelasCollection = collection(db, "novelas");
        const q = id ? query(novelasCollection, where("categoria", "==", id)) : novelasCollection;
        getDocs(q).then(resultado => {
            setLoading(false);
            setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
        })
    }, [id]);
    
    /*useEffect(() => {
    const db = getFirestore();
    const novelasCollection = collection(db, "novelas")
    
    arrayNovelas.forEach(producto => {
        addDoc(novelasCollection, producto);
    });
    }, [])*/
    
    return (
        <>
            {loading ? <Loading /> : <ItemList items={items} />}
        </>
    )
}


export default NovelasFirebase
