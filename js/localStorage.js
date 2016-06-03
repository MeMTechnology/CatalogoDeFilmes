$(function(){
    if(tbMovies == null) // Caso não haja conteúdo, iniciamos um vetor vazio
    tbMovies = [];
    tbMovies = JSON.parse(tbMovies); // Converte string para objeto
    var operacao = "A"; //"A"=Adição; "E"=Edição
    var indice_selecionado = -1; //Índice do item selecionado na lista
    var tbMovies = localStorage.getItem("tbMovies");// Recupera os dados armazenados
    
});

function salvar(){
    console.log("teste")
    var movie = JSON.stringify({
        Title  : $("#title").val(),
        Genre     : $("#genre").val(),
        Language : $("#languade").val(),
        Year    : $("#year").val(),
        Sinopse : $()
    });
    tbMovies.push(movie);
    localStorage.setItem("tbMovies", JSON.stringify(tbMovies));
    alert("Registro adicionado.");
    return true;
}