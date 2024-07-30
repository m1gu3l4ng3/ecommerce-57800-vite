import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ( { producto }) => {
  const agregarAlCarrito = (contador) => {
    const productoCarrito = {...producto, cantidad: contador}
  }
  return (
    <div className="card">
      <div className="card-image-container">
        <img width={300} height={300} src={producto.imagen} className="card-image"/>
      </div>
      <div className="card-content">
        <h2 className="card-title">{producto.nombre}</h2>
        <p className="card-description">{producto.descripcion}</p>
        <p className="item-price">${producto.precio}</p>
      </div>
      <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito}/>
    </div>
  )
}

export default ItemDetail