window.addEventListener('load', function(){
    //Capturando elementos
    let nuevosLanzamientos = document.querySelector('#nuevosLanzamientos');
    let populares = document.querySelector('#masPopulares');
    let masDestacadas = document.querySelector('#masDestacadas');
    let alAireProximamente = document.querySelector('#alAireProximamente');
    //Nuevos Lanzamientos 
    fetch('https://api.themoviedb.org/3/tv/latest?api_key=4bb2cde7041d18aaa0daf73019bbbaf9&language=en-US')
    .then(function(response){
        return response.json();
    })
    .then(function(newReleases){
        console.log(newReleases);
    })
    //Mas populares
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=4bb2cde7041d18aaa0daf73019bbbaf9&language=en-US&page=1')
    .then(function(response){
        return response.json();
    })
    .then(function(masPopulares){
        console.log(masPopulares);
        for(let i = 0; i < masPopulares.results.length; i++){
            populares.innerHTML += `<a href="detallesSeries.html?id=${masPopulares.results[i].id}"><img class="imagenPopulares" src="https://image.tmdb.org/t/p/w500${masPopulares.results[i].poster_path}" alt="${masPopulares.results[i].name}"><h2 class="titulosPelicula">${masPopulares.results[i].name}</h2></a>`
            //populares.innerHTML += `<a href="detalleSeries.html?id=${masPopulares.results[i].id}"><img class="imagenPopulares" src="https://image.tmdb.org/t/p/w500/${masPopulares.results[i].backdrop_path}" alt="${masPopulares.results[i].original_name}"><h2 class="titulosPelicula">${masPopulares.results[i].original_name}</h2></a>`
        }
    })
    //topRated
    fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=4bb2cde7041d18aaa0daf73019bbbaf9&language=en-US&page=1')
    .then(function(response){
        return response.json();
    })
    .then(function(topRated){
        console.log(topRated);
        for(let i = 0; i < topRated.results.length; i++){
            masDestacadas.innerHTML += `<a href="detallesSeries.html?id=${topRated.results[i].id}"><img class="imagenPopulares" src="https://image.tmdb.org/t/p/w500${topRated.results[i].poster_path}" alt="${topRated.results[i].name}"><h2 class="titulosPelicula">${topRated.results[i].name}</h2></a>`
        }
    })
    //On air
    fetch('https://api.themoviedb.org/3/tv/on_the_air?api_key=4bb2cde7041d18aaa0daf73019bbbaf9&language=en-US&page=1')
    .then(function(response){
        return response.json();
    })
    .then(function(onAir){
        console.log(onAir);
        for(let i = 0; i < onAir.results.length; i++){
            alAireProximamente.innerHTML += `<a href="detallesSeries.html?id=${onAir.results[i].id}"><img class="imagenPopulares" src="https://image.tmdb.org/t/p/w500${onAir.results[i].poster_path}" alt="${onAir.results[i].name}"><h2 class="titulosPelicula">${onAir.results[i].name}</h2></a>`
        }
    })
})