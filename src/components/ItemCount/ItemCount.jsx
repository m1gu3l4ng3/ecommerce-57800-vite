import { useState } from 'react'

const ItemCount = ({ stock, agregarAlCarrito }) => {
  const [count, setCount] = useState(1)

  const aumentar = () => {
    if (count < stock) {
      setCount( count + 1)
    }
  }
   const disminuir = () => {
    if (count > 1) {
      setCount( count - 1)
    }
   }
  return (
    <div style={{display:"flex", flexWrap: "wrap"}} className='item-count-container'>
      <div className='counter'>
        <button className='counter-button' onClick={disminuir}>-</button>
        <p>{count}</p>
        <button className='counter-button' onClick={aumentar}>+</button>
        <button className='counter-button' onClick={() => agregarAlCarrito(count) }>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount