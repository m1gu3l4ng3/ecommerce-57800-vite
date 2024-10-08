import Item from "./Item";
import "./itemList.css";

const ItemList = ({ productos }) => {
  return (
    <div className="itemList">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;
