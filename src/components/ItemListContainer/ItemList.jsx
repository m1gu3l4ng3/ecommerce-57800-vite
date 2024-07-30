import Item from './Item'
import './ItemList.css'

const ItemList = ({ productos }) => {
  return (
    <div style={{display:"flex", flexWrap: "wrap"}} className='item-list'>
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  )
}

export default ItemList