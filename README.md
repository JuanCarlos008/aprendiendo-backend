# Nombre del proyecto

Descripción del proyecto.

## Requisitos

* Node.js
* npm

## Instalación

1. Clona este repositorio: `git clone https://github.com/tu-usuario/tu-proyecto.git`
2. Instala las dependencias: `npm install`
3. Crea el archivo `.env` con las variables de entorno necesarias (ver `.env.example` para referencia)
4. Ejecuta las migraciones: `npm run db:migrate`
5. Ejecuta las semillas: `npm run db:seed`
6. Inicia el servidor: `npm start`

## Configuración

La configuración de la aplicación se encuentra en el archivo `config.js`, donde se definen las variables de entorno para la conexión a la base de datos y la configuración de JWT.

## Uso

### Autenticación

Para autenticarse en la aplicación, se deben enviar las credenciales de inicio de sesión a la ruta `/auth/login`. Si las credenciales son válidas, se devolverá un token de sesión y un token de acceso. El token de sesión debe ser almacenado en una cookie, mientras que el token de acceso debe ser utilizado en las solicitudes a las rutas protegidas.

### Rutas protegidas

Las rutas protegidas requieren que se envíe un token de acceso válido en la cabecera `Authorization` de la solicitud. Si el token es válido y pertenece a un usuario con el rol adecuado, se devolverá la respuesta correspondiente. De lo contrario, se devolverá un error de autenticación.

#### Rutas para administradores

* GET `/users`: Devuelve una lista de todos los usuarios registrados en la aplicación.
* POST `/users`: Crea un nuevo usuario en la aplicación.
* GET `/users/:id`: Devuelve los detalles de un usuario específico.
* PUT `/users/:id`: Actualiza los detalles de un usuario específico.
* DELETE `/users/:id`: Elimina un usuario específico.

#### Rutas para empleadores

* GET `/jobs`: Devuelve una lista de todos los trabajos publicados por el empleador actual.
* POST `/jobs`: Publica un nuevo trabajo en la aplicación.
* GET `/jobs/:id`: Devuelve los detalles de un trabajo específico publicado por el empleador actual.
* PUT `/jobs/:id`: Actualiza los detalles de un trabajo específico publicado por el empleador actual.
* DELETE `/jobs/:id`: Elimina un trabajo específico publicado por el empleador actual.

#### Rutas para profesionales

* GET `/jobs`: Devuelve una lista de todos los trabajos publicados en la aplicación.
* POST `/jobs/:id/apply`: Aplica para un trabajo específico.
* GET `/jobs/:id`: Devuelve los detalles de un trabajo específico publicado en la aplicación.

## Contribución

Si deseas contribuir a este proyecto, sigue los siguientes pasos:

1. Haz un fork de este repositorio
2. Crea una rama para tu contribución: `git checkout -b mi-contribucion`
3. Haz tus cambios y realiza un commit: `git commit -am 'Agregué mi contribución'`
4. Haz un push a la rama: `git push origin mi-contribucion`
5. Crea un pull request para tu contribución

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Ver el archivo `LICENSE
