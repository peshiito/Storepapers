// helpers/traerProductos.js
export const traerProductos = async () => {
  try {
    console.log("🔄 Cargando productos...");

    const productosData = {
      Data: [
        // 🅐
        {
          id: "A1",
          nombre: "Papel fotográfico 200 grs 20 hojas",
          precio_unitario: 3000,
          imagen: "20_hojas_papel_fotografico.jpg",
        },
        {
          id: "A2",
          nombre: "Papel fotográfico 200 grs 100 hojas",
          precio_unitario: 12500,
          imagen: "100_hojas_papel_fotografico.jpg",
        },
        {
          id: "A3",
          nombre: "100 Hojas papel fotografico brillante de 160gr",
          precio_unitario: 10500,
          imagen: "100_Hojas_papel_fotografico_brillante_160gr.webp",
        },
        {
          id: "A4",
          nombre: "100 Hojas Papel Fotografico Brillante 180grs",
          precio_unitario: 11500,
          imagen: "Papel_fotografico_Brillante_100hojas.webp",
        },

        {
          id: "A5",
          nombre: "100 Hojas Papel Fotografico 120grs",
          precio_unitario: 9600,
          imagen: "Papel_fotografico_120gr_100hojas.webp",
        },

        {
          id: "A6",
          nombre: "100 Hojas Papel Fotografico Bifaz 120grs",
          precio_unitario: 13600,
          imagen: "Papel_fotografico_Bifaz_100hojas.webp",
        },

        {
          id: "A7",
          nombre: "100 Hojas Papel Fotografico 230grs",
          precio_unitario: 13600,
          imagen: "Papel_fotografico_230grs_100hojas.webp",
        },

        // 🅑
        {
          id: "B1",
          nombre: "Papel adhesivo 115 grs 100 hojas",
          precio_unitario: 19620,
          imagen: "100_hojas_papel_adhesivo.jpg",
        },
        {
          id: "B2",
          nombre: "Papel adhesivo 115 grs 20 hojas",
          precio_unitario: 6080,
          imagen: "20_hojas_papel_adhesivo.webp",
        },

        // 🅒
        {
          id: "C1",
          nombre: "100 hojas de Matelina adhesiva 108gr",
          precio_unitario: 18900,
          imagen: "100_hojas_matelina_adhesiva_108gr.webp",
        },
        {
          id: "C2",
          nombre: "Matelina bi faz 260gr 50 hojas",
          precio_unitario: 10900,
          imagen: "Matelina_bi_faz_260gr_50_hojas.webp",
        },

        // 🅓
        {
          id: "D1",
          nombre: "Holofan noche estrellada",
          precio_unitario: 11800,
          imagen: "Holofan_noche_estrellada.webp",
        },
        {
          id: "D2",
          nombre: "Holofan efecto lluvia de diamantes",
          precio_unitario: 11800,
          imagen: "holofan_efecto_lluvia_de_diamantes_20hojas.jpg",
        },
        {
          id: "D3",
          nombre: "Holofan efecto rafaga de amor",
          precio_unitario: 11800,
          imagen: "Holofan_efecto_rafaga_amor.webp",
        },
        {
          id: "D4",
          nombre: "Holofan efecto mundo tornasol",
          precio_unitario: 11800,
          imagen: "holofan_efecto_tornasol_20hojas.jpg",
        },

        // 🅔
        {
          id: "E1",
          nombre: "Filmilo adhesivo blanco reluciente a4",
          precio_unitario: 10200,
          imagen: "Filmilo_adhesivo_blanco_reluciente_a4.webp",
        },
        {
          id: "E2",
          nombre: "Filmilo adhesivo oro antiguo a4",
          precio_unitario: 10900,
          imagen: "Filmilo_adhesivo_oro_antiguo_a4.webp",
        },

        // 🅕
        {
          id: "F1",
          nombre: "Canvas 50 hojas tejido de lana 230gr",
          precio_unitario: 11800,
          imagen: "Canvas_50_hojas tejido_lana_230gr.webp",
        },

        // 🅖
        {
          id: "G1",
          nombre: "Tatufan",
          precio_unitario: 25900,
          imagen: "tatufan.webp",
        },

        // 🅗
        {
          id: "H1",
          nombre: "Papel winky blanco a4",
          precio_unitario: 14900,
          imagen: "Papel_winky_blanco_a4.webp",
        },

        // 🅘
        {
          id: "I1",
          nombre: "Magnetico Brillante",
          precio_unitario: 18900,
          imagen: "papelMagnetico.webp",
        },

        // J
        {
          id: "J1",
          nombre: "100 Hojas Tricapa Para Sublimar de 100gr",
          precio_unitario: 11400,
          imagen: "Sublimar_Tricapa_100hojas.webp",
        },

        //K
        {
          id: "K1",
          nombre: "Natucraft Mokka",
          precio_unitario: 7100,
          imagen: "Natucraft_Mokka.webp",
        },
      ],
    };

    console.log("📦 Productos cargados:", productosData.Data);

    await new Promise((resolve) => setTimeout(resolve, 500));

    return productosData;
  } catch (error) {
    console.error("❌ Error en traerProductos:", error);
    throw error;
  }
};
