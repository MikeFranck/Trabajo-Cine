window.addEventListener('load', function(){
    //Capturando elemento 
    let imagenSerie = document.querySelector('.imagenDeLaSerie');
    let titulo = document.querySelector('.titulo');
    let genero = document.querySelector('.genero');
    let subtitulo = document.querySelector('.subtitulo');
    let estreno = document.querySelector('.Estreno');
    let resumen = document.querySelector('.resumen');
    let puntuacion = document.querySelector('.puntuacion');
    let reproducciones = document.querySelector('.reproducciones');
    let idiomas = document.querySelector('.idiomas');
    let ultimoEpisodio = document.querySelector('.ultimoEpisodio');
    let proximoEpisodio = document.querySelector('.proximoEpisodio');
    let origen = document.querySelector('.origen');
    let disponible = document.querySelector('.disponible');
    let productor = document.querySelector('.productor');
    let similar = document.querySelector('#similares');
    let textoReviews = document.querySelector('.textoReviews');
    //Traer el id
    let detalleEntrante = location.search;
    //console.log(detalleEntrante);
    let detalleEntranteObjeto = new URLSearchParams(detalleEntrante);
    //console.log(detalleEntranteObjeto);
    let id = detalleEntranteObjeto.get('id');
    //console.log(id)
    //detalles series
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=4bb2cde7041d18aaa0daf73019bbbaf9&language=en-US`)
    .then(function(response){
        return response.json();
    })
    .then(function(detallesSerie){
        console.log(detallesSerie);
        //console.log(imagenSerie);
        imagenSerie.innerHTML += ` <img src="https://image.tmdb.org/t/p/w500${detallesSerie.poster_path}" class="img" alt="${detallesSerie.name}">`
        imagenSerie.innerHTML += 
        `<section class="temp-ep">
            <img class="teleretro" src="imagenes/tele retro2.png" alt="tele retro2">
            <ul>
                <li class="temporadas">${detallesSerie.number_of_seasons} seasons</li>
                <li class="episodios">${detallesSerie.number_of_episodes} episodios</li>
            </ul>
        </section>`;
        titulo.innerHTML = detallesSerie.name;
        subtitulo.innerHTML = `"${detallesSerie.tagline}"`
        for(let i = 0; i < detallesSerie.genres.length; i++){
            //genero.innerHTML += detallesSerie.genres[i].name;
            genero.innerHTML += `<a class="linkGeneros" href="detallesGeneros.html?id=${detallesSerie.genres[i].id}&name=${detallesSerie.genres[i].name}">${detallesSerie.genres[i].name}</a>`
        }
        estreno.innerHTML += detallesSerie.first_air_date;
        resumen.innerHTML = detallesSerie.overview
        puntuacion.innerHTML += detallesSerie.vote_average
        reproducciones.innerHTML += detallesSerie.popularity
        for(let i = 0; i < detallesSerie.spoken_languages.length; i++){
            idiomas.innerHTML += detallesSerie.spoken_languages[i].english_name;
        }
        ultimoEpisodio.innerHTML += `"${detallesSerie.last_episode_to_air.name}", el ${detallesSerie.last_episode_to_air.air_date}`
        proximoEpisodio.innerHTML += `"${detallesSerie.next_episode_to_air.name}", el ${detallesSerie.next_episode_to_air.air_date}`;
        for(let i = 0; i < detallesSerie.origin_country.length; i++){
            origen.innerHTML += detallesSerie.origin_country[i]
        }
        for(let i = 0; i < detallesSerie.networks.length; i++){
            disponible.innerHTML += detallesSerie.networks[i].name
        }
        for(let i = 0; i < detallesSerie.created_by.length; i++){
            productor.innerHTML += detallesSerie.created_by[i].name
        }
    })
    //Reviews
    fetch(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=4bb2cde7041d18aaa0daf73019bbbaf9&language=en-US&page=1`)
    .then(function(response){
        return response.json();
    })
    .then(function(reviews){
        console.log(reviews);
        for(let i = 0; i < reviews.results.length; i++){
            textoReviews.innerHTML += `<h3>${reviews.results[i].author}</h3><p>${reviews.results[i].content}</p>`
        }
    })
    //Series Relacionadas
    fetch(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=4bb2cde7041d18aaa0daf73019bbbaf9&language=en-US&page=1`)
    .then(function(response){
        return response.json();
    })
    .then(function(seriesSimilares){
        console.log(seriesSimilares);
        for(let i = 0; seriesSimilares.results.length; i++){
            similar.innerHTML += `<a href="detallesSeries.html?id=${seriesSimilares.results[i].id}"><li> <div class="uk-panel"> <img src="https://image.tmdb.org/t/p/w500/${seriesSimilares.results[i].poster_path} " alt="${seriesSimilares.results[i].name}"> <div class="uk-position-center  uk-panel"><h2></div><h2 class="peliculasRelacionadas">${seriesSimilares.results[i].name}</h2></div> </li></a>`
        }
    })
})
//Agregar
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    var a = getParameterByName("id")
    console.log(a)
}

let x= [ ];
function agregar(){
    x.push(getParameterByName("id"))
    localStorage.setItem("test", JSON.stringify(x));
    console.log(x)
}
function quitar(){
    let z = x.indexOf(getParameterByName("id"))
    x.splice(z,1)
    localStorage.setItem("test", JSON.stringify(x));
    console.log(x)
}
if (localStorage.getItem("test")) {
    x = JSON.parse(localStorage.getItem("test"));
} else {
    // No data, start with an empty array
    x = [];
}
console.log(x)