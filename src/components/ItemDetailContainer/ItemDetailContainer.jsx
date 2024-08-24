import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";

import ItemDetail from "./ItemDetail";
import db from "../../db/db.js";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { idProducto } = useParams();

  const getProduct = async () => {
    try {
      const docRef = doc(db, "productos", idProducto);
      const dataDb = await getDoc(docRef);
      if (dataDb.exists() && dataDb.data().nombre) {
        const data = { id: dataDb.id, ...dataDb.data() };
        setProducto(data);
      } else {
        setProducto(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!producto) {
    return (
      <div className="empty-cart-container">
        <div className="empty-cart-content">
          <h2 className="empty-cart-title">404!</h2>
          <p className="empty-cart-message">Producto no encontrado.</p>
          <Link to="/" className="empty-cart-link">
            Buscar producto
          </Link>
        </div>
      </div>
    );
  }
  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
