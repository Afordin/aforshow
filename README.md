# AforShow Landing Page

¡Bienvenido al proyecto AforShow! Este repositorio contiene el código fuente de la landing page del AforShow, un emocionante evento de programación organizado por la comunidad de Afor Digital.

El AforShow es un evento especial en el que miembros de la comunidad pueden postularse para dar charlas o talleres en el canal de Twitch de Afor Digital. Es una oportunidad única para compartir conocimientos, aprender de otros programadores talentosos y fortalecer nuestra comunidad.

## Características

- **Postulaciones**: Los participantes pueden enviar sus propuestas para charlas o talleres y compartir sus ideas con la comunidad.
- **Programación de eventos**: Una vez que se han seleccionado las propuestas, la landing page muestra la programación completa del AforShow, incluyendo los horarios y temas de las charlas o talleres.
- **Información del evento**: Los usuarios pueden encontrar detalles relevantes sobre el AforShow, como la fecha, hora y lugar de transmisión en Twitch.
- **Enlaces a Twitch**: La landing page proporciona enlaces directos al canal de Twitch de Afor Digital, para que los espectadores puedan acceder fácilmente a las transmisiones en vivo.
Aquí tienes un ejemplo de un código Markdown para proporcionar una guía de "Getting Started" para ejecutar una aplicación de Astro desde un repositorio de GitHub:

## Getting started

Esta guía te ayudará a comenzar a ejecutar una aplicación de Astro desde un repositorio de GitHub en tu entorno local.

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- Node.js: [Descargar e instalar Node.js](https://nodejs.org)
- Git: [Descargar e instalar Git](https://git-scm.com/downloads)

## Pasos a seguir

1. Clona el repositorio de GitHub en tu máquina local utilizando el siguiente comando en la terminal:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

   Reemplaza `<URL_DEL_REPOSITORIO>` con la URL del repositorio de GitHub que contiene la aplicación de Astro.

2. Accede al directorio del repositorio clonado:

   ```bash
   cd <DIRECTORIO_DEL_REPOSITORIO>
   ```

   Reemplaza `<DIRECTORIO_DEL_REPOSITORIO>` con el nombre del directorio del repositorio clonado en tu máquina.

3. Instala las dependencias del proyecto ejecutando el siguiente comando:

   ```bash
   npm install
   ```

4. Inicia la aplicación de Astro ejecutando el siguiente comando:

   ```bash
   cp .example.env .env 
   ```

   Copie el example.env en .env y rellene las variables de entorno

5. Inicia la aplicación de Astro ejecutando el siguiente comando:

   ```bash
   npm run dev
   ```

   Esto iniciará la aplicación y podrás acceder a ella desde tu navegador en la dirección [http://localhost:3000](http://localhost:3000).

¡Felicitaciones! Ahora estás ejecutando la web de AforShow de Astro desde el repositorio de GitHub en tu entorno local.

## Personalización y ajustes adicionales

Si deseas personalizar o realizar ajustes adicionales en la aplicación de Astro, puedes explorar y editar los archivos del repositorio clonado. Asegúrate de consultar la documentación proporcionada en el repositorio para obtener más detalles sobre cómo realizar modificaciones específicas.

## Recursos adicionales

- [Documentación oficial de Astro](https://astro.build/)
- [Repositorio de GitHub](<URL_DEL_REPOSITORIO>)

Asegúrate de reemplazar `<URL_DEL_REPOSITORIO>` con la URL real del repositorio de GitHub que contiene la aplicación de Astro. También, puedes agregar enlaces y recursos adicionales relevantes en la sección de "Recursos adicionales".

Recuerda que este es solo un ejemplo y debes adaptarlo según tus necesidades y la estructura de tu aplicación de Astro.

## Contribución

¡Agradecemos tus contribuciones a este proyecto! Si deseas colaborar, por favor sigue los pasos a continuación:

1. Haz un fork de este repositorio y clónalo en tu máquina local.
2. Crea una rama nueva para tu contribución.
3. Realiza los cambios y mejoras deseadas en el código.
4. Asegúrate de que las pruebas pasen correctamente.
5. Envía un pull request para que podamos revisar tus cambios.

## Contacto

Si tienes alguna pregunta, sugerencia o simplemente quieres ponerte en contacto con nosotros, puedes hacerlo a través de los siguientes canales:

- **Discord**: Únete al canal de AforShow en [Discord](https://discord.gg/ETwN8E7E) y podrás escribir tus consultas en el canal correspondiente.
- **Twitch**: Durante las transmisiones en vivo en el canal de Twitch de Afor Digital ([afor_digital](https://www.twitch.tv/afor_digital)), podrás interactuar directamente y enviar tus mensajes en el chat en vivo.

¡Esperamos verte en el AforShow y disfrutar de un evento increíble juntos!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── components/
│       └── Header.astro  
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
