import AbstractPersona from "./AbstractPersona.js";
import IOperaciones from "../interfaces/IOperaciones.js";

class Alumno extends IOperaciones.implementedWith(AbstractPersona) {
  #carne = new String();
  #numeroCreditos = new Number();
  constructor(_apellidos, _nombres, _email, _carne, _numeroCreditos) {
    super(_apellidos, _nombres, _email);
    this.#carne = _carne;
    this.#numeroCreditos = _numeroCreditos;

    //@Override implements
    this.listarMisDatos = (_carne) => {
        if (_carne === this.getCarne()){
            console.log(`El Alumno es ${this.getNombres()} ${this.getApellidos()}, con correo ${this.getEmail()} y ${this.getNumeroCreditos()} créditos totales.`);
        } else {
            console.log(`${_carne} no coincide.`)
        }
        
    }

    //@Override implements
    this.eliminarAsignatura = () => {console.log('Override eliminar asignatura');}
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

export default Alumno;
