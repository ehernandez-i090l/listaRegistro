import AbstractPersona from "./AbstractPersona.js";
import IOperaciones from "../interfaces/IOperaciones.js";

class Profesor extends IOperaciones.implementedWith(AbstractPersona) {
  #cui = new String();
  #cargo = new String();

  constructor(_apellidos, _nombres, _email, _cui, _cargo) {
    super(_apellidos, _nombres, _email);
    this.#cui = _cui;
    this.#cargo = _cargo;

    //@Override implements
    this.listarMisDatos = (_cui) => {
      if (_cui === this.getCui()) {
        console.log(
          `El Profesor es ${this.getNombres()} ${this.getApellidos()}, con correo ${this.getEmail()} y su cargo es ${this.getCargo()}`
        );
      } else {
        console.log(`${_cui} no coincide.`);
      }
    };

    //@Override implements
    this.eliminarAsignatura = (_idAsignatura) => {console.log(`Se ha eliminado la asignatura del profesor ${this.getNombres()} ${this.getApellidos()}`);}

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

export default Profesor;
