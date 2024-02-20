import Navbar from "./Navbar"
import "../css/style.css"
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const NovelasDetail = ({producto}) => {
    const {addProducto} = useContext(CartContext);

    const onAdd = (quantity) => {
        addProducto(producto, quantity);
    }

    return(
        <div>
            <Navbar />
                <div className="container-bakemonogatari">
                    <div className="div1"> 
                        <figure className="Bakemonogatari">
                            <img src={producto.image} className="figure-img img-fluid rounded" alt={producto.nombre}/>
                        </figure>
                    </div>
                    <div className="div2"> 
                        <h1>{producto.nombre}</h1>
                        <h2>${producto.precio}</h2>
                    </div>
                    <div className="div3">
                        <div className="d-grid gap-2 col-6">
                            {<ItemCount stock={item.stock} onAdd={onAdd} />}
                            <button className="btn" type="button">Comprar Ahora</button>
                        </div>
                    </div>
                    <div className="div4"> 
                        <p><strong>Editorial:</strong> {producto.editorial}</p>
                        <p><strong>Tipo de producto:</strong> {producto.categoria}</p>
                    </div>
                    <div className="div5"> 
                        <h3>Sinopsis:</h3>
                        <figcaption className="figure-caption">{producto.descripcion}</figcaption>
                    </div>
                </div>
        </div>
    )
}

export default NovelasDetail;