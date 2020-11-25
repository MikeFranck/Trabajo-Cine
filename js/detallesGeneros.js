window.addEventListener('load', function(){
    //Capturando elementos
    let titulo = document.querySelector('.titulo');
    let tituloSeries = document.querySelector('.series');
    let peliculas = document.querySelector('.imagenesPelicula');
    let series = document.querySelector('.imagenesSerie');
    //Traer el id
    let idEntrante = location.search;
    console.log(idEntrante);
    let idEntranteDos = new URLSearchParams(idEntrante);
    console.log(idEntranteDos);
    let id = idEntranteDos.get('id');
    console.log(id)
    //Traer nombre
    let nombre = idEntranteDos.get('name');
    console.log(nombre)
    //Fetch peliculas genero
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4bb2cde7041d18aaa0daf73019bbbaf9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`)
    .then(function(response){
        return response.json();
    })
    .then(function(peliculasGenero){
        console.log('peliculas'+peliculasGenero);
        //titulo.innerHTML += nombre
        for(let i = 0; i < peliculasGenero.results.length; i++){
            titulo.innerHTML = `Movies of ${nombre}`
            peliculas.innerHTML += `<a href="detallesPeliculas.html?id=${peliculasGenero.results[i].id}"><div class="peliculasBloque"><img src="https://image.tmdb.org/t/p/w500/${peliculasGenero.results[i].backdrop_path} " alt="${peliculasGenero.results[i].title}"><h3 class"titulosPeliculasYSeries">${peliculasGenero.results[i].title}</h3></div></a>`
        }
    })
    //Fetch series  genero
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=4bb2cde7041d18aaa0daf73019bbbaf9&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${id}&include_null_first_air_dates=false`)
    .then(function(response){
        return response.json();
    })
    .then(function(seriesGeneros){
        console.log('series'+seriesGeneros);
        for(let i = 0; i < seriesGeneros.results.length; i++){
            tituloSeries.innerHTML = `Series of ${nombre}`
            series.innerHTML += `<a href="detallesSeries.html?id=${seriesGeneros.results[i].id}"><div class=""><img src="https://image.tmdb.org/t/p/w500/${seriesGeneros.results[i].backdrop_path} " alt="${seriesGeneros.results[i].name}"><h3 class"titulosPeliculasYSeries">${seriesGeneros.results[i].name}</h3></div></a>`
        }
    })
})