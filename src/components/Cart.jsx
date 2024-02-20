import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/trash-2.svg";
import Header from "./Header";
import "../css/Cart.css";

const Cart = () => {
    const { cart, removeItem, clear, CantTotalProductos, SumaTotalProductos } = useContext(CartContext)

    if (CantTotalProductos() == 0) {
        return (
            <div>
                <div className="row">
                    <div className="col text-center">
                        <p>No se encontraron productos en el carrito</p>
                        <Link to={"/"} className="btn my-5 ">Volver a la página principal</Link>
                    </div>
                </div>
            </div>
        )
    }




    return (
        <>
            <Header />
            <div className="container">
                <h1>Carrito de Compras</h1>
                <div>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="text-start align-middle" colSpan={4}>&nbsp;</td>
                                <td>
                                    <a href="#" className="vaciarCarrito btn" onClick={clear}>
                                        Vaciar Carrito <img src={trash} alt="Eliminar Producto" title="Eliminar Producto" />
                                    </a>
                                </td>
                            </tr>
                            {cart.map(product =>
                                <tr key={product.id}>
                                    <td>
                                        <div className="image">
                                            <img src={product.image} alt={product.nombre} width={105} />
                                        </div>
                                    </td>
                                    <td>
                                        <h2 className="nombre">
                                            {product.nombre}
                                        </h2>
                                    </td>
                                    <td>
                                        <div className="precio">
                                            ${product.precio}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="cantidad">
                                            {product.quantity}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="valorTotal">
                                            ${product.quantity * product.precio}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="eliminarProducto">
                                            <a href="#" onClick={() => { removeItem(product.id)}}>
                                                <img src={trash} alt="Eliminar Productos" title="Eliminar Producto" />
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            )}
                            <tr>
                                <td className="text-start align-middle" colSpan={4}>&nbsp;</td>
                                <td className="text-start align-middle">${SumaTotalProductos()}</td>
                                <td><Link to={"/checkout"} className="btn">Checkout</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Cart;
