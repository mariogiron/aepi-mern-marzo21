[x] Generar el esquema Usuario 
    - username
    - email
    - password

[] Registrar **usuarios**
    - URL para el registro de usuarios (/api/usuarios/registro)
    - (Comprobar si el mail ya existe en la BD)
    - Encriptar la password
    - Guardar el usuario en la BD
    - Responder con success o error

[] Login usuarios (email/password)
    - URL para el login de usuarios (/api/usuarios/login)
    - Comprobar si el email existe en nuestra BD
    - Comprobar si la password coincide
    - Si el login es correcto -> generar el token para que el usuario pueda realizar acciones en nuestro API
