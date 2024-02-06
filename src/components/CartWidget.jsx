import iconCart from "../assets/iconCart.svg";
import { Link } from "react-router-dom";

const CartWidget = () => {
    return(
        <button type="button" className="btn btn-primary position-relative">
            <Link to={'/cart'}><img src={iconCart} alt="Carrito" /></Link>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
        </button>
    )
}

export default CartWidget;