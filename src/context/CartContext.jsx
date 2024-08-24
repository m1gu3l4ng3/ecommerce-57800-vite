import { createContext, useState } from 'react';

// Creamos un contexto llamado CartContext
const CartContext = createContext();

// Creamos un componente que servira como proveedor del contexto
// Este mismo envuelve los componentes que van a poder consumir la info del context
const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (productoNuevo) => {
    const condicion = estaEnElCarrito(productoNuevo.id);
    if (condicion) {
      //Sumar cantidades
      const nuevoCarrito = carrito.map((productoCarrito) => {
        if (productoCarrito.id === productoNuevo.id) {
          return {
            ...productoCarrito,
            cantidad: productoCarrito.cantidad + productoNuevo.cantidad,
          };
        } else {
          return productoCarrito;
        }
      });

      setCarrito(nuevoCarrito);
    } else {
      //Agregar el producto como nuevo
      setCarrito([...carrito, productoNuevo]);
    }
  };

  //Funcion para detectar si el producto a añadir esta en el carrito o no
  const estaEnElCarrito = (idProducto) => {
    const condicional = carrito.some((productoCarrito) => productoCarrito.id === idProducto);
    return condicional;
  };

  const cantidadTotal = () => {
    const totalProductos = carrito.reduce((total, productoCarrito) => total + productoCarrito.cantidad, 0);
    return totalProductos;
  };

  const precioTotal = () => {
    const precio = carrito.reduce(
      (total, productoCarrito) => total + productoCarrito.cantidad * productoCarrito.precio,
      0
    );
    return precio;
  };

  const borrarProducto = (idProducto) => {
    const productosFiltrados = carrito.filter((productoCarrito) => productoCarrito.id !== idProducto);
    setCarrito(productosFiltrados);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  console.log(carrito);

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarProducto,
        cantidadTotal,
        precioTotal,
        borrarProducto,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };