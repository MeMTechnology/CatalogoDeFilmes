var total = localStorage.length,
        i = 0,
        chave,
        arrayValores = [],
        arrayChaves = [],
        valor;
        
       while(i <= total){
           chave=localStorage.key(i);
           arrayChaves[i] = chave;
           valor=localStorage.getItem(chave);
           arrayValores[i]=valor;
           console.log(localStorage.getItem(arrayChaves[i]));
           i++
       }
       
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

