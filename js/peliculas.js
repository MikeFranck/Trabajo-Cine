window.addEventListener('load', function(){
    //Capturando elementos
    let nuevosLanzamiento = document.querySelector('#nuevosLanzamientos');
    let peliculasPopulares = document.querySelector('#peliculasPopulares');
    let peliculasMejorCalificadas = document.querySelector('#peliculasMejorCalificadas');
    let proximosEstrenos = document.querySelector('#proximosEstrenos');
    //Nuevos Lanzamientos
    fetch('https://api.themoviedb.org/3/movie/latest?api_key=4bb2cde7041d18aaa0daf73019bbbaf9&language=en-US')
    .then(function(response){
        return response.json();
    })
    .then(function(peliculasNuevas){
        console.log(peliculasNuevas);
        for(let i = 0; i<peliculasNuevas; i++){
            nuevosLanzamiento.innerHTML += `<a href="detallesPeliculas.html?${peliculasNuevas.results[i].id}"><img class="imagenPopulares" src="https://image.tmdb.org/t/p/w500/${peliculasNuevas.results[i].backdrop_path}" alt="${peliculasNuevas.results[i].title}"><h2 class="titulosPelicula">${peliculasNuevas.results[i].title}</h2></a>`
        }
    })
    //Peliculas Populares
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=4bb2cde7041d18aaa0daf73019bbbaf9&language=en-US&page=1')
    .then(function(response){
        return response.json();
    })
    .then(function(populares){
        console.log(populares);
        for(let i = 0; i < populares.results.length; i++){
            peliculasPopulares.innerHTML += `<a href="detallesPeliculas.html?id=${populares.results[i].id}"><img class="imagenPopulares" src="https://image.tmdb.org/t/p/w500${populares.results[i].poster_path}" alt="${populares.results[i].title}"><h2 class="titulosPelicula">${populares.results[i].title}</h2></a>`
        }
    })
    //Peliculas Mejor Calificadas 
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=4bb2cde7041d18aaa0daf73019bbbaf9&language=en-US&page=1')
    .then(function(response){
        return response.json()
    })
    .then(function(topRated){
        console.log(topRated);
        for(let i = 0; i<topRated.results.length; i++){
            peliculasMejorCalificadas.innerHTML += `<a href="detallesPeliculas.html?id=${topRated.results[i].id}"><img class="imagenPopulares" src="https://image.tmdb.org/t/p/w500${topRated.results[i].poster_path}" alt="${topRated.results[i].title}"><h2 class="titulosPelicula">${topRated.results[i].title}</h2></a>`
        }
    })
    //Proximos Estrenos
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=4bb2cde7041d18aaa0daf73019bbbaf9&language=en-US&page=1')
    .then(function(response){
        return response.json()
    })
    .then(function(proximamente){
        console.log(proximamente);
        for(let i = 0; i < proximamente.results.length; i++){
            proximosEstrenos.innerHTML += `<a href="detallesPeliculas.html?id=${proximamente.results[i].id}"><img class="imagenPopulares" src="https://image.tmdb.org/t/p/w500${proximamente.results[i].poster_path}" alt="${proximamente.results[i].title}"><h2 class="titulosPelicula">${proximamente.results[i].title}</h2></a>`
        }
    })
})