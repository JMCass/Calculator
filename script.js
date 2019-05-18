'use strict';

(function(){

var botones = document.querySelectorAll("button");

var display = document.querySelector("input");

var valor1 = "";

var valor2 = "";

var operacion = "";

var punto = false;

function suma (a,b){
	return parseFloat(a) + parseFloat(b);}

function resta (a,b){
	return parseFloat(a) - parseFloat(b);}

function mult (a,b){
	return parseFloat(a) * parseFloat(b);}

function div (a,b){
	return parseFloat(a) / parseFloat(b);}

function percent (a,b){
	return (parseFloat(a)*parseFloat(b))/100;}

function obtenerDato(evento){
	console.log(evento.target.id);
	if(evento.target.id >= "0" && evento.target.id <= "9"){
		display.value = display.value + evento.target.id;
	}

	if(evento.target.id == "+" || evento.target.id == "-" || evento.target.id =="*" || evento.target.id == "/" || evento.target.id == "%"){
		punto = false;
		valor1 = display.value;
		operacion = evento.target.id;
		display.value = ""; 

	}

	if(evento.target.id == "=" && operacion =="+"){
		if (valor1 != "" && display.value !="") {
		valor2 = display.value;
		display.value = suma(valor1,valor2);
	}
		
	}

	if(evento.target.id == "." && punto == false){
		display.value = display.value + "."
		punto = true; 

	}

	if(evento.target.id =="ac"){
		display.value ="";
		valor1 = "";
		valor2 = "";
		punto = false;
		operacion = "";
	}

	if(evento.target.id =="s"){
		display.value = (parseFloat(display.value))*-1;
	}


	if(evento.target.id == "=" && operacion =="-"){
		if (valor1 != "" && display.value !="") {
		valor2 = display.value;
		display.value = resta(valor1,valor2);
	}
		
	}

	if(evento.target.id == "=" && operacion =="*"){
		if (valor1 != "" && display.value !="") {
		valor2 = display.value;
		display.value = mult(valor1,valor2);
	}
		
	}


	if(evento.target.id == "=" && operacion =="/"){
		if (valor1 != "" && display.value !="") {
		valor2 = display.value;
		display.value = div(valor1,valor2);
	}
		
	}


	if(evento.target.id == "=" && operacion =="%"){
		if (valor1 != "" && display.value !="") {
			valor2 = display.value;
		display.value = percent(valor1, valor2);
	}
		
	}
		

}

for (var i=0; i< botones.length; i++){
	botones[i].addEventListener("click", obtenerDato);

}

})();//IIFE


