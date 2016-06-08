	var keyStorage = localStorage.getItem("keyStorage");// Recupera os dados armazenados
	keyStorage = JSON.parse(keyStorage); // Converte string para objeto
	if(keyStorage == null){// Caso não haja conteúdo, iniciamos
		keyStorage = JSON.stringify({
			user   : "admin",
			password  : "admin"
		});//Altera o item selecionado na tabela
	localStorage.setItem("keyStorage", JSON.stringify(keyStorage));
	}
	
	var loginUp = localStorage.getItem("loginUp");// Recupera os dados armazenados
	loginUp = JSON.parse(loginUp); // Converte string para objeto
	if(loginUp == null){// Caso não haja conteúdo, iniciamos
		loginUp = JSON.stringify({
			flag   : "0"
		});//Altera o item selecionado na tabela
	localStorage.setItem("loginUp", JSON.stringify(loginUp));
	}
	
function salvar(){
	//alert(document.getElementsByName('newUser')[0].value);
	keyStorage = JSON.stringify({
			user   : document.getElementsByName('newUser')[0].value,
			password  : document.getElementsByName('newKey')[0].value ,
		});//Altera o item selecionado na tabela
	localStorage.setItem("keyStorage", JSON.stringify(keyStorage));
	//alert("Sucesso: "+keyStorage);
}

function getKey(){
	var keyStorage = localStorage.getItem("keyStorage");// Recupera os dados armazenados
	keyStorage = JSON.parse(keyStorage); // Converte string para objeto
	return keyStorage;
}
function Login() {

	var teste = getKey();
	var usuario = document.getElementsByName('usuario')[0].value;
	usuario=usuario.toLowerCase();
   var senha= document.getElementsByName('senha')[0].value;
  senha=senha.toLowerCase();
  var jsonObj = JSON.parse(teste);
  //alert(jsonObj.user);
  if (usuario == jsonObj.user && senha==jsonObj.password) {
	document.getElementById("myForm").reset();
	
	loginUp = JSON.stringify({flag  : "1"});
	localStorage.setItem("loginUp", JSON.stringify(loginUp));
    window.location="index.html";
  }
  else { 
	document.getElementById("myForm").reset();
	alert("Dados incorretos, tente novamente"); 
  }
}

function logout(){
	loginUp = JSON.stringify({flag  : "0"});
	localStorage.setItem("loginUp", JSON.stringify(loginUp));
	window.location="loginPage.html";
}

function newPassword() {
	var tiao = getKey();
	var usuario = document.getElementsByName('usuario')[0].value;
	usuario=usuario.toLowerCase();
   var senha= document.getElementsByName('senha')[0].value;
  senha=senha.toLowerCase();
  var novoUser = document.getElementsByName('newUser')[0].value;
  novoUser = novoUser.toLowerCase();
  
  var novaSenha = document.getElementsByName('newKey')[0].value;
  novaSenha = novaSenha.toLowerCase();
	var jsonObj = JSON.parse(tiao);//Converto o Json em objeto
	if (usuario== jsonObj.user && senha==jsonObj.password) {
		salvar();
		window.location="index.html";
		document.getElementById("myForm").reset();
	}
	else { 
		document.getElementById("myForm").reset();
		alert("Dados incorretos, tente novamente"); 
  }
}

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "40%";
    document.getElementById("myNav").style.border = "4px solid rgb(50,50,255)";//Cor da borda do Overlay
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("myNav").style.border = "0px";
}

function retorna(){
	var logString = localStorage.getItem("loginUp");// Recupera os dados armazenados
	logString = JSON.parse(logString);
	logString = JSON.parse(logString);
	//alert(logString.flag);
	if(logString.flag == "1") window.location="index.html";
	else window.location="loginPage.html";
}