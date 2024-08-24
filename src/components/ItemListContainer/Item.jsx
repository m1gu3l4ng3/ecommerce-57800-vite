import { Link } from "react-router-dom";
import "./itemList.css";

const Item = ({ producto }) => {
  return (
    <div className="card">
      <div className="img-card">
        <img src={producto.imagen} alt="" />
      </div>
      <p>{producto.nombre}</p>
      <p>Precio: ${producto.precio}</p>
      <Link className="link" to={"/detalle/" + producto.id}>
        Ver detalles
      </Link>
    </div>
  );
};

export default Item;
