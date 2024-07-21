# Media collection

Website that uses a public API to show movies with some filtering capabilities. 

Movie API: [TMDB](https://www.themoviedb.org/?language=pt-BR)

Currently hosted on Vercel: https://media-collection.vercel.app/

<hr>

## Features

### Discover top rated, popular and upcoming movies!
<p align="center">
  <img src="https://github.com/leobez/media-collection/blob/main/screenshots/top_rated.png" alt="Top Rated" width="30%" style="border-radius: 10px; border: 2px solid white;"/>
    &nbsp;
  <img src="https://github.com/leobez/media-collection/blob/main/screenshots/popular.png" alt="Popular" width="30%" style="border-radius: 10px;"/>
    &nbsp;
  <img src="https://github.com/leobez/media-collection/blob/main/screenshots/upcoming.png" alt="Upcoming" width="30%" style="border-radius: 10px;"/>
</p>

### Filter movies by genre!
> gif

### Filter movies by query!
> gif

### Sort movies by various metrics!
> gif

### Don't know what to watch? Select some prefered genres and get a random movie!
> gif

### Quick and responsive selectable color scheme!
> gif

### Fully responsive UI!
> gif

<hr>

To use this application you need an Api Key from TMDB.

To get one, access https://developer.themoviedb.org/v4/reference/intro/getting-started, create an account and generate a Key.

Once generated, you can put it on the /api page of the application and click "Save it" to save it on the browsers Local Storage. 

> gif

Once done, the app will be usable and every requisition will use this key. 

<hr>

Tech Stack: 
- React.js
- TypeScript
- Vercel
- Tailwind CSS
    - Tailwind animated
    - Tailwind scrollbars
- DaisyUI
- Context API
- TMDB
