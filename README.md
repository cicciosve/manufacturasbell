# Manufacturas Bell — propuesta local

Sitio estático adaptable a móvil. No requiere instalación de dependencias.

## Abrir en un servidor local
Desde esta carpeta, ejecuta:

    python -m http.server 8000 --directory dist

En Windows también puedes usar:

    py -m http.server 8000 --directory dist

Abre http://localhost:8000 en tu navegador. Para detenerlo: Ctrl+C.
También puedes abrir dist/index.html directamente.

## Contenido y edición
- dist/index.html: estructura y textos.
- dist/styles.css: diseño, colores y adaptación móvil.
- dist/app.js: siete variantes, filtros, buscador, detalles y sedes.
- dist/assets: imágenes de referencia originales. Se muestran solo las regiones de producto mediante CSS. Los archivos fuente de flyers conservan el contenido original; los precios no se muestran en la página.

No se ha modificado ni publicado la web existente.

## Datos y puntos a confirmar
- Teléfono visible en los flyers: 0414-5013278. Se utiliza el enlace equivalente +58 414 5013278; la web antigua tenía un enlace de WhatsApp diferente del número mostrado.
- Barquisimeto: Av. Lara, Centro Financiero Las Vegas, piso 3, oficina 3-4.
- Acarigua: Av. Páez, Plaza Real, local N.º 11, planta baja.
Estas dos direcciones proceden de https://manufacturasbel.com/contacto/ y requieren confirmación de vigencia.
- Tucacas y Puerto Ordaz: sedes incluidas según indicación del usuario. No se recibió dirección exacta ni teléfono específico; se muestran como pendientes y se ofrece atención general, no un contacto inventado.
- Mapa: referencia aportada por el usuario; puntos aproximados de ciudad, no coordenadas de los locales. La imagen original es de baja resolución.
- Descripciones basadas en los acabados visibles y nombres de los flyers. No se inventaron materiales, firmeza, garantías ni especificaciones técnicas. Medidas basadas en los flyers; disponibilidad a consultar.
- Fotografías presentadas mediante recortes visuales de referencias para conservar el producto real. Para producción conviene sustituirlas por fotografías originales de catálogo en alta resolución.

## Mejora frente a la página actual
Portada centrada en la colección, catálogo sin precios, búsqueda y filtros por medida, ficha de cada modelo, consultas por WhatsApp con modelo preseleccionado, mapa interactivo con cuatro ciudades y navegación adaptable a móvil.

## Actualización 2
- Catálogo: se reemplazó el recorte con imágenes desplazadas y carga diferida por ventanas SVG de carga inmediata, para mostrar las siete variantes.
- Mapa vectorial a partir de datos geográficos de Natural Earth distribuidos por datasets/geo-countries (dominio público); escala sin pixelarse. Puntos de ciudad aproximados.
- Habitación generada para la portada a partir del Plata Flash proporcionado. Ambientación ilustrativa; el catálogo conserva las fotografías originales.
- Logo original sin filtros ni recoloración, presentado sobre azul oscuro para conservar su legibilidad.
- Encabezado fijo con vidrio, entradas suaves al desplazarse y barra de progreso. Respeta la preferencia de movimiento reducido.
- Botón flotante de WhatsApp sin número ni enlace de envío; abre un aviso de próxima disponibilidad. Los contactos ya existentes de las sedes se mantienen.
- Comprobación de sintaxis JavaScript y rutas de archivos completada. Revisión visual en navegador pendiente por restricción del entorno.

## Actualización 3
- Tipografía de lectura de 17–18 px, etiquetas y controles mayores y textos simplificados.
- Texto azul oscuro explícito en todos los botones amarillos.
- Dos productos por fila en escritorio y uno en móvil. Seis imágenes ahora usan los flyers individuales de 1086×1448; Diamante Doble Pillow conserva la única imagen disponible de catálogo, de menor resolución.
- Mapa claro con retícula, órbitas y tarjetas inspirado en la nueva referencia; conserva el contorno geográfico y las sedes. No incluye divisiones estatales.
- Franja animada con pausa manual, pausa al pasar el cursor y alternativa estática para movimiento reducido.

## Actualización 4 — catálogo solicitado
- Tres columnas en escritorio, dos en tablet y una en móvil, siguiendo la segunda referencia.
- Seis imágenes aisladas sobre fondos claros: Esmeralda, Oro, Zafiro Delux, Plata Boom, Plata Flash y Diamante.
- Imágenes preparadas con la herramienta de edición de imágenes a partir de las seis referencias aportadas: fondo transparente, retirada de fábrica, soporte, personas y gráficos promocionales, conservando la apariencia del producto. Al ser una edición asistida, los detalles finos de las etiquetas pueden variar respecto a las fotografías originales.
- Diamante agrupa las variantes 1 pillow y doble pillow; la fotografía representa la línea y no certifica ambas variantes.
- Continúan los textos legibles, ausencia de precios, filtros, fichas, mapa y animaciones.
- Revisión de imágenes y sintaxis realizada. La revisión visual de la página en navegador continúa pendiente por la restricción documentada del entorno.

## Servidor para PC y celular
Consulta COMO-ABRIR.txt. Ejecuta ABRIR-EN-WINDOWS.bat o node servidor-local.cjs. El servidor escucha en la red local, puerto 8000. Sintaxis verificada; la prueba HTTP en el entorno remoto falló con conexión rechazada/restablecida y requiere comprobación en la PC del usuario.


Actualización: cabecera compacta con menú móvil accesible, catálogo móvil de dos columnas, mapa sin tarjetas superpuestas, trayectoria de 19 años proporcionada por el cliente. Portada Combo Boxi recreada mediante edición generativa integrada a habitación; pequeños detalles y etiquetas pueden variar respecto de la captura. Sin precios.
Prompt de imagen (herramienta integrada): integrar cama Boxi gris con cabecera vertical, base segmentada, colchón Plata Boom oscuro y dos almohadas claras en habitación cálida; conservar proporciones, retirar promociones/precios y no añadir ropa de cama.
Validación: sintaxis JS y referencias locales. No se ha completado revisión visual en navegador por la restricción de acceso al servidor local del entorno.

Corrección de portada: Plata Boom según nueva referencia adjunta. Edición integrada: sustituir únicamente colchón, conservar top claro, costuras onduladas, laterales grises con grupos de cuadrados y etiquetas frontales; conservar cama, almohadas y habitación. Archivo: dist/assets/habitacion-combo-boxi-v2.png. Las etiquetas pequeñas son una reconstrucción generativa.

Actualización de funciones: modo claro/oscuro persistente y ajuste de luminosidad de portada; carrito local sin precios con medidas, cantidades y selección de Jessica (Barquisimeto) o Manuel (Tucacas). Contactos individuales pendientes: el resumen se puede copiar, no se envía ningún pedido. Sección de camas preparada, pendiente de fotos originales del cliente. Video original incluido sin alterar, con descripción de fabricación y controles. Servidor actualizado con MIME MP4 y solicitudes Range para reproducción. Mapa vectorial de estados con zoom por sede y botón de restablecer. Datos adaptados y simplificados de geoBoundaries gbOpen VEN ADM1, CC BY 4.0: https://github.com/wmgeolab/geoBoundaries/tree/main/releaseData/gbOpen/VEN/ADM1 . Los límites son orientativos y los marcadores representan ciudades, no coordenadas de tiendas.
Validación de interacciones mediante DOM simulado: agregar/repetir/reducir/quitar productos, resumen de asesor, tema persistente, zoom y restablecer. Pruebas del manejador HTTP para MIME MP4, intervalos y errores. La revisión visual y reproducción real en navegador quedan pendientes por la restricción de acceso local del entorno.

Nueva versión: 8 camas y 3 combos agregados al carrito. Abett, Luna, Arepa, Perla y combos usan los JPEG originales con encuadre CSS que oculta precios. Tuka: extracción y limpieza de gráficos. Boxi, Galaxi y Box: retiro generativo del colchón, preservando diseño visible; áreas ocultas de soporte reconstruidas, sujetas a confirmación. Portada nocturna editada con exterior de noche e iluminación de lámparas; versión diurna conservada. Prompts: retirar colchón y gráficos preservando cama; cambiar únicamente iluminación de portada a noche. Herramienta integrada de edición de imágenes. Video sin marco, radio ni sombra. Pruebas DOM de camas, combos y carrito mixto aprobadas; sin revisión visual completa en navegador.

Corrección móvil: subgrid alinea las seis filas de cada tarjeta. Siete imágenes ahora usan recortes PNG transparentes generados desde referencias; etiquetas pequeñas pueden variar. WhatsApp Jessica 584145013278 y Manuel 584246597096, botón Termina tu pedido con resumen. Contador amarillo y servicio de apartado. Validación sintáctica; revisión visual en navegador pendiente.
