function salvar() {
    var movie = {
        title: $('#title').val(),
        genre: $('#genre').val(),
        language: $('#language').val(),
        year: $('#year').val(),
        sinopse: $('#sinopse').val()
    };
    
    if(movie.title != "" && movie.language != "" && movie.year != "" && movie.sinopse != ""){
        window.localStorage.setItem('' + movie.title, JSON.stringify(movie));
        alert("Dados Salvos");        
    }else{
        alert("Preencha todos campos!");
    }
}

