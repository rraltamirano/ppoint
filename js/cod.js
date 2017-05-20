var idseleccionado="vacio";
var contador=0;
var aux;
function agarrarid(identificador){
	idseleccionado=identificador;
	aux=document.getElementById(idseleccionado).style.fontSize;
	console.log(identificador);
}
function habilitar(){

	aux=document.getElementById(idseleccionado);
	var p=aux.getAttribute("class");
	if (p=="titulod") {
		document.getElementById("edicion").disabled=false;
		//verificar como funciona el getStyle 
		var t=getStyle(aux,'fontSize');
		console.log(t);
		document.getElementById("tletra").value=t;
	}else{
		document.getElementById("edicion").disabled=true;
	}
	
}
function nueva(){
	aux=document.getElementById("areatrabajo");
	aux.innerHTML+='<div class="diapositivas" id="'+"1"+contador+'"><input class="titulod" id="'+"2"+contador+'" type="text" value="titulo"  onclick="agarrarid('+"2"+contador+'),habilitar()"><br><textarea class="cuerpod" id="'+"3"+contador+'" onclick="agarrarid('+"3"+contador+'),habilitar()" rows="25" cols="90">cuerpo</textarea></div>';
	contador++;
}
function cambiaColor(){
	var auxiliar=document.getElementById("ccolor").value;
	var aux=document.getElementById("opciontf").value;
	if (aux =="texto"){
		document.getElementById(idseleccionado).style.color=auxiliar;
	}else{
	    document.getElementById(idseleccionado).style.backgroundColor=auxiliar;	
	}	
}
function cambiartamanio(){
	aux=document.getElementById("tletra").value;
	document.getElementById(idseleccionado).style.fontSize=aux;
}






function getStyle(elemento, propiedadCss) {
  var valor = "";
  if(document.defaultView && document.defaultView.getComputedStyle){
    valor = document.defaultView.getComputedStyle(elemento, '').getPropertyValue(propiedadCss);
  }
  else if(elemento.currentStyle) {
    propiedadCss = propiedadCss.replace(/\-(\w)/g, function (strMatch, p1) {
      return p1.toUpperCase();
    });
    valor = elemento.currentStyle[propiedadCss];
  }
  return valor;
}


