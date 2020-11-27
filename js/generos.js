window.addEventListener('load', function(){
    //Capturando elementos 
    let bloqueGeneros = document.querySelector('.bloqueGeneros');
    //Generos
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=4bb2cde7041d18aaa0daf73019bbbaf9&language=en-US')
    .then(function(response){
        return response.json();
    })
    .then(function(generos){
        console.log(generos);
        for(let i = 0; i < generos.genres.length; i++){
            bloqueGeneros.innerHTML +=`<a class"titulosGenero" href="detallesGeneros.html?id=${generos.genres[i].id}&name=${generos.genres[i].name}"><h2 class"titulosGenero">${generos.genres[i].name}</h2></a>`
        }
    })
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=4bb2cde7041d18aaa0daf73019bbbaf9&language=en-US')
    .then(function(response){
        return response.json();
    })
    .then(function(generosSeries){
        console.log(generosSeries);
    })
})