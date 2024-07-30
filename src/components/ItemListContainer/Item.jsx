import { useState }from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ producto }) => {
  const [expandir, setExpandir] = useState(false)

  const handleMouseOver = () => {
    setExpandir(true)
  }

  const handleMouseLeave = () => {
    setExpandir(false)
  }

  return (
    <div 
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      style={{textDecoration: 'none', color: 'inherit'}}
      className={expandir ? 'cardExpandida' : 'card'}
    >
      <img width={150} height={150} src={producto.imagen} alt='' />
      <p>{producto.nombre}</p>
      <Link to={"/detalle/" + producto.id} style={{color: "black"}}>Ver detalles</Link>
    </div>
  )
}

export default Item