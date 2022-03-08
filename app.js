import AbstractPersona from "./entities/AbstractPersona.js";
import Alumno from "./entities/Alumno.js";
import Profesor from "./entities/Profesor.js";

const listaGeneral = [];

function operarRegistro(_persona){
    listaGeneral.push(_persona)
}

function registrarAsistencia(_persona){
  _persona.tomarAsistencia()
}

function verMisDatos(_persona){
      _persona.listarMisDatos(_persona)
}

function quitarAsignatura(_persona){
  _persona.eliminarAsignatura(_persona)
}




function main() {
  const a = new Alumno("Hernández", "Edson", "edson@email.com", 22001, 10);
  operarRegistro(a);
  console.log(a.tomarAsistencia());

  const p = new Profesor("Hernández","Edson","edson@email.com",1010,"TICS");
  operarRegistro(p);
  console.log(p.tomarAsistencia());
  
  verMisDatos(a);
  quitarAsignatura(a);
  
 
  
}

main();
