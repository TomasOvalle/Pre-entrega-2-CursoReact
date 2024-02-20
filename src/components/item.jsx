import { Link } from "react-router-dom";
import "../css/style.css"
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Item = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }


return(
        <section className="Container container-fluid ">
            <figure className="figure">
                <Link to={'/item/' + item.id}><img className="img-fluid rounded" src={item.image} alt={item.nombre} /></Link>
                <figcaption className="editorial figure-caption">{item.editorial}</figcaption>
                <figcaption className="titulo figure-caption">{item.nombre}</figcaption>
                    <figcaption className="precio figure-caption">${item.precio}</figcaption>
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
            </figure>
        </section>
    )
}

export default Item;