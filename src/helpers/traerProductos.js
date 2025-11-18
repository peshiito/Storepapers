// helpers/traerProductos.js
export const traerProductos = async () => {
  try {
    console.log("🔄 Cargando productos...");
    
    // Datos hardcodeados para prueba
    const productosData = {
      "Data": [
        {
          "nombre": "Papel fotográfico 200 grs 100 hojas",
          "cantidad": 2,
          "precio_unitario": 11900,
          "imagen": "100_hojas_papel_fotografico.jpg"
        },
        {
          "nombre": "Papel fotográfico 200 grs 20 hojas",
          "cantidad": 6,
          "precio_unitario": 2980,
          "imagen": "20_hojas_papel_fotografico.jpg"
        },
        {
          "nombre": "Papel adhesivo 115 grs 100 hojas",
          "cantidad": 2,
          "precio_unitario": 19620,
          "imagen": "100_hojas_papel_adhesivo.jpg"
        },
        {
          "nombre": "Papel adhesivo 115 grs 20 hojas",
          "cantidad": 3,
          "precio_unitario": 6080,
          "imagen": "20_hojas_papel_adhesivo.jpg"
        },
        {
          "nombre": "Holofan efecto mundo tornasol",
          "cantidad": 3,
          "precio_unitario": 10800,
          "imagen": "holofan_efecto_tornasol_20hojas.jpg"
        },
        {
          "nombre": "Holofan efecto lluvia de diamantes",
          "cantidad": 3,
          "precio_unitario": 10800,
          "imagen": "holofan_efecto_lluvia_de_diamantes_20hojas.jpg"
        }
      ]
    };

    console.log("📦 Productos cargados:", productosData.Data);
    
    // Simulamos un delay de red
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return productosData;
  } catch (error) {
    console.error("❌ Error en traerProductos:", error);
    throw error;
  }
};