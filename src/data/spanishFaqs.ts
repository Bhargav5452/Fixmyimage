/**
 * FixMyImage Curated Spanish FAQ Dataset
 * ─────────────────────────────────────────────────────────────────
 * High-quality, natural Spanish FAQs optimized for search intent in Spain
 * and Spanish-speaking audiences.
 */

export interface FaqItem {
  q: string;
  a: string;
}

export const SPANISH_FAQS: Record<string, FaqItem[]> = {
  '/comprimir-imagen': [
    {
      q: "¿Cómo comprimir fotos e imágenes online sin perder calidad?",
      a: "Para comprimir fotos sin perder nitidez perceptible, sube tus archivos JPG, PNG o WebP a FixMyImage y elige un tamaño objetivo o deja que el optimizador inteligente reduzca los datos redundantes. El procesamiento se ejecuta directamente en tu navegador, manteniendo una fidelidad visual nítida y reduciendo drásticamente el peso del archivo."
    },
    {
      q: "¿Es seguro comprimir imágenes en FixMyImage?",
      a: "Sí, es completamente seguro y privado. A diferencia de otros conversores online que suben tus fotos a servidores externos, FixMyImage procesa cada imagen de forma local en tu navegador. Tus fotos personales nunca salen de tu ordenador o teléfono."
    },
    {
      q: "¿Qué formatos de imagen puedo comprimir?",
      a: "Puedes comprimir imágenes en los formatos más comunes de la web: JPG (JPEG), PNG y WebP. También puedes procesar fotos en masa de forma simultánea."
    },
    {
      q: "¿Es gratis comprimir imágenes aquí o hay límites ocultos?",
      a: "FixMyImage es 100% gratuito, sin suscripciones, marcas de agua publicitarias, límites de uso diarios ni necesidad de crear una cuenta."
    },
    {
      q: "¿Cómo funciona la compresión por lotes?",
      a: "Simplemente arrastra o selecciona varias fotos a la vez. La herramienta optimizará cada una en paralelo y te permitirá descargarlas de forma individual o empaquetadas en un único archivo ZIP."
    }
  ],

  '/comprimir-imagen-a-50-kb': [
    {
      q: "¿Cómo comprimir una imagen a 50 KB o menos?",
      a: "Selecciona o suelta tu foto en el recuadro superior. La herramienta viene preconfigurada con el objetivo de 50 KB y ajustará automáticamente los algoritmos de compresión para situar el archivo por debajo o cerca de dicho límite con la mejor calidad visual posible."
    },
    {
      q: "¿Por qué muchas webs y trámites oficiales exigen imágenes de menos de 50 KB?",
      a: "Portales de oposiciones, sedes electrónicas gubernamentales, universidades y visados suelen exigir fotos de menos de 50 KB para no sobrecargar sus bases de datos y garantizar una carga instantánea de formularios."
    },
    {
      q: "¿Se deteriora mucho la imagen al comprimirla a 50 KB?",
      a: "Nuestro algoritmo de compresión gradual reduce primero los metadatos y frecuencias cromáticas menos sensibles al ojo humano, logrando un peso mínimo mientras la foto se mantiene perfectamente clara para documentos y carnés."
    },
    {
      q: "¿Puedo comprimir tanto JPG como PNG a 50 KB?",
      a: "Sí. Para fotos complejas, JPG o WebP ofrecen los mejores resultados para alcanzar los 50 KB. Si tu imagen es PNG con fondo transparente, también intentará ajustarse de forma óptima."
    }
  ],

  '/comprimir-imagen-a-100-kb': [
    {
      q: "¿Cómo reducir el tamaño de una foto a 100 KB exactos?",
      a: "Sube tu imagen a FixMyImage y nuestra herramienta aplicará la compresión adecuada para dejar tu imagen en un tamaño aproximado o inferior a 100 KB manteniendo un equilibrio óptimo entre calidad y ligereza."
    },
    {
      q: "¿Qué tipo de imágenes se adaptan mejor al límite de 100 KB?",
      a: "Prácticamente cualquier fotografía estándar de cámaras y smartphones (JPG o WebP) puede reducirse a 100 KB conservando una excelente definición para páginas web, blogs y envíos por correo electrónico."
    },
    {
      q: "¿Puedo comprimir varias imágenes a 100 KB al mismo tiempo?",
      a: "Sí, puedes cargar lotes completos de fotos. Cada archivo se comprimirá de forma independiente a la meta de 100 KB y podrás descargarlos todos en un archivo comprimido ZIP."
    }
  ],

  '/comprimir-imagen-a-1-mb': [
    {
      q: "¿Cómo comprimir fotos pesadas a menos de 1 MB?",
      a: "Arrastra tus fotos de alta resolución a FixMyImage. El compresor ajustará la tasa de datos para que cada archivo pese menos de 1 MB, ideal para plataformas que limitan subidas a 1 megabyte."
    },
    {
      q: "¿Se pierde resolución al bajar a 1 MB?",
      a: "Generalmente no. Para fotos de 5 MB a 15 MB tomadas con smartphones modernos, comprimir a 1 MB mantiene el 100% de las dimensiones en píxeles y una nitidez prácticamente indistinguible del original."
    },
    {
      q: "¿Es adecuado 1 MB para enviar fotos por correo o mensajería?",
      a: "Sí, 1 MB es el tamaño idóneo para evitar que tus correos electrónicos reboten o tarden demasiado en cargarse en conexiones móviles."
    }
  ],

  '/redimensionar-imagen': [
    {
      q: "¿Cómo redimensionar una imagen online sin perder calidad?",
      a: "Sube tu foto a FixMyImage, introduce el ancho y alto deseado en píxeles o porcentaje, y haz clic en redimensionar. El navegador remuestrea los píxeles utilizando algoritmos bicúbicos suaves para preservar la máxima nitidez."
    },
    {
      q: "¿Cómo mantener la proporción original (aspect ratio)?",
      a: "El candado de relación de aspecto está activado por defecto. Al cambiar el ancho, la altura se calcula automáticamente de forma proporcional para evitar que la imagen se deforme."
    },
    {
      q: "¿Puedo redimensionar imágenes por porcentaje?",
      a: "Sí, puedes cambiar a la pestaña de porcentaje y reducir tus fotos al 75%, 50% o 25% con un solo clic."
    },
    {
      q: "¿Se guardan mis imágenes en algún servidor?",
      a: "No. Al igual que todas nuestras utilidades, el cambio de tamaño se realiza 100% en tu propio equipo mediante la memoria del navegador."
    }
  ],

  '/redimensionar-imagen-en-pixeles': [
    {
      q: "¿Cómo cambiar las dimensiones exactas de una imagen en píxeles?",
      a: "Elige la herramienta de píxeles, especifica el ancho (width) y alto (height) requeridos, y pulsa en procesar. Tu foto se generará con las medidas exactas solicitadas."
    },
    {
      q: "¿Qué sucede si cambio el ancho sin mantener la proporción?",
      a: "Si desbloqueas el icono del candado, podrás establecer dimensiones arbitrarias de ancho y alto, aunque la imagen podría estirarse o comprimirse visualmente."
    },
    {
      q: "¿Cuál es el límite máximo de resolución permitido?",
      a: "Puedes redimensionar imágenes de hasta 10.000 píxeles sin problemas gracias a la aceleración por hardware de tu navegador."
    }
  ],

  '/redimensionar-imagen-en-cm': [
    {
      q: "¿Cómo redimensionar una foto a centímetros (cm) para imprimir?",
      a: "Introduce los centímetros deseados para el ancho y el alto. La herramienta calcula automáticamente los píxeles necesarios a una resolución estándar de 300 DPI recomendada para impresión de alta calidad."
    },
    {
      q: "¿Qué resolución se utiliza para la conversión de cm a píxeles?",
      a: "Utilizamos una densidad estándar de 300 DPI (puntos por pulgada), asegurando que el documento impreso mantenga una nitidez profesional en papel fotográfico o folios estándar."
    },
    {
      q: "¿Sirve para fotos de carné, DNI o pasaporte?",
      a: "Sí, puedes definir fácilmente tamaños habituales como 3 x 4 cm o 3.5 x 4.5 cm para cumplir los requisitos de identificación oficiales."
    }
  ],

  '/redimensionar-imagenes-por-lotes': [
    {
      q: "¿Cómo redimensionar muchas imágenes a la vez?",
      a: "Arrastra múltiples fotos simultáneamente al área de subida. Ajusta las dimensiones deseadas o la escala porcentual y todas las fotos se redimensionarán a la vez en paralelo."
    },
    {
      q: "¿Hay un límite de fotos por lote?",
      a: "Puedes procesar hasta 50 imágenes por lote de manera totalmente gratuita y descargarlas empaquetadas en un único archivo ZIP."
    },
    {
      q: "¿Afecta la velocidad de mi conexión al redimensionar en masa?",
      a: "No, porque FixMyImage no sube tus fotos a internet. Toda la velocidad depende únicamente de la potencia de tu propio ordenador o móvil."
    }
  ],

  '/convertir-imagen': [
    {
      q: "¿Qué formatos de imagen puedo convertir en FixMyImage?",
      a: "Puedes convertir fácilmente entre formatos JPG, PNG, WebP y AVIF con total libertad y sin marcas de agua."
    },
    {
      q: "¿Por qué debería convertir mis imágenes a WebP o AVIF?",
      a: "WebP y AVIF son formatos modernos de última generación que ofrecen una compresión superior a JPG y PNG, reduciendo el peso de las páginas web en hasta un 70% sin perder calidad visual."
    },
    {
      q: "¿Se conserva la transparencia al convertir entre formatos?",
      a: "PNG y WebP admiten canales alfa de transparencia completa. Si conviertes de PNG a JPG, las zonas transparentes se rellenarán automáticamente con fondo blanco, ya que JPG no soporta transparencias."
    }
  ],

  '/convertir-jpg-a-png': [
    {
      q: "¿Por qué convertir un archivo JPG a formato PNG?",
      a: "El formato PNG utiliza compresión sin pérdidas (lossless), lo que lo hace perfecto para gráficos con texto nítido, capturas de pantalla, diagramas y ediciones posteriores donde no se desea perder fidelidad visual."
    },
    {
      q: "¿Añade transparencia una conversión de JPG a PNG?",
      a: "No. Como los archivos JPG originales no contienen datos de transparencia, el PNG resultante tendrá un fondo opaco a menos que lo edites posteriormente."
    },
    {
      q: "¿Aumentará el peso del archivo al pasar de JPG a PNG?",
      a: "Sí, es habitual que el archivo PNG resultante sea algo más pesado debido al algoritmo sin pérdida característico del formato PNG."
    }
  ],

  '/convertir-png-a-jpg': [
    {
      q: "¿Por qué convertir fotos PNG a JPG?",
      a: "Los archivos PNG de fotografías suelen ser excesivamente pesados. Al pasarlos a JPG, el peso se reduce drásticamente (a menudo entre un 60% y un 80%), facilitando su envío y publicación online."
    },
    {
      q: "¿Qué ocurre con las partes transparentes de mi PNG al convertirlo a JPG?",
      a: "Debido a que JPG no admite transparencia, las áreas transparentes se convierten automáticamente en un fondo blanco limpio."
    },
    {
      q: "¿Puedo convertir múltiples archivos PNG a la vez?",
      a: "Sí, puedes arrastrar una colección completa de archivos PNG y convertirlos a JPG en cuestión de segundos."
    }
  ],

  '/convertir-webp-a-png': [
    {
      q: "¿Por qué convertir imágenes WebP a PNG?",
      a: "Aunque WebP es muy eficiente en internet, algunos editores de fotos antiguos, procesadores de texto y aplicaciones de escritorio no admiten WebP de forma nativa. Convertir a PNG garantiza 100% de compatibilidad universal."
    },
    {
      q: "¿Se mantiene la transparencia al convertir WebP a PNG?",
      a: "Sí. Si tu archivo WebP tiene fondo transparente, el PNG generado conservará exactamente el mismo canal de transparencia."
    }
  ],

  '/convertir-webp-a-jpg': [
    {
      q: "¿Cómo abrir o usar imágenes WebP en dispositivos no compatibles?",
      a: "Convierte tus fotos WebP a JPG en FixMyImage. El formato JPG es compatible con cualquier sistema operativo, teléfono, visor de fotos o televisor inteligente."
    },
    {
      q: "¿Se pierde calidad visual al pasar de WebP a JPG?",
      a: "FixMyImage utiliza una tasa de calidad alta para asegurar que la imagen JPG resultante sea visualmente idéntica al archivo WebP original."
    }
  ],

  '/convertir-avif-a-jpg': [
    {
      q: "¿Qué es el formato AVIF y por qué convertirlo a JPG?",
      a: "AVIF es el códec de imagen más avanzado y eficiente en la actualidad, pero muchos programas de diseño y sistemas operativos antiguos aún no lo abren. Pasarlo a JPG te permite usar la imagen en cualquier aplicación."
    },
    {
      q: "¿Es rápida la conversión de AVIF a JPG en el navegador?",
      a: "Sí, gracias a la decodificación nativa de los navegadores modernos, la conversión se completa en milisegundos."
    }
  ],

  '/convertir-avif-a-png': [
    {
      q: "¿Por qué convertir AVIF a PNG?",
      a: "Para conservar detalles nítidos, bordes limpios y fondos transparentes en un formato ampliamente admitido por software de edición gráfica como Photoshop o Illustrator."
    },
    {
      q: "¿Se conserva la transparencia al pasar de AVIF a PNG?",
      a: "Sí, todos los canales alfa transparentes se transfieren fielmente al nuevo archivo PNG."
    }
  ],

  '/marca-de-agua': [
    {
      q: "¿Cómo poner una marca de agua a mis fotos online gratis?",
      a: "Sube tus imágenes a FixMyImage, escribe el texto que desees o sube tu logotipo en PNG, ajusta la posición, opacidad y rotación, y pulsa en aplicar. Podrás descargar tus fotos protegidas al instante."
    },
    {
      q: "¿Es seguro poner marcas de agua a documentos sensibles o fotografías?",
      a: "Totalmente seguro. Como tus imágenes nunca se envían a servidores de internet, tus fotos originales y firmadas permanecen exclusivamente en tu dispositivo."
    },
    {
      q: "¿Puedo aplicar la misma marca de agua a decenas de fotos por lotes?",
      a: "Sí. Arrastra hasta 50 imágenes a la vez y la misma marca de agua con tus ajustes de tamaño y transparencia se aplicará a todas simultáneamente."
    },
    {
      q: "¿Permite FixMyImage eliminar o quitar marcas de agua?",
      a: "No. FixMyImage es una herramienta diseñada para añadir marcas de agua y proteger los derechos de autor de tus creaciones, no para eliminar marcas de agua de terceros."
    }
  ],

  '/es': [
    {
      q: "¿Es FixMyImage completamente gratis?",
      a: "Sí. Todas las herramientas de FixMyImage son 100% gratuitas, sin cargos ocultos, suscripciones de pago, límites de uso ni necesidad de registrarse."
    },
    {
      q: "¿Se suben mis fotos a algún servidor en internet?",
      a: "No. Todo el procesamiento de imágenes se ejecuta estrictamente en tu navegador web de forma local, garantizando que tus fotos y documentos permanezcan completamente privados."
    },
    {
      q: "¿Puedo procesar varias imágenes al mismo tiempo?",
      a: "Sí. FixMyImage admite el procesamiento por lotes en todas sus herramientas, permitiéndote comprimir, redimensionar, convertir o marcar decenas de fotos en una sola sesión."
    },
    {
      q: "¿Añade FixMyImage marcas de agua a los archivos descargados?",
      a: "No. Tus fotos descargadas se mantienen completamente limpias y originales, a menos que utilices voluntariamente nuestra herramienta de marcas de agua para aplicar tu propio logotipo."
    }
  ]
};

export function getSpanishFaqsForRoute(route: string): FaqItem[] {
  const normalized = route.replace('/es/', '/').replace(/\/$/, '') || route;
  return SPANISH_FAQS[route] ?? SPANISH_FAQS[normalized] ?? [];
}
