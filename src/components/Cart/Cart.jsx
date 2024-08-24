import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

import "./cart.css";

const Cart = () => {
  const { carrito, precioTotal, borrarProducto, vaciarCarrito } =
    useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div className="empty-cart">
        <h2>El carrito esta vacio 😥</h2>
        <Link to="/" className="button-empty-cart">
          Ver Productos
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <ul className="cart-list">
        {carrito.map((productoCarrito) => (
          <li className="cart-item">
            <img width={150} src={productoCarrito.imagen} alt="" />
            <p>{productoCarrito.nombre}</p>
            <p>Cantidad: {productoCarrito.cantidad}</p>
            <p>Precio c/u: ${productoCarrito.precio}</p>
            <p>
              Precio parcial: $
              {productoCarrito.cantidad * productoCarrito.precio}
            </p>
            <FaTrash
              size={20}
              color="red"
              onClick={() => borrarProducto(productoCarrito.id)}
            />
          </li>
        ))}
      </ul>
      <div className="cart-controls">
        <h2>Precio Total: {precioTotal()}</h2>
        <div className="buttons">
          <button className="button-cart" onClick={vaciarCarrito}>
            <FaTrash size={20} color="red" />
            <p>Vaciar Carrito</p>
          </button>
          <Link className="button-cart" to="/checkout">
            Seguir mi compra
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Cart;
