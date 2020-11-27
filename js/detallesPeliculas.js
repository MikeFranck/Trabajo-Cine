window.addEventListener('load', function(){
    //Capturando elementos
    let titulo = document.querySelector('.titulo');
    let puntuacion = document.querySelector('.puntuacion');
    let resumen = document.querySelector('.Resumen');
    let anio = document.querySelector('.anio');
    let imagen = document.querySelector('.img');
    let genero = document.querySelector('.genero');
    let duracion = document.querySelector('.duracion');
    let reproduciones = document.querySelector('.vistos');
    let subtitulo = document.querySelector('.subtitulo');
    let idiomas = document.querySelector('.idiomas');
    let cosoDeArriba = document.querySelector('.pelicula');
    let iframe = document.querySelector('.trailer');
    let relacionados = document.querySelector('.relacionadas');
    let imagenes = document.querySelector('.extras');
    let peliculasSimilares = document.getElementById('similares');
    let reviews = document.querySelector('.textoReviews');
    //Traer el id
    let peliculaEntrante = location.search;
    //console.log(peliculaEntrante + '------');
    let peliculaEntranteObjeto = new URLSearchParams(peliculaEntrante);
    let id = peliculaEntranteObjeto.get('id');
    //console.log(id + '-----------')
    //Detalles Pelicula
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4bb2cde7041d18aaa0daf73019bbbaf9&language=en-US`)
    .then(function(response){
        return response.json()
    })
    .then(function(pelicula){
        console.log(pelicula)
        titulo.innerHTML = pelicula.title;
        subtitulo.innerHTML = `"${pelicula.tagline}"`;
        duracion.innerHTML += pelicula.runtime;
        puntuacion.innerHTML += pelicula.vote_average;
        resumen.innerHTML = pelicula.overview;
        anio.innerHTML += pelicula.release_date;
        imagen.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" class="img" alt="${pelicula.title}">`;
        for(let i = 0; i< pelicula.genres.length; i++){
            genero.innerHTML += `<a class="linkGeneros" href="detallesGeneros.html?id=${pelicula.genres[i].id}&name=${pelicula.genres[i].name}">${pelicula.genres[i].name}</a>`;
        }
        reproduciones.innerHTML += pelicula.popularity
        for(let i = 0; i< pelicula.spoken_languages.length; i++){
            idiomas.innerHTML += pelicula.spoken_languages[i].name;
        }
    })
    .catch(function(error){
        console.log(`El error es ${error}`)
    })
    //Trailer
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=4bb2cde7041d18aaa0daf73019bbbaf9&language=en-US`)
    .then(function(response){
        return response.json()
    })
    .then(function(imagenesPelicula){
        console.log(imagenesPelicula)
        iframe.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${imagenesPelicula.results[0].key}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    })
    .catch(function(error){
        console.log(`El error es ${error}`)
    })
    //Pelicula
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=4bb2cde7041d18aaa0daf73019bbbaf9&language=en-US`)
    .then(function(response){
        return response.json();
    })
    .then(function(videoDeLaPelicula){
        console.log(videoDeLaPelicula);
        //imagenes.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoDeLaPelicula.results[0].key}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    })
    .catch(function(error){
        console.log(`El error es ${error}`)
    })
    //Imagenes
    /*fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=4bb2cde7041d18aaa0daf73019bbbaf9&language=en-US`)
    .then(function(response){
        return response.json()
    })
    .then(function(fotosDeLaPelicula){
        console.log(fotosDeLaPelicula);
        for(let i = 0; i<fotosDeLaPelicula.length; i++){
            imagenes.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${fotosDeLaPelicula[i].backdrops}" class="imgextra"> `
        }
    })
    .catch(function(error){
        console.log(`El error es ${error}`)
    })*/
    //Reviews
    fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=4bb2cde7041d18aaa0daf73019bbbaf9&language=en-US&page=1`)
    .then(function(response){
        return response.json()
    })
    .then(function(resenias){
        console.log(resenias);
        for(let i = 0; i < resenias.results.length; i++){
            reviews.innerHTML += `<h3>${resenias.results[i].author}</h3><p class"content">${resenias.results[i].content}</p>`
        }
    })
    //Peliculas Relacionadas
    fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=4bb2cde7041d18aaa0daf73019bbbaf9&language=en-US&page=1`)
    .then(function(response){
        return response.json();
    })
    .then(function(Relacionadas){
        console.log(Relacionadas);
        for(let i = 0; i < Relacionadas.results.length; i++){
            peliculasSimilares.innerHTML += `<a href="detallesPeliculas.html?id=${Relacionadas.results[i].id}"><li> <div class="uk-panel"> <img src="https://image.tmdb.org/t/p/w500/${Relacionadas.results[i].poster_path} " alt="${Relacionadas.results[i].title}"> <div class="uk-position-center  uk-panel"><h2></div><h2 class="peliculasRelacionadas">${Relacionadas.results[i].title}</h2></div> </li></a>`
        }
    })
    .catch(function(error){
        console.log(`El error es ${error}`)
    })
})