import React, { useEffect, useState } from 'react';

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
    <div id="productos-container">
      {productos.map((producto) => (
        <div key={producto.id} className="tarjeta-producto">
          <img src={producto.image} alt={producto.nombre} />
          <figcaption>{producto.editorial}</figcaption>
          <figcaption>{producto.nombre}</figcaption>
          <figcaption>${producto.precio}</figcaption>
          <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default Fetch2