import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/style.css"


const Fetch2 = () => {
    const [productos, setProductos] = useState([]);
    const URL = "https://6588d05b324d417152583aa1.mockapi.io/productos";

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const respuesta = await fetch(URL);
        const productosData = await respuesta.json();
        setProductos(productosData);
      } catch (error) {
        console.error("Error al obtener productos", error);
      }
    };

    obtenerProductos();
  }, []); 

  const agregarAlCarrito = (producto) => {
    console.log("Agregando al carrito:", producto);
  };

  return (
    <div className="productos-container">
      {productos.map((producto) => (
        <div key={producto.id} className="tarjeta-producto">
          <Link to={'/item/' + producto.id}><img src={producto.image} alt={producto.nombre} className="img-fluid rounded" /></Link>
          <figcaption className="editorial figure-caption">{producto.editorial}</figcaption>
          <figcaption className="titulo figure-caption">{producto.nombre}</figcaption>
          <figcaption className="precio figure-caption">${producto.precio}</figcaption>
          <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};




export default Fetch2