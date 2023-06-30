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
	 