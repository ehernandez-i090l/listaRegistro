import AbstractPersona from "./AbstractPersona.js";
import IOperaciones from "../interfaces/IOperaciones.js";

class Profesor extends AbstractPersona {
  #cui = new String();
  #cargo = new String();

  constructor(_apellidos, _nombres, _email, _cui, _cargo) {
    super(_apellidos, _nombres, _email);
    this.#cui = _cui;
    this.#cargo = _cargo;
  }
  setCui(_cui) {
    this.#cui = _cui;
  }

  setCargo(_cargo) {
    this.#cargo = _cargo;
  }

  getCui() {
    return this.#cui;
  }

  getCargo() {
    return this.#cargo;
  }

  //@Override
  tomarAsistencia() {
    return 2;
  }
}

Object.assign(Profesor.prototype, IOperaciones)

//@Override
Profesor.prototype.listarMisDatos  = (_persona) => {

  console.log(`El Profesor es ${_persona.getNombres()} ${_persona.getApellidos()}, con correo ${_persona.getEmail()} y su cargo es ${_persona.getCargo()}`);
    
};

//@Override
Profesor.prototype.eliminarAsignatura = (_persona) => {console.log(`Se ha eliminado la asignatura del profesor ${_persona.getNombres()} ${_persona.getApellidos()}`);}

export default Profesor;
