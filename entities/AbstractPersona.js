class AbstractPersona {
    #uuid = new UUID();
    #apellidos = new String();
    #nombres = new String();
    #email = new String();

    constructor(_apellidos, _nombres, _email){
        this.#uuid = UUID.randomUUID().toString();
        this.#apellidos = _apellidos;
        this.#nombres = _nombres;
        this.#email = _email;

        if (this.constructor.name === AbstractPersona.name)
            throw new Error('Abstract class cannot be Instantiated');
    }

    setUuid(){
        this.#uuid = UUID.randomUUID().toString();
    }

    setApellidos(_apellidos){
        this.#apellidos = _apellidos;
    }

    setNombres(_nombres){
        this.#nombres = _nombres;
    }

    setEmail(_email){
        this.#email = _email;
    }

    getUuid(){
        return  this.#uuid
    }

    getApellidos(){
        return this.#apellidos
    }

    getNombres(){
        return this.#nombres
    }

    getEmail(){
        return this.#email
    }

    tomarAsistencia(){
        return `Asistencia tomada para ${getUuid()}`
    }
}

export default AbstractPersona