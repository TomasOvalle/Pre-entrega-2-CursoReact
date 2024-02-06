import { Link } from "react-router-dom";
import "../css/style.css"
import ItemCount from "./ItemCount";

const Item = ({item}) => {

    return(
        <section className="Container container-fluid ">
            <figure className="figure">
                <Link to={'/item/' + item.id}><img className="img-fluid rounded" src={item.image} alt={item.nombre} /></Link>
                <figcaption className="editorial figure-caption">{item.editorial}</figcaption>
                <figcaption className="titulo figure-caption">{item.nombre}</figcaption>
                    <figcaption className="precio figure-caption">${item.precio}</figcaption>
                    <ItemCount stock={10} />
            </figure>
        </section>
    )
}

export default Item;