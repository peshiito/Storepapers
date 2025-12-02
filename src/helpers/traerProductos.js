// helpers/traerProductos.js
export const traerProductos = async () => {
  try {
    console.log("🔄 Cargando productos...");

    // Datos hardcodeados para prueba
    const productosData = {
      Data: [
        {
          nombre: "Papel fotográfico 200 grs 100 hojas",
          cantidad: 2,
          precio_unitario: 11900,
          imagen: "100_hojas_papel_fotografico.jpg",
        },
        {
          nombre: "Papel fotográfico 200 grs 20 hojas",
          cantidad: 6,
          precio_unitario: 2980,
          imagen: "20_hojas_papel_fotografico.jpg",
        },
        {
          nombre: "Papel adhesivo 115 grs 100 hojas",
          cantidad: 2,
          precio_unitario: 19620,
          imagen: "100_hojas_papel_adhesivo.jpg",
        },
        {
          nombre: "Papel adhesivo 115 grs 20 hojas",
          cantidad: 3,
          precio_unitario: 6080,
          imagen: "20_hojas_papel_adhesivo.jpg",
        },
        {
          nombre: "Holofan efecto mundo tornasol",
          cantidad: 3,
          precio_unitario: 10800,
          imagen: "holofan_efecto_tornasol_20hojas.jpg",
        },
        {
          nombre: "Holofan efecto lluvia de diamantes",
          cantidad: 3,
          precio_unitario: 10800,
          imagen: "holofan_efecto_lluvia_de_diamantes_20hojas.jpg",
        },
        {
          nombre: "Tatufan",
          cantidad: 3,
          precio_unitario: 24900,
          imagen: "tatufan.jpg",
        },
        {
          nombre: "Magnetico Brillante",
          cantidad: 3,
          precio_unitario: 17900,
          imagen: "papelMagnetico.jpg",
        },
        {
          nombre: "Canvas 50 hojas tejido de lana 230gr",
          cantidad: 3,
          precio_unitario: 11900,
          imagen: "Canvas_50_hojas tejido_lana_230gr.webp",
        },
        {
          nombre: "100 hojas de Matelina adhesiva 108gr",
          cantidad: 3,
          precio_unitario: 18900,
          imagen: "Matelina_Adhesivo_108g.webp",
        },
        {
          nombre: "Matelina bi faz 260gr 50 hojas",
          cantidad: 3,
          precio_unitario: 10900,
          imagen: "Matelina_bi_faz_260gr_50_hojas.webp",
        },
        {
          nombre: "Filmilo adhesivo blanco reluciente a4",
          cantidad: 3,
          precio_unitario: 10200,
          imagen: "Filmilo_adhesivo_blanco_reluciente_a4.webp",
        },
        {
          nombre: "Filmilo adhesivo oro antiguo a4",
          cantidad: 3,
          precio_unitario: 10900,
          imagen: "Filmilo_adhesivo_oro_antiguo_a4.webp",
        },
        {
          nombre: "Papel winky blanco a4",
          cantidad: 3,
          precio_unitario: 14900,
          imagen: "Papel_winky_blanco_a4.webp",
        },
        {
          nombre: "Holofan noche estrellada",
          cantidad: 3,
          precio_unitario: 10800,
          imagen: "Holofan_noche_estrellada.webp",
        },
        {
          nombre: "Holofan efecto rafaga de amor",
          cantidad: 3,
          precio_unitario: 10800,
          imagen: "Holofan_efecto_rafaga_amor.png",
        },
        {
          nombre: "100 Hojas papel fotografico brillante de 160gr",
          cantidad: 3,
          precio_unitario: 14900,
          imagen: "100_Hojas_papel_fotografico_brillante_160gr.webp",
        },
        {
          nombre: "100 Hojas Tricapa Para Sublimar de 100gr",
          cantidad: 3,
          precio_unitario: 10400,
          imagen: "Sublimar_Tricapa_100hojas.webp",
        },

        {
          nombre: "100 Hojas Papel Fotografico Brillante 200grs",
          cantidad: 3,
          precio_unitario: 11500,
          imagen: "Papel_fotografico_Brillante_100hojas.webp",
        },
      ],
    };

    console.log("📦 Productos cargados:", productosData.Data);

    // Simulamos un delay de red
    await new Promise((resolve) => setTimeout(resolve, 500));

    return productosData;
  } catch (error) {
    console.error("❌ Error en traerProductos:", error);
    throw error;
  }
};
