const express = require('express');
const app = express();

app.use(express.json());

app.post('/registro', (req, res) => {

  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos",
    nombre: nombre,
    mensaje: mensaje
  });

});

app.post('/incidencia', (req, res) => {

  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });

});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});


prueba-api.txt
Al enviar una petición POST a la ruta /registro con un objeto JSON que contiene
los campos nombre y mensaje, el servidor responde con un objeto JSON confirmando
que los datos fueron recibidos correctamente.

La respuesta incluye el estado "Datos recibidos" junto con el nombre y el mensaje
enviados por el usuario, lo que demuestra que Express puede leer correctamente
los datos desde req.body usando express.json().
