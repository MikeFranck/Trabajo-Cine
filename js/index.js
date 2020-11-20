window.addEventListener('load', function(){
    //Capturando elementos
    let peliculasDestacadas = document.querySelector('.peliculasDestacadas');
    let seriesDestacadas = document.querySelector('.seriesDestacadas');
    let peliculasHoy = document.querySelector('.peliculasPopulares');
    let seriesMasVistasHoy = document.querySelector('.seriesPopulares');
    //Peliculas Destacadas
    let populares = document.querySelector('#destacadas');

    //Aquí vamos a trabajar con el consumo de una API
    
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=17c89d9fa3c16b97f05929af9001eb2d&language=en-US&page=1')
    .then(respuesta =>{
        return respuesta.json()
    })
    .then(function(peliculasPopulares){
        //console.log(peliculasPopulares.results);
        for(let i = 0 ; i < peliculasPopulares.results.length; i++){
            populares.innerHTML += `<li> <div class="uk-panel"> <img src="https://image.tmdb.org/t/p/w500/${peliculasPopulares.results[i].poster_path} " alt="${peliculasPopulares.results[i].title}"> <div class="uk-position-center  uk-panel"><h1>  </h1></div>${peliculasPopulares.results[i].title}</div> </li> `       
  
            /*Esto es otra forma de hacer lo mismo
            peliculas.innerHTML += `<li><img src="https://image.tmdb.org/t/p/w500/${peliculasPopulares.results[i].poster_path} " alt=""><div class="uk-position-center uk-panel"><h1> ${i+1}</h1></div></li>` */
        }
    })
    /*fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=4bb2cde7041d18aaa0daf73019bbbaf9&language=en-US&page=1')
    .then(function(response){
        return response.json()
    })
    .then(function(masPopulares){
        console.log(masPopulares);
        for(let i = 0; i < masPopulares.results.length; i++){
            peliculasDestacadas.innerHTML += `<a href="detallesPeliculas.html?${masPopulares.results[i].id}"><img class="imagenPopulares" src="https://image.tmdb.org/t/p/w500/${masPopulares.results[i].backdrop_path}" alt="${masPopulares.results[i].original_title}"><h2>${masPopulares.results[i].original_title}</h2></a>`
            
        }
    })
    .catch(function(error){
        console.log(`El error es ${error}`)
    })*/
    //Series Destacadas  
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=4bb2cde7041d18aaa0daf73019bbbaf9&language=en-US&page=1')
    .then(function(response){
        return response.json();
    })
    .then(function(seriesMasPopulares){
        console.log(seriesMasPopulares);
        for(let i = 0; i<seriesMasPopulares.results.length; i++){
            seriesDestacadas.innerHTML = `<a href="detallesSeries.html?${seriesMasPopulares.results[i].id}"><img class="imagenPopulares" src="https://image.tmdb.org/t/p/w500${seriesMasPopulares.results[i].backdrop_path}" alt="${seriesMasPopulares.results[i].original_name}"><h2>${seriesMasPopulares.results[i].original_name}</h2></a>`  
        }
    })
    .catch(function(error){
        console.log(`El error es ${error}`)
    })
    //Peliculas populares del dia
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=4bb2cde7041d18aaa0daf73019bbbaf9')
    .then(function(response){
        return response.json()
    })
    .then(function(peliculasPopulares){
        console.log(peliculasPopulares)
        for(let i = 0; i<peliculasPopulares.results.length; i++)
            peliculasHoy.innerHTML = `<a href="detallesPeliculas.html?id=${peliculasPopulares.results[i].id}"><img class="imagen" src="https://image.tmdb.org/t/p/w500/${peliculasPopulares.results[i].backdrop_path}" alt="${peliculasPopulares.results[i].original_title}"><h2>${peliculasPopulares.results[i].original_title}</h2></a>`
    })
    .catch(function(error){
        console.log(`El error es ${error}`)
    })
    //Series populares del dia
    fetch('https://api.themoviedb.org/3/trending/tv/day?api_key=4bb2cde7041d18aaa0daf73019bbbaf9')
    .then(function(response){
        return response.json()
    })
    .then(function(seriesPopulares){
        console.log(seriesPopulares);
        for(let i = 0; i<seriesPopulares.results.length; i++){
            seriesMasVistasHoy.innerHTML = `<a href="detallesSeries.html?${seriesPopulares.results[i].id}"><img class="imagen" src="https://image.tmdb.org/t/p/w500${seriesPopulares.results[i].backdrop_path}" alt="${seriesPopulares.results[i].original_name}"><h2>${seriesPopulares.results[i].original_name}</h2></a>`
        }
    })
    .catch(function(error){
        console.log(`El error es ${error}`)
    })
})