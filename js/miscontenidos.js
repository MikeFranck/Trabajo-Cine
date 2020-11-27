window.addEventListener('load', function(){
    let nuevosLanzamientos = document.querySelector('#nuevosLanzamientos');
    let masDestacadas = document.querySelector('#masDestacadas');
    let alAireProximamente = document.querySelector('#alAireProximamente');
    let populares = document.querySelector('#masPopulares');

    if (localStorage.getItem("test")) {
        x = JSON.parse(localStorage.getItem("test"));
    } else {
        // No data, start with an empty array
        x = [];
    }
    console.log(x)
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=4bb2cde7041d18aaa0daf73019bbbaf9&language=en-US&page=1')
    .then(function(response){
        return response.json();
    })
    .then(function(masPopulares){
        console.log(masPopulares);
        for(let i = 0; i < x.length; i++){
            console.log(x[i])
            populares.innerHTML += `<a href="detallesSeries.html?id=${x[i]}"><img class="imagenPopulares" src="https://image.tmdb.org/t/p/w500${masPopulares.results[i].poster_path}" alt="${masPopulares.results[i].name}"><h2 class="titulosPelicula">${masPopulares.results[i].name}</h2></a>`
            //populares.innerHTML += `<a href="detalleSeries.html?id=${masPopulares.results[i].id}"><img class="imagenPopulares" src="https://image.tmdb.org/t/p/w500/${masPopulares.results[i].backdrop_path}" alt="${masPopulares.results[i].original_name}"><h2 class="titulosPelicula">${masPopulares.results[i].original_name}</h2></a>`
        }
    })
})