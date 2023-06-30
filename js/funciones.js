class SistemaDeEmpleados{
	constructor(){
		this.e = new empl;
	}

	ep_empl(){
		return this.e;
	}

	modificarsalario(modificsal){
		this.e.salario1(modificsal);
	}
}

class empl{
	constructor(){
		this.nombre;
		this.apellido;
		this.sexo;
		this.fechanac = 0;
		this.fechain = 0;
		this.salario = 0;
		this.calcularEdad = 0;
		this.calcularAntiguedad = 0;
		this.calcularPrestaciones = 0;
	}

	nom_nombre(){
		return this.nombre;
	}

	ap_apellido(){
		return this.apellido;
	}

	sex_sexo(){
		return this.sexo;
	}

	fecha_na(){
		return this.fechanac;
	}

	fecha_in(){
		return this.fechain;
	}

	sal_salario(){
		return this.salario;
	}

	calc_Edad(){
		return this.calcularEdad;
	}

	calc_edad(){
		return this.calcularAntiguedad;
	}

	calc_pre(){
		return this.calcularPrestaciones;
	}

}
	
	
	function isValidDate(day,month,year){

		var dteDate;
		month=month-1;
		dteDate=new Date(year,month,day);
	
		return ((day==dteDate.getDate()) && (month==dteDate.getMonth()) && (year==dteDate.getFullYear()));
	}
	 
	function validate_fecha(fecha)	{

		var patron=new RegExp("^(19|20)+([0-9]{2})([-])([0-9]{1,2})([-])([0-9]{1,2})$");
	 
		if(fecha.search(patron)==0)
		{
			var values=fecha.split("-");
			if(isValidDate(values[2],values[1],values[0]))
			{
				return true;
			}
		}
		return false;
	}
	 
	function calcularEdad(){

		var fecha=document.getElementById("fechaNacimiento").value;
		if(validate_fecha(fecha)==true)
		{
			var values=fecha.split("-");
			var dia = values[2];
			var mes = values[1];
			var ano = values[0];
	
			var fecha_hoy = new Date();
			var ahora_ano = fecha_hoy.getYear();
			var ahora_mes = fecha_hoy.getMonth()+1;
			var ahora_dia = fecha_hoy.getDate();
	
			var edad = (ahora_ano + 1900) - ano;
			if ( ahora_mes < mes )
			{
				edad--;
			}
			if ((mes == ahora_mes) && (ahora_dia < dia))
			{
				edad--;
			}
			if (edad > 1900)
			{
				edad -= 1900;
			}
	 
			var meses=0;
			if(ahora_mes>mes)
				meses=ahora_mes-mes;
			if(ahora_mes<mes)
				meses=12-(mes-ahora_mes);
			if(ahora_mes==mes && dia>ahora_dia)
				meses=11;
	 
			var dias=0;
			if(ahora_dia>dia)
				dias=ahora_dia-dia;
			if(ahora_dia<dia)
			{
				ultimoDiaMes=new Date(ahora_ano, ahora_mes, 0);
				dias=ultimoDiaMes.getDate()-(dia-ahora_dia);
			}
	 
			document.getElementById("edad").innerHTML= edad+" año(s) ";
		}else{
			document.getElementById("edad").innerHTML="Digite fecha de nacimieto";
		}
	}

	function calcularIngreso(){

		var fecha=document.getElementById("fechaIngreso").value;

		if(validate_fecha(fecha)==true)
		{
			var values=fecha.split("-");
			var dia = values[2];
			var mes = values[1];
			var ano = values[0];
	
			var fecha_hoy = new Date();
			var ahora_ano = fecha_hoy.getYear();
			var ahora_mes = fecha_hoy.getMonth()+1;
			var ahora_dia = fecha_hoy.getDate();
	
			var edad = (ahora_ano + 1900) - ano;
			if ( ahora_mes < mes )
			{
				edad--;
			}
			if ((mes == ahora_mes) && (ahora_dia < dia))
			{
				edad--;
			}
			if (edad > 1900)
			{
				edad -= 1900;
			}
	 
			var meses=0;
			if(ahora_mes>mes)
				meses=ahora_mes-mes;
			if(ahora_mes<mes)
				meses=12-(mes-ahora_mes);
			if(ahora_mes==mes && dia>ahora_dia)
				meses=11;
	 
			var dias=0;
			if(ahora_dia>dia)
				dias=ahora_dia-dia;
			if(ahora_dia<dia)
			{
				ultimoDiaMes=new Date(ahora_ano, ahora_mes, 0);
				dias=ultimoDiaMes.getDate()-(dia-ahora_dia);
			}
	
			document.getElementById("ingreso").innerHTML=" Años: " +edad +" Meses: "+meses+" Días: "+dias;
		}else{
			document.getElementById("ingreso").innerHTML="Digite fecha de ingreso";
		}
	}

	function calcularPrestaciones(sal, fecha){

		var fecha=document.getElementById("fechaIngreso").value;
		var sal=document.getElementById("salario").value;
		
		if(validate_fecha(fecha)==true)
		{
			var values=fecha.split("-");
			var dia = values[2];
			var mes = values[1];
			var ano = values[0];
	
			var fecha_hoy = new Date();
			var ahora_ano = fecha_hoy.getYear();
			var ahora_mes = fecha_hoy.getMonth()+1;
			var ahora_dia = fecha_hoy.getDate();
	
			var edad = (ahora_ano + 1900) - ano;
			if ( ahora_mes < mes )
			{
				edad--;
			}
			if ((mes == ahora_mes) && (ahora_dia < dia))
			{
				edad--;
			}
			if (edad > 1900)
			{
				edad -= 1900;
			}
	 
			var meses=0;
			if(ahora_mes>mes)
				meses=ahora_mes-mes;
			if(ahora_mes<mes)
				meses=12-(mes-ahora_mes);
			if(ahora_mes==mes && dia>ahora_dia)
				meses=11;
	 
			var dias=0;
			if(ahora_dia>dia)
				dias=ahora_dia-dia;
			if(ahora_dia<dia)
			{
				ultimoDiaMes=new Date(ahora_ano, ahora_mes, 0);
				dias=ultimoDiaMes.getDate()-(dia-ahora_dia);
			}
		
		document.getElementById("textprest").innerHTML=(sal*edad)/12;
		}else{
			document.getElementById("textprest").innerHTML="Datos incorrectos";
		}
	}

	function modific_Salario() {
		let mod=document.getElementById("modificar").value;

		mod = prompt("Ingrese el nuevo valor");
		
		if (mod != null){
			document.getElementById("salario").innerText=mod;
		}
		else{
			alert("Introduce un valor");
		}
	
		 
	}
	document.addEventListener("DOMContentLoaded", cargaPagina);
	window.addEventListener("load", cargaPagina);
	function cargaPagina() {
    let btn = document.getElementById("modificar").addEventListener("click", cambiaValores);
	}


function cambiaValores() {
    let inputNombre = document.getElementById("salario");
	let sal_rio = document.getElementById("modific_Salario")

    inputNombre.value = sal_rio;
}

function limpiar(){
	document.getElementById("nombre").value='';
	document.getElementById("apellido").value='';
	document.getElementById("sexo").value='';
	document.getElementById("fechaNacimiento").value='';
	document.getElementById("fechaIngreso").value='';
	document.getElementById("salario").value='';
	document.getElementById("edad").value='';
	document.getElementById("ingreso").value='';
	document.getElementById("tabletext3").value='';
}

