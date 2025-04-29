
API REST para crear, actualizar y eliminar personajes en una base de datos.
  
  ENDPOINTS:
   1.Listar todos los personajes (/api/friends)
      Método: GET
      Descripción: Obtiene todos los registros de la tabla characters.
      
  2. Crear nuevo personaje (/api/newCharacter)
      Método: POST
      Descripción: Crea un nuevo personaje en la base de datos.

     {
        "name": "Nombre del personaje",
        "age": 30
     } 

   3. Actualizar personaje (/api/character/:id)
      Método: PUT
      Descripción: Actualiza los datos de un personaje existente mediante su id.
      {
        "name": "Nuevo nombre",
        "age": 35
      }

 4. Eliminar personaje (/api/character/:id)
      Método: DELETE
      Descripción: Elimina un personaje de la base de datos por su id.

TECNOLOGÍAS:
Node.js
Express
Cors
MySQL



