import AbstractPersona from "./AbstractPersona";
class Alumno extends AbstractPersona{
    #carne = new String();
    #numeroCreditos = new Number();

    constructor(_apellidos, _nombres, _email, _carne, _numeroCreditos){
        super(_apellidos, _nombres, _email);
        this.#carne = _carne;
        this.#numeroCreditos = _numeroCreditos;
    }

    setCarne(_carne){
        this.#carne = _carne;
    }

    setNumeroCreditos(_numeroCreditos){
        this.#numeroCreditos = _numeroCreditos;
    }

    getCarne(){
        return this.#carne;
    }

    getNumeroCreditos(){
        return this.#numeroCreditos;
    }

    //@Override
    tomarAsistencia(){
        return 1
    }
}