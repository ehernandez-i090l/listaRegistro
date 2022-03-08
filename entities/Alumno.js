import AbstractPersona from "./AbstractPersona.js";
import IOperaciones from "../interfaces/IOperaciones.js";

class Alumno extends AbstractPersona {
  #carne = new String();
  #numeroCreditos = new Number();
  constructor(_apellidos, _nombres, _email, _carne, _numeroCreditos) {
    super(_apellidos, _nombres, _email);
    this.#carne = _carne;
    this.#numeroCreditos = _numeroCreditos;
  }

  setCarne(_carne) {
    this.#carne = _carne;
  }

  setNumeroCreditos(_numeroCreditos) {
    this.#numeroCreditos = _numeroCreditos;
  }

  getCarne() {
    return this.#carne;
  }

  getNumeroCreditos() {
    return this.#numeroCreditos;
  }

  //@Override
  tomarAsistencia() {
    return 1;
  }
}

//Implements
Object.assign(Alumno.prototype, IOperaciones)

//@Override
Alumno.prototype.listarMisDatos = (_persona) => {
  
    
      console.log(
        `El Alumno es ${_persona.getNombres()} ${_persona.getApellidos()}, con correo ${_persona.getEmail()}`
      );

}

//@Override implements
Alumno.prototype.eliminarAsignatura = (_persona) => {
  console.log(`Se ha eliminado la asignatura de ${_persona.getNombres()} ${_persona.getApellidos()} perderá ${_persona.getNumeroCreditos()} créditos`);
}


export default Alumno;
