import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom";
import Header from "./Header";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "../css/Checkout.css"

const Checkout = () => {
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();
    const [ordenId, setOrdenId] = useState();
    const { cart, CantTotalProductos, SumaTotalProductos, clear } = useContext(CartContext);


    const generarOrden = () => {
        if (nombre.length === 0) {
            return false;
        }
        if (email.length === 0) {
            return false;
        }
        if (telefono.length === 0) {
            return false;
        }

        const comprador = { name: nombre, email: email, phone: telefono };
        const items = cart.map(item => ({ id: item.idx, title: item.nombre, price: item.precio }));
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()} ${fecha.getHours()}`;
        const total = SumaTotalProductos();
        const orden = { comprador: comprador, items: items, date: date, total: total };

        const db = getFirestore();
        const ordenCollection = collection(db, "orden");
        addDoc(ordenCollection, orden).then(resultado => {
            clear();
            setOrdenId(resultado.id);
        });
    }



    return (
        <>
            <Header />
            <div className="container">
                <h1>Checkout</h1>
                <div>
                    <table className="table">
                        <tbody>
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
                                </tr>
                            )}
                            <tr>
                                <td className="text-start align-middle" colSpan={4}>&nbsp;</td>
                                <td className="text-start align-middle">${SumaTotalProductos()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="container">
                <div className="formulario col-md-6">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="texto" className="form-control" onInput={(e) => { setNombre(e.target.value) }} />
                        </div>
                        <div class="mb-3">
                            <label className="form-label">E-mail</label>
                            <input type="texto" className="form-control" onInput={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div class="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="texto" className="form-control" onInput={(e) => { setTelefono(e.target.value) }} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={generarOrden}>Generar orden</button>
                    </form>
                </div>
            </div>
            <div className="Agradecimiento col">
                {ordenId ? <div className="alert alert-primary" role="alert">
                    <h3>Gracias Por tu compra</h3>
                    <p>Tu id de compra es: <b>{ordenId}</b> </p>
                </div> : ""}
            </div>
        </>
    )
}

export default Checkout;