import AbstractPersona from "./AbstractPersona.js";

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
  listarMisDatos() {
    console.log("Override listar");
  }
  eliminarAsignatura() {
    console.log("Override eliminar");
  }

  //@Override
  tomarAsistencia() {
    return 2;
  }
}

export default Profesor;
