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
    if (_persona.constructor.name === Profesor.name){
      _persona.listarMisDatos(_persona.getCui())
    } else {
      _persona.listarMisDatos(_persona.getCarne())
    }
}

function quitarAsignatura(_persona){
  _persona.eliminarAsignatura('test')
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
  
  /*
  console.log(a.listarMisDatos(22001));
  console.log(p.listarMisDatos(1010));
  */
}

main();
