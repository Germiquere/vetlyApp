## VetlyApp
Bienvenidos a Vetly App, una plataforma de comercio electrónico para la venta de productos para mascotas que también funciona como una clínica veterinaria, permitiendo gestionar diversos perfiles de usuarios, tales como invitados, clientes, profesionales y veterinarios.

Quisiera comenzar por expresar que tras realizar una investigación sobre los archivos proporcionados, he observado que en su mayoría se refieren a una base de datos, mientras que otros están relacionados con componentes de una aplicación en .NET o C#, si mi apreciación es correcta. En vista de ello, decidí no intervenir en dichos archivos y en lugar de ello, dirigir mis esfuerzos directamente hacia los requerimientos solicitados, dado mi rol como desarrollador front-end.

Ahora, habiendo aclarado este punto previo, deseo exponer cómo implementé los nuevos endpoints que se me suministraron tras la primera entrega, así como las mejoras incorporadas al proceso de inicio de sesión mediante la inclusión de Auth0 de manera embebida. Considero que la tarea de reestructurar el código no presentó mayores dificultades, gracias a la alta nivelación en la componentización previa que habia establecido en mi aplicacion. En el directorio API, bastó con agregar nuevas funciones y llamarlas únicamente en las secciones pertinentes del código. Por ejemplo, al implementar la función POST para registrar un usuario, mi labor consistió en crear dicha función y posteriormente invocarla al momento de llevar a cabo el registro en Auth0.

De forma similar, realicé la implementación de la funcionalidad POST para iniciar sesión como usuario, una vez establecida la autenticación mediante Auth0. Aun así, considero que incorporar Auth0 no fue una tarea sencilla, según mi experiencia. Aunque previamente había trabajado con autenticación embebida en API, como en el caso del inicio de sesión y registro en Firebase, me encontré en una situación peculiar debido a mi desconocimiento de que esta metodología es denominada autenticación embebida. Esta situación generó ciertos desafíos al implementar Auth0, ya que el video de guía proporcionado no abordaba la integración de manera embebida.

¿Cómo llegué, entonces, a la implementación del inicio de sesión de manera integrada? En la primera entrega, no logré concretar este aspecto en vista de que un solo día resultó insuficiente para realizar tanto la maquetación como la creación de las rutas, además de investigar sobre Auth0, tecnología con la cual carecía de experiencia previa. En la segunda oportunidad que se me brindó para consumir los nuevos endpoints de la API, disponía de más tiempo para ejecutar las tareas y, tras dedicar tiempo a la búsqueda de información sobre Auth0 embebido, di con un repositorio en GitHub que presentaba SDK capaz de cumplir con mis necesidades. Incluso se proporcionaba un enlace hacia la documentación oficial de Auth0.js, que incluía guías para llevar a cabo su implementación. Tras un considerable esfuerzo, con el apoyo google, chat GPT y videos de youtube presentados por nuestros queridos amigos de la comunidad de desarrolladores hindúes, logré implementar el registro, autenticación e inicio de sesión y cierre de sesión con auth0. Mi intención al compartir esta experiencia es destacar mi enfoque resiliente ante desafíos y tecnologías desconocidas, demostrando que ante dificultades y falta de experiencia, persisto y me esfuerzo por alcanzar mis objetivos.

En conclusión, deseo expresar mi gratitud por esta oportunidad de compartir mi experiencia en la elaboración de este código. Agradezco de antemano cualquier feedback, ya que considero que esta es una de las formas más valiosas de aprendizaje. Reconozco que mi código tiene margen de mejora y recibo con entusiasmo cualquier sugerencia para optimizarlo y para fortalecer mi desarrollo profesional como programador.

## Technologies

- Javascript
- React
- Tailwindcss
- Auth0
- React-Router
- Redux

## URL EN LA CUAL ESTA HOSTEADO AUTH0
Es necesario ejecutar la aplicacion con vite con esta direccion para que funcione la aplicacion, si no van a tener permisos para el registro y el login de los usuarios.
 http://127.0.0.1:5173

## VALIDACIONES
Las validaciones aun no estan implementadas a la hora de registrar un usuario o ingresar con un usuario que ya esta registrado.

## CREDENCIALES
Requisitos para que puedan crear una cuenta: 
- El EMAIL tenga formato de email(ejemplo@gmail.com)
- La CONTRASEÑA tiene que tener minimo 8 digitos(12345678)
