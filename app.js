import AbstractPersona from "./entities/AbstractPersona.js";
import Alumno from "./entities/Alumno.js";
import Profesor from "./entities/Profesor.js";

const listaGeneral = [];

function operarRegistro(_persona){
    listaGeneral.push(_persona)
}



function main() {
  const a = new Alumno("Hernández", "Edson", "edson@email.com", 22001, 10);
  operarRegistro(a);
  console.log(a.tomarAsistencia());

  const p = new Profesor("Hernández","Edson","edson@email.com","0101","TICS");
  operarRegistro(p);
  console.log(p.tomarAsistencia());

  console.log(a.listarMisDatos(22001));
}

main();

listaGeneral.forEach(e => console.log(e.getNombres()))