import Navbar from "./Navbar"
import "../css/style.css"
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return(
        <div>
            <Navbar />
                <div className="container-bakemonogatari">
                    <div className="div1"> 
                        <figure className="Bakemonogatari">
                            <img src={item.image} className="figure-img img-fluid rounded" alt={item.nombre}/>
                        </figure>
                    </div>
                    <div className="div2"> 
                        <h1>{item.nombre}</h1>
                        <h2>${item.precio}</h2>
                    </div>
                    <div className="div3">
                        <div className="d-grid gap-2 col-6">
                            {<ItemCount stock={item.stock} onAdd={onAdd} />}
                            <button className="btn" type="button">Comprar Ahora</button>
                        </div>
                    </div>
                    <div className="div4"> 
                        <p><strong>Editorial:</strong> {item.editorial}</p>
                        <p><strong>Tipo de producto:</strong> {item.categoria}</p>
                    </div>
                    <div className="div5"> 
                        <h3>Sinopsis:</h3>
                        <figcaption className="figure-caption">{item.descripcion}</figcaption>
                    </div>
                </div>
        </div>
    )
}

export default ItemDetail;