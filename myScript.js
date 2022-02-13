/* console.log("funcionando ...") */
// Definimos class "Paciente"
class Paciente {
    constructor(name, age, rut, diagnos) {
        this.name = name;
        this.age = age;
        this.rut = rut;
        this.diagnos = diagnos;
    }
};

// Definimos class "consultorio"
class Consultorio {
    constructor(name, paciente) {
        this.name = name;
        this.paciente = paciente || [];
    }

    get getPaciente() {
        return this.paciente;
    }

    set setPaciente(paciente) {
            this.paciente.push(paciente);
        }
        //Método para la búsqueda de pacientes.
    searchPacientes(name) {
        return this.paciente.find((m) => m.name === name) || 'Paciente no registrado';
    }
};

// Instanciamos "pacientes" en la class
const pacienteOne = new Paciente(
    "Raul Hermosilla",
    33,
    "16.928.631-2",
    "Afacia severa");
const pacienteTwo = new Paciente(
    "Nicole Torres",
    60,
    "9.478.376-k",
    "Colon Irritable");
const pacienteThree = new Paciente(
    "Esteban Marambio",
    29,
    "24.121.098-6",
    "Fractura expuesta húmero");
const pacienteFour = new Paciente(
    "Sebastion Nicolao",
    19,
    "22.322.772-8",
    "Colitis Nerviosa");
const pacienteFive = new Paciente(
    "Santiago Amengual",
    29,
    "21.764.956-5",
    "Cancer Lengua");
const pacienteSix = new Paciente(
    "Amanda Amor",
    24,
    "22.897.323-k",
    "Influenza");
const pacienteSeven = new Paciente(
    "Esteban Paredes",
    47,
    "12.567.212-3",
    "Esguince Tobillo");

/* console.log(pacienteOne); */

// Instanciamos consultorios con paciente
const drC_Amenabar = new Consultorio("Cristobal Amenabar");
const drN_Ahumada = new Consultorio("Nicolas Ahumada");
const drM_Iturra = new Consultorio("Macarena Iturra");

/* console.log(drC_Amenabar) */

//Instanciamos a los pacientes con el respectivo doctor
drC_Amenabar.setPaciente = pacienteOne;
drC_Amenabar.setPaciente = pacienteFive;
drC_Amenabar.setPaciente = pacienteSix;

drN_Ahumada.setPaciente = pacienteTwo;
drN_Ahumada.setPaciente = pacienteThree;

drM_Iturra.setPaciente = pacienteFour;
drM_Iturra.setPaciente = pacienteSeven;

/* console.log(drC_Amenabar);
console.log(drN_Ahumada);
console.log(drM_Iturra); */

//Proceso para buscar pacientes
console.log(drC_Amenabar.searchPacientes("Raul Hermosilla"))

//Mostrar todos los pacientes
const showAllPacients = () => {
    const arrayPacients = new Array(pacienteOne, pacienteTwo, pacienteThree, pacienteFour, pacienteFive, pacienteSix, pacienteSeven);

    return console.log(arrayPacients);
}

showAllPacients();