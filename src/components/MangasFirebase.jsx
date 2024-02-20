import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import {getFirestore, collection, addDoc, query, where, getDocs} from "firebase/firestore";
import Loading from "./Loading";
import ItemList from "./ItemList";
//import arrayMangas from "./json/mangas.json"


const MangasFirebase = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();


    useEffect(() => {
        const db = getFirestore();
        const mangasCollection = collection(db, "mangas");
        const q = id ? query(mangasCollection , where("categoria", "==", id)) : mangasCollection;
        getDocs(q).then(resultado => {
            setLoading(false);
            setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
        })
    }, [id]);


    /*useEffect(() => {
    const db = getFirestore();
    const mangasCollection = collection(db, "mangas")

    arrayMangas.forEach(producto => {
        addDoc(mangasCollection, producto);
    });
}, [])*/


return(
    <>
        {loading ? <Loading /> : <ItemList items={items} />}
    </>
)

}

export default MangasFirebase