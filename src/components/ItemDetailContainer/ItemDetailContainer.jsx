import { useState, useEffect } from 'react'
import obtenerProductos from '../../data/data.js'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const { idProducto } = useParams()

  useEffect(() => {
    obtenerProductos()
      .then((data) => {
        const productoEncontrado = data.find( (productoData) => productoData.id === Number(idProducto))
        setProducto(productoEncontrado)
      })
  }, [])
  return (
    <ItemDetail producto={producto} />
  )
}

export default ItemDetailContainer