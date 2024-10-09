// Importar Express
const express = require('express');

// Inicializar la aplicación
const app = express();

// Definir una ruta básica que responde con "Hola Mundo"
app.get('/', (req, res) => {
    res.send('¡Hola Mundo!');
});

// Definir el puerto en el que correrá el servidor
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
