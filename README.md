# Media collection

Website that uses public a API to show movies with some filtering capabilities. 

Movie API: [TMDB](https://www.themoviedb.org/?language=pt-BR)

Currently hosted on Vercel: https://media-collection.vercel.app/

<hr>

Website features:

- Filter movies by top rated
<img src="https://github.com/leobez/media-collection/blob/main/screenshots/toprated.png" height='500px'/>


- Filter movies by most popular
<img src="https://github.com/leobez/media-collection/blob/main/screenshots/popular.png" height='500px'/>


- Filter movies by upcoming
<img src="https://github.com/leobez/media-collection/blob/main/screenshots/upcoming.png" height='500px'/>


- Filter movies by genres
<img src="https://github.com/leobez/media-collection/blob/main/screenshots/bygenre.png" height='500px'/>


- Sort movies by various metrics
<img src="https://github.com/leobez/media-collection/blob/main/screenshots/bygenre-sort.png" height='500px'/>


- Get a random movie based on selected genres
<img src="https://github.com/leobez/media-collection/blob/main/screenshots/random.png" height='500px'/>


- Search by a movie using queries
<img src="https://github.com/leobez/media-collection/blob/main/screenshots/byquery.png" height='500px'/>


- Responsive UI
<img src="https://github.com/leobez/media-collection/blob/main/screenshots/responsiv.png" height='500px'/>

<hr>

To use the features it is necessary to have an Api Key from TMDB.

To get one, access https://developer.themoviedb.org/v4/reference/intro/getting-started, create an account and generate a Key.

Once generated, you can put it on the /api page of the application and click "Save it" to save it on the browsers Local Storage. 

<img src="https://github.com/leobez/media-collection/blob/main/screenshots/api.png" height='500px'/>

Once done, the app will be usable and every requisition will use this key. 

<hr>

Tech Stack used: 
- React.js
- Tailwind CSS
    - Tailwind animated
    - Tailwind scrollbars
- DaisyUI
- Context API
