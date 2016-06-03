function salvar() {
      
    if(title == ""){
          alert("Dados incorretos, tente novamente");
    }else{
        localStorage.setItem("title", $("#title").val());
        alert("Dados salvos");
    }    
}

